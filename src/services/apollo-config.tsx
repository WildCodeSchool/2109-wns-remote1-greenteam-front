import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import jwt from 'jsonwebtoken';

const link = createHttpLink({
  uri: process.env.REACT_APP_BACKEND_URL,
  credentials: 'include',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
