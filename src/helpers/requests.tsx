import { api } from "../constants/api";
import { request, gql } from "graphql-request";

export const GetClients = async () =>
  await request(
    api,
    gql`
      query GetClients{
        getClients {
          id
          firstName
          lastName
          phone
          avatarUrl
        }
      }
    `
  );
export const UpdateClient = async (updatedCl: any) => {
  const { id, firstName, lastName, phone } = updatedCl;
  const { data } = await request(
    api,
    gql`
        mutation UpdateClient {
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
