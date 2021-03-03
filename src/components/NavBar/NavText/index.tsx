import React from "react";
import { ComponentsText } from "../../../constants/ComponentsData";

export const NavText: React.FC = () => {
  return (
    <p className="text-green-500 font-semibold text-xl">{ComponentsText.nav}</p>
  );
};

export default NavText;
