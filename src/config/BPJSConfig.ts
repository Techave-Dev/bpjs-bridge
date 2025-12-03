// src/config/BPJSConfig.ts
export type BPJSBridgeConfig = {
  mode: "dev" | "prod"; // mode
  global?: {
    username: string;
    password: string;
    consId: string;
    secretKey: string;
    baseUrl: string;
  };
  pcare?: {
    consId?: string;
    secretKey?: string;
    userKey?: string;
    baseUrl?: string;
  };
  vclaim?: {
    consId?: string;
    secretKey?: string;
    userKey?: string;
    baseUrl?: string;
  };
  antrol?: {
    consId?: string;
    secretKey?: string;
    userKey?: string;
    baseUrl?: string;
  };
  icare?: {
    consId?: string;
    secretKey?: string;
    username?: string;
    password?: string;
    baseUrl?: string;
  };
};
