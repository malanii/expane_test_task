import React from "react";
import { BtnsText } from "../../../constants/ComponentsData";

export const AddClientBtn: React.FC = () => {
  return (
    <button className="bg-white px-3 rounded-full py-3 px-6 text-green-500 focus:outline-none font-semibold">
      {BtnsText.addBtn}
    </button>
  );
};

export default AddClientBtn;
