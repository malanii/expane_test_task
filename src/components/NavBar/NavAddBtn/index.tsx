import React from "react";
import { ComponentsText } from "../../../constants/ComponentsData";

export const AddClientBtn: React.FC = () => {
  return (
    <button className="bg-white rounded-full py-3 px-6 text-green-500 focus:outline-none font-semibold">
      {ComponentsText.addBtn}
    </button>
  );
};

export default AddClientBtn;
