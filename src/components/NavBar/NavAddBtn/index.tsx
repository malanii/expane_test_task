import React from "react";
import { ComponentsText } from "../../../constants/ComponentsData";

export const AddClientBtn: React.FC = () => {
  return (
    <button className="border border-green-500 rounded-full py-3 px-6 text-green-500 focus:outline-none font-semibold shadow-xl">
      {ComponentsText.addBtn}
    </button>
  );
};

export default AddClientBtn;
