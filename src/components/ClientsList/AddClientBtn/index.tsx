import React, { useState } from "react";
import { ComponentsText } from "../../../constants/ComponentsData";
import AddClientModal from "../../Modal/AddClientModal";

export const AddClientBtn: React.FC<any> = ({refetch}) => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const handleModal = () => {
    setModalVisibility((prevState) => !prevState);
  };
  return (
    <>
      <button
        className="border border-green-800 rounded-full px-6 py-3 text-sm text-green-800 focus:outline-none font-semibold shadow-xl"
        onClick={handleModal}
      >
        {ComponentsText.addBtn}
      </button>
      {modalVisibility && <AddClientModal handleModal={handleModal} refetch={refetch}/>}
    </>
  );
};

export default AddClientBtn;
