import { api } from "../constants/api";
import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";

export const useGetClients = (key: string, query: any) => {
  const graphQLClient = new GraphQLClient(api);
  const fetchData = async () => await graphQLClient.request(query);
  return useQuery(key, fetchData);
};
