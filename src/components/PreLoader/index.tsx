import React from "react";
import { ModalProcessingText } from "../../constants/ComponentsData";

export const PreLoader: React.FC = () => {
  return (
    <p className="text-center mt-52 text-green-800 font-semibold text-4xl">
      {ModalProcessingText.loading}
    </p>
  );
};

export default PreLoader;
