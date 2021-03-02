import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import React from "react";
import { PortalProps } from "../../../interfaces";

const Portal: React.FC<PortalProps> = ({ children, className, el }) => {
  const [container] = useState(document.createElement(el));

  container.classList.add(className);

  useEffect(() => {
    document.body.appendChild(container);
    container.setAttribute(
      "class",
      "w-full top-0 left: 0 fixed flex justify-center items-center h-screen bg-black bg-opacity-50"
    );
    document.body.style.overflow = "hidden";
    return () => {
      document.body.removeChild(container);
      document.body.style.overflow = "auto";
    };
  }, [container]);

  return createPortal(children, container);
};

export default Portal;
