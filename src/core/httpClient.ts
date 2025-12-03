// src/core/httpClient.ts
import axios from "axios";
import { generateHeader } from "./security";
import { configType } from "./configHelper";

export const createBpjsClient = (config: configType) => {
  const client = axios.create({
    baseURL: config.baseUrl,
    timeout: 20000,
  });

  client.interceptors.request.use((req) => {
    const headers = generateHeader(config);

    req.headers["X-cons-id"] = headers["X-cons-id"];
    req.headers["X-timestamp"] = headers["X-timestamp"];
    req.headers["X-signature"] = headers["X-signature"];
    req.headers["X-Authorization"] = headers["X-Authorization"];
    req.headers.user_key = headers["userKey"];
    req.headers.Accept = headers["Accept"];

    return req;
  });

  client.interceptors.response.use(
    (res) => res.data,
    (err) => {
      const message = err.response?.data?.metaData?.message || err.message;
      throw new Error(message);
    }
  );

  return client;
};
