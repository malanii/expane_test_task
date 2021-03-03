import React, { useState } from "react";
import { GetClients } from "../../helpers/requests";
import { Client } from "../../interfaces";
import { useQuery } from "react-query";
import Title from "../Title";
import ClientsTable from "./ClientsTable";
import EditClientModal from "../Modal/EditClientModal";
import PreLoader from "../PreLoader";
import ErrorPage from "../ErrorPage";
import AddClientBtn from "./AddClientBtn";

const ClientsList: React.FC = () => {
  const { isLoading, error, data, refetch } = useQuery("clients", GetClients);

  const [modalVisibility, setModal] = useState<boolean>(false);
  const [client, setClient] = useState<Client>({
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    avatarUrl: "",
  });

  const handleModal = () => {
    setModal((prevState) => !prevState);
  };
  const editClient = (event: React.MouseEvent, item: Client) => {
    handleModal();
    setClient(item);
  };
  if (isLoading) {
    return <PreLoader />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <div className="text-center	text-3xl pb-5">
      <div className=" flex items-center mb-12 w-9/12 m-auto justify-between">
        <Title />
        <AddClientBtn refetch={refetch} />
      </div>
      <ClientsTable clients={data} editClient={editClient} />
      {modalVisibility && (
        <EditClientModal
          handleModal={handleModal}
          client={client}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ClientsList;
