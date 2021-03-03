import React from "react";
import { ComponentsText } from "../../constants/ComponentsData";

export const Title: React.FC = () => {
  return (
    <p className="text-green-800 font-semibold text-4xl">
      {ComponentsText.title}
    </p>
  );
};

export default Title;
