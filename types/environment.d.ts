export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHCMS_ENDPOINT: string;
      GRAPHCMS_KEY: string;
    }
  }
}