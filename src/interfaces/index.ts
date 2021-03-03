import React, { ReactNode } from "react";

interface Image {
  alt: string;
  src: string;
}

export interface ListOfImages {
  [key: string]: Image;
}
export interface Text {
  [key: string]: string;
}
export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatarUrl: string;
}
export interface ClientsTableProps {
  clients: {
    getClients: Array<Client>;
  };
  editClient: (event: React.MouseEvent, item: Client) => void;
}
export interface PortalProps {
  children: ReactNode;
  className: string;
  el: string;
}

export interface EditClientProps {
  handleModal: any;
  client: Client;
}

export interface FormProps {
  client: Client;
  refetch: () => void;
}
export interface ShortenedClient {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
}
export interface InputProps {
  handleChange: (event:any) => void;
  name: string;
  error:any;
  register: any;
  labelText: string;
  defaultValue: string;
}
