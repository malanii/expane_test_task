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
  handleModal: React.MouseEventHandler<HTMLButtonElement>;
  client: Client;
  refetch: () => void;
}
export interface AddModalProps {
  handleModal: React.MouseEventHandler<HTMLButtonElement>;
  refetch: () => void;
}
export interface FormProps {
  client: Client;
  refetch: () => void;
}
export interface Refetch {
  refetch: () => void;
}
export interface InputProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  name: string;
  error: any;
  register: any;
  labelText: string;
  defaultValue: string;
}
export interface ProcessMessageProps {
  message: string;
}
