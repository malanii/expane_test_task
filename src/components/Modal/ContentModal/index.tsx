import React from "react";
import { Images } from "../../../constants/ComponentsData";

const { logo, modal } = Images;

const ContentModal: React.FC = () => {
  return (
    <div className="w-3/6 flex flex-col justify-between h-full pt-2 overflow-hidden">
      <img className="h-11 w-2/6 m-auto" alt={logo.alt} src={logo.src} />
      <img alt={modal.alt} src={modal.src} />
    </div>
  );
};

export default ContentModal;
