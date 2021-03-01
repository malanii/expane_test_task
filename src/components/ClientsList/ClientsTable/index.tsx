import React from "react";
import { HeaderOfTable, Images } from "../../../constants/ComponentsData";
import { ClientsTableProps } from "../../../interfaces";

const { editIcon } = Images;

const ClientsTable: React.FC<ClientsTableProps> = ({ clients, handleModal }) => {

  return (
    <table className="table-auto m-auto border border-green-100 w-9/12">
      <thead>
        <tr>
          {HeaderOfTable.map((i) => (
            <th
              key={i}
              className="border border-green-100 text-xl text-green-900"
            >
              {i}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {clients?.getClients.map((item) => (
          <tr key={item.id} className="border border-green-100 text-green-900">
            <td className="border border-green-100 text-base">{item.id}</td>
            <td className="border border-green-100 text-base">
              {item.firstName}
            </td>
            <td className="border border-green-100 text-base">
              {item.lastName}
            </td>
            <td className="border border-green-100 text-base">{item.phone}</td>
            <td onClick={handleModal}>
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
