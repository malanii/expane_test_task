import React from "react";
import { HeaderOfTable } from "../../../constants/ComponentsData";
import { ClientsTableProps } from "../../../interfaces";

const ClientsTable: React.FC<ClientsTableProps> = ({ clients }) => {
  return (
    <table className="table-auto m-auto border border-green-100 w-9/12">
      <thead>
        <tr>
          {HeaderOfTable.map((i) => (
            <th key={i} className="border border-green-100 text-green-900">
              {i}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {clients?.getClients.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.phone}</td>
            <td>icon</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientsTable;
