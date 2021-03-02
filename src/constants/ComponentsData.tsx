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
  }
};
export const ComponentsText: Text = {
  addBtn: "Add Client",
  title: "Our Clients",
  modal: "Do you really want to change some information about clients?"
};
export const HeaderOfTable: Array<string> = [
  "Id",
  "First Name",
  "Last Name",
  "Phone",
  "Edit",
];
