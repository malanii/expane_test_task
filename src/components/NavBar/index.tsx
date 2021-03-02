import React from "react";
import Logo from "./NavLogo";
import AddClientBtn from "./NavAddBtn";

export const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between px-10 py-4 items-center">
      <Logo /> <AddClientBtn />
    </div>
  );
};

export default NavBar;
