import { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: process.env.HYGRAPH_API_ENDPOINT,
  documents: 'hygraph/queries/*.graphql',
  generates: {
    './hygraph/sdk.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ]
    }
  }
};

export default config;
