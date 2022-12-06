import { GraphQLClient } from 'graphql-request';

import { getSdk } from './sdk';

const client = new GraphQLClient(process.env.HYGRAPH_API_ENDPOINT as string);

const hygraph = getSdk(client);

export default hygraph;
