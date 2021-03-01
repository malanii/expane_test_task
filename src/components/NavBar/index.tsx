import React from "react";
import Logo from "./Logo";
import AddClientBtn from "./AddClientBtn";

export const NavBar: React.FC = () => {
  return (
    <div>
      <Logo /> <AddClientBtn />
    </div>
  );
};

export default NavBar;
