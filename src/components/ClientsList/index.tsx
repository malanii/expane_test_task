import React, { useState } from "react";
import Title from "../Title";
import { useGetClients } from "../../hooks/useGetClients";
import { GET_CLIENTS } from "../../constants/qraphql";
import ClientsTable from "./ClientsTable";
import EditClientModal from "../Modal/EditClientModal";

const ClientsList: React.FC = () => {
  const { data } = useGetClients("clients", GET_CLIENTS);
  const [state, setModal] = useState<boolean>(false);
  const handleModal = () => {
    setModal((prevState) => !prevState);
  };
  return (
    <div className="text-center	text-3xl">
      <Title />
      <ClientsTable clients={data} handleModal={handleModal} />
      {state && <EditClientModal handleModal={handleModal} />}
    </div>
  );
};

export default ClientsList;
