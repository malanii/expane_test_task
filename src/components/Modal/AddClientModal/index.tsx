import React from "react";
import Portal from "../Portal";
import WrapperForModal from "../WrapperForModal";
import ContentModal from "../ContentModal";
import AddFormModal from "./AddFormModal";
import { AddModalProps } from "../../../interfaces";

const AddClientModal: React.FC<AddModalProps> = ({ handleModal, refetch }) => {
  return (
    <Portal className="root-portal" el="div">
      <WrapperForModal>
        <button
          className="absolute right-1 focus:outline-none text-white"
          onClick={handleModal}
        >
          x
        </button>
        <div className="flex justify-between h-full">
          <ContentModal />
          <AddFormModal refetch={refetch} />
        </div>
      </WrapperForModal>
    </Portal>
  );
};

export default AddClientModal;
