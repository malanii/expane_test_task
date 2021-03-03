import React from "react";
import { ProcessMessageProps } from "../../../interfaces";

export const ProcessMessage: React.FC<ProcessMessageProps> = ({ message }) => {
  return (
    <div className="w-3/6 flex flex-col justify-center items-center h-full bg-green-500">
      <p className="text-white font-semibold mb-12 text-4xl">{message}</p>
    </div>
  );
};

export default ProcessMessage;
