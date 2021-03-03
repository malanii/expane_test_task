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
  addModal: "Please, add information about client",
  nav: "Tools to automate and grow your business",
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
  avatarUrl: "Avatar url",
  errorMessage: "This field is required",
  btnChange: "Change",
  btnAdd: "Add",
};
export const ModalProcessingText = {
  loading: "Please, wait, loading",
  success: "Successfully updated",
  error: "Oopps, something went wrong",
};
