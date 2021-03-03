import { ListOfImages, Text } from "../interfaces";

export const Images: ListOfImages = {
  logo: {
    src: "/img/logo.png",
    alt: "logo",
  },
  editIcon: {
    src: "/img/edit.png",
    alt: "editIcon",
  },
  modal: {
    src: "/img/modal.png",
    alt: "modal",
  },
};
export const ComponentsText: Text = {
  addBtn: "Add Client",
  title: "Our Clients",
  modal: "Do you really want to change some information about clients?",
};
export const HeaderOfTable: Array<string> = [
  "N",
  "Avatar",
  "First Name",
  "Last Name",
  "Phone",
  "Id",
  "Edit",
];
export const FormLabels: Text = {
  id: "Identification number",
  name: "First Name",
  lastName: "Last Name",
  phone: "Phone",
  errorMessage: "This field is required",
  btn: "Change"
};
