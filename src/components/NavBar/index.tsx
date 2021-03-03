import React from "react";
import Logo from "./NavLogo";

export const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between px-10 py-4 items-center">
        <Logo /> <p>created by Yana Ignatova</p>
    </div>
  );
};

export default NavBar;
