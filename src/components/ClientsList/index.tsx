import React, { useState } from "react";
import Title from "../Title";
import { GetClients } from "../../helpers/requests";
import { Client } from "../../interfaces";
import ClientsTable from "./ClientsTable";
import EditClientModal from "../Modal/EditClientModal";
import { useQuery } from "react-query";

const ClientsList: React.FC = () => {
  const { isLoading, error, data, refetch } = useQuery("clients", GetClients);

  const [modalVisibility, setModal] = useState<boolean>(false);
  const [client, setClient] = useState<{}>({});

  const handleModal = () => {
    setModal((prevState) => !prevState);
  };
  const editClient = (event: React.MouseEvent, item: Client) => {
    handleModal();
    setClient(item);
  };
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Oooops something went wrong....</p>;
  }
  return (
    <div className="text-center	text-3xl">
      <Title />
      <ClientsTable clients={data} editClient={editClient} />
      {modalVisibility && (
        <EditClientModal handleModal={handleModal} client={client} refetch={refetch}/>
      )}
    </div>
  );
};

export default ClientsList;
