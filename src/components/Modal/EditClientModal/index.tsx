import React from "react";
import Portal from "../Portal";
import WrapperForModal from "../WrapperForModal";
import ContentModal from "../ContentModal";
import FormModal from "../FormModal";
import { EditClientProps } from "../../../interfaces";

const EditClientModal: React.FC<any> = ({ handleModal, client, refetch }) => {
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
          <FormModal client={client} refetch={refetch}/>
        </div>
      </WrapperForModal>
    </Portal>
  );
};

export default EditClientModal;
