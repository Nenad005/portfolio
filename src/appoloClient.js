import { ApolloClient, InMemoryCache } from '@apollo/client';
import {backendUri} from './backendUri.js'

const client = new ApolloClient({
  uri: `${backendUri}/graphql`, // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;