import React from "react";
import Portal from "../Portal";
import WrapperForModal from "../WrapperForModal";

const EditClientModal: React.FC<any> = ({ handleModal, client }) => {
  console.log("client modal", client);
  return (
    <Portal className="root-portal" el="div">
      <WrapperForModal>
        <button
          className="absolute right-1 focus:outline-none"
          onClick={handleModal}
        >
          x
        </button>
        <div className="">Modal</div>
      </WrapperForModal>
    </Portal>
  );
};

export default EditClientModal;
