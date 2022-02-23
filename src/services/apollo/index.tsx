import {
    ApolloClient,

    InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:5000',
    cache: new InMemoryCache()
});

/*
const roundTripLink = new ApolloLink((operation, forward) => {
    
    return forward(operation).map((data) => data);
});

 */

export default client