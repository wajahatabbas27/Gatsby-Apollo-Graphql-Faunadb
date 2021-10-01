import fetch from "cross-fetch";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8888/.netlify/functions/apollo_fauna_graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
