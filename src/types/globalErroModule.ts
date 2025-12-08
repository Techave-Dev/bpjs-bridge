// src/errors/BpjsError.ts

/**
 * Base Error untuk semua error BPJS
 */
export class BpjsError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number,
    public originalError?: any,
    public metadata?: Record<string, any>
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      statusCode: this.statusCode,
      metadata: this.metadata,
      ...(this.originalError && { details: this.originalError }),
    };
  }
}

/**
 * Error untuk masalah network/koneksi
 */
export class BpjsNetworkError extends BpjsError {
  constructor(message: string, originalError?: any) {
    super(message, "NETWORK_ERROR", 503, originalError);
  }
}

/**
 * Error untuk masalah autentikasi
 */
export class BpjsAuthError extends BpjsError {
  constructor(message: string = "Autentikasi gagal", originalError?: any) {
    super(message, "AUTH_ERROR", 401, originalError);
  }
}

/**
 * Error untuk endpoint tidak ditemukan
 */
export class BpjsEndpointNotFoundError extends BpjsError {
  constructor(endpointName: string) {
    super(
      `Endpoint '${endpointName}' tidak ditemukan`,
      "ENDPOINT_NOT_FOUND",
      404
    );
  }
}

/**
 * Error untuk response tidak valid dari BPJS
 */
export class BpjsResponseError extends BpjsError {
  constructor(
    message: string,
    code?: string,
    statusCode?: number,
    public response?: any
  ) {
    super(message, code || "RESPONSE_ERROR", statusCode || 500, response);
  }
}

/**
 * Error untuk Redis cache
 */
export class BpjsCacheError extends BpjsError {
  constructor(message: string, originalError?: any) {
    super(message, "CACHE_ERROR", 500, originalError);
  }
}

/**
 * Error untuk validasi parameter
 */
export class BpjsValidationError extends BpjsError {
  constructor(message: string, public fields?: Record<string, string>) {
    super(message, "VALIDATION_ERROR", 400, fields);
  }
}

/**
 * Error untuk timeout
 */
export class BpjsTimeoutError extends BpjsError {
  constructor(message: string = "Request timeout") {
    super(message, "TIMEOUT_ERROR", 408);
  }
}

/**
 * Error untuk rate limiting
 */
export class BpjsRateLimitError extends BpjsError {
  constructor(
    message: string = "Terlalu banyak request",
    public retryAfter?: number
  ) {
    super(message, "RATE_LIMIT_ERROR", 429);
  }
}

/**
 * Error untuk decryption gagal
 */
export class BpjsDecryptionError extends BpjsError {
  constructor(
    message: string = "Gagal mendekripsi response BPJS",
    originalError?: any
  ) {
    super(message, "DECRYPTION_ERROR", 500, originalError);
  }
}

/**
 * Error untuk response BPJS yang sudah di-handle di interceptor
 */
export class BpjsInterceptorError extends BpjsError {
  constructor(
    message: string,
    statusCode: number,
    public url?: string,
    metadata?: Record<string, any>
  ) {
    super(message, "INTERCEPTOR_ERROR", statusCode, null, metadata);
  }
}

// ============================================
// Error Handler Utility
// ============================================

/**
 * Check apakah response dari interceptor adalah error
 */
export function isInterceptorErrorResponse(data: any): boolean {
  return typeof data === "string" && data.startsWith("[HTTP CLIENT ERROR");
}

/**
 * Parse error message dari interceptor
 */
export function parseInterceptorError(data: string): {
  url: string;
  message: string;
} {
  // Format: [HTTP CLIENT ERROR => URL : baseUrl/endpoint ] => error message
  const urlMatch = data.match(/URL : (.+?) \]/);
  const messageMatch = data.match(/\] => (.+)$/);

  return {
    url: urlMatch?.[1] || "unknown",
    message: messageMatch?.[1] || data,
  };
}

/**
 * Transform Axios error atau interceptor error menjadi BpjsError
 */
export function handleAxiosError(error: any): BpjsError {
  // Handle error yang sudah diproses oleh interceptor
  if (error.response?.data && isInterceptorErrorResponse(error.response.data)) {
    const { url, message } = parseInterceptorError(error.response.data);
    return new BpjsInterceptorError(
      message,
      error.response.status || 500,
      url,
      {
        statusText: error.response.statusText,
        originalMessage: error.message,
      }
    );
  }

  // Handle timeout
  if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
    return new BpjsTimeoutError("Request timeout, silakan coba lagi");
  }

  // Handle network errors
  if (error.code === "ENOTFOUND" || error.code === "ECONNREFUSED") {
    return new BpjsNetworkError(
      "Tidak dapat terhubung ke server BPJS. Periksa koneksi internet Anda.",
      error
    );
  }

  // Handle response dengan status code
  if (error.response) {
    const { status, data } = error.response;

    // Check for metaData in BPJS response format
    const metadata = data?.metaData;
    const message = metadata?.message || data?.message || "Terjadi kesalahan";

    switch (status) {
      case 401:
      case 403:
        return new BpjsAuthError(
          metadata?.message || "Autentikasi gagal atau akses ditolak",
          error.response
        );
      case 404:
        return new BpjsResponseError(
          metadata?.message || "Data tidak ditemukan",
          metadata?.code || "NOT_FOUND",
          404,
          error.response
        );
      case 429:
        return new BpjsRateLimitError(
          metadata?.message || "Terlalu banyak request",
          error.response.headers["retry-after"]
        );
      case 500:
      case 502:
      case 503:
      case 504:
        return new BpjsNetworkError(
          metadata?.message || "Server BPJS bermasalah, silakan coba lagi",
          error.response
        );
      default:
        return new BpjsResponseError(
          message,
          metadata?.code,
          status,
          error.response
        );
    }
  } else if (error.request) {
    // Request dibuat tapi tidak ada response
    return new BpjsNetworkError("Tidak dapat terhubung ke server BPJS", error);
  } else {
    // Error terjadi saat setup request
    return new BpjsError(
      error.message || "Terjadi kesalahan pada request",
      "REQUEST_ERROR",
      500,
      error
    );
  }
}

/**
 * Safe wrapper untuk async function dengan error handling
 */
export async function safeAsync<T>(
  fn: () => Promise<T>,
  errorHandler?: (error: any) => BpjsError
): Promise<[T | null, BpjsError | null]> {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    const handledError = errorHandler
      ? errorHandler(error)
      : error instanceof BpjsError
      ? error
      : handleAxiosError(error);

    return [null, handledError];
  }
}

/**
 * Retry utility untuk request yang gagal
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  options: {
    maxRetries?: number;
    delay?: number;
    shouldRetry?: (error: BpjsError, attempt: number) => boolean;
    onRetry?: (error: BpjsError, attempt: number) => void;
  } = {}
): Promise<T> {
  const {
    maxRetries = 3,
    delay = 1000,
    shouldRetry = (error) =>
      error instanceof BpjsNetworkError ||
      error instanceof BpjsTimeoutError ||
      (error.statusCode && error.statusCode >= 500),
    onRetry,
  } = options;

  let lastError: BpjsError;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof BpjsError ? error : handleAxiosError(error);

      if (!shouldRetry(lastError, attempt) || attempt === maxRetries - 1) {
        throw lastError;
      }

      // Call onRetry callback jika ada
      if (onRetry) {
        onRetry(lastError, attempt + 1);
      }

      // Exponential backoff
      const backoffDelay = delay * Math.pow(2, attempt);
      console.warn(
        `[RETRY ${attempt + 1}/${maxRetries}] Retrying in ${backoffDelay}ms...`,
        lastError.message
      );

      await new Promise((resolve) => setTimeout(resolve, backoffDelay));
    }
  }

  throw lastError!;
}
