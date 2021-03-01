import React from "react";
import Title from "../Title";
import { useGetClients } from "../../hooks/useGetClients";
import { GET_CLIENTS } from "../../constants/qraphql";
import ClientsTable from "./ClientsTable";

const ClientsList: React.FC = () => {
  const { data } = useGetClients("clients", GET_CLIENTS);

  return (
    <div className="text-center	text-3xl">
      <Title />
      <ClientsTable clients={data} />
    </div>
  );
};

export default ClientsList;
