import { api } from "../constants/api";
import { useQuery } from "react-query";
import { GraphQLClient, request, gql } from "graphql-request";

export const useGetClients = (key: string, query: any) => {
  const graphQLClient = new GraphQLClient(api);
  const fetchData = async () => await graphQLClient.request(query);
  return useQuery(key, fetchData);
};

export const UpdateClient = async (updatedCl: any) => {
  const { id, firstName, lastName, phone } = updatedCl;
  const { data } = await request(
    api,
    gql`
        mutation GetClients {
          updateClient(id: ${id} firstName: "${firstName}" lastName: "${lastName}" phone: "${phone}") {
            firstName
            lastName
            phone
          }
        }
      `
  );
  return data;
};
