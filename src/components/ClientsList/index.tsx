import React, { useState } from "react";
import Title from "../Title";
import { useGetClients } from "../../hooks/useGetClients";
import { GET_CLIENTS } from "../../constants/qraphql";
import { Client } from "../../interfaces";
import ClientsTable from "./ClientsTable";
import EditClientModal from "../Modal/EditClientModal";

const ClientsList: React.FC = () => {
  const { data } = useGetClients("clients", GET_CLIENTS);

  const [modalVisibility, setModal] = useState<boolean>(false);
  const [client, setClient] = useState<{}>({});

  const handleModal = () => {
    setModal((prevState) => !prevState);
  };
  const editClient = (event: React.MouseEvent, item: Client) => {
    handleModal();
    setClient(item);
  };
  return (
    <div className="text-center	text-3xl">
      <Title />
      <ClientsTable clients={data} editClient={editClient} />
      {modalVisibility && (
        <EditClientModal handleModal={handleModal} client={client} />
      )}
    </div>
  );
};

export default ClientsList;
