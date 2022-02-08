declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    GRAPHQL_ENDPOINT: string;
    NEXT_PUBLIC_IMAGE_HOST: string;
  }
}
