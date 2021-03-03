import React from "react";

const WrapperForModal: React.FC<{}> = ({ children }) => {
  return <div className="h-3/4 w-4/6 bg-white relative">{children}</div>;
};

export default WrapperForModal;
