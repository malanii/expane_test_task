import React from "react";
import Logo from "../Logo";
import AddClientBtn from "./NavAddBtn";

export const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between bg-green-50 p-4 items-center">
      <Logo /> <AddClientBtn />
    </div>
  );
};

export default NavBar;
