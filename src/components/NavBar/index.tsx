import React from "react";
import Logo from "./NavLogo";
import NavText from "./NavText";

export const NavBar: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-10 py-4 items-center">
      <Logo /> <NavText />
    </div>
  );
};

export default NavBar;
