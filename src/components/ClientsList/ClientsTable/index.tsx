import React from "react";
import { HeaderOfTable, Images } from "../../../constants/ComponentsData";
import { ClientsTableProps } from "../../../interfaces";

const { editIcon } = Images;

const ClientsTable: React.FC<ClientsTableProps> = ({ clients, editClient }) => {
  return (
    <table className="table-auto m-auto border border-green-100 w-9/12">
      <thead>
        <tr>
          {HeaderOfTable.map((i) => (
            <th
              key={i}
              className="border border-green-400 text-xl text-green-900"
            >
              {i}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {clients?.getClients.map((item, index) => (
          <tr key={item.id} className="border border-green-400 text-green-900">
            <td className="border border-green-400 text-base w-14">
              {index + 1}
            </td>
            <td className="w-10 h-10">
              <img
                className="w-10 h-10 m-auto overflow-hidden w-14"
                alt="avatar"
                src={item.avatarUrl}
              />
            </td>
            <td className="border border-green-400 text-base w-1/4">
              {item.firstName}
            </td>
            <td className="border border-green-400 text-base w-1/4">
              {item.lastName}
            </td>
            <td className="border border-green-400 text-base w-1/4">
              {item.phone}
            </td>
            <td className="border border-green-400 text-base w-14">{item.id}</td>
            <td className="w-14" onClick={(event) => editClient(event, item)}>
              <img
                className="w-8 h-8 m-auto"
                alt={editIcon.alt}
                src={editIcon.src}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientsTable;
