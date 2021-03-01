import React from "react";
import { Images } from "../../../constants/ComponentsData";

const { logo } = Images;

export const Logo: React.FC = () => {
  return <img className="w-1/6 h-1/6" alt={logo.alt} src={logo.src} />;
};

export default Logo;
