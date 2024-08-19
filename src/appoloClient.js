import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.0.28:1337/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;