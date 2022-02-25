import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: process.env.REACT_APP_BACKEND_URL,
  credentials: 'same-origin',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
