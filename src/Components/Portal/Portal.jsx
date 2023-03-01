
import { PortalContainer } from "./Portal.styled";

import { createPortal } from "react-dom";

const Portal = ({ children, toggleModal }) => {
  const closeModal = () => {
    toggleModal();
  };


  return createPortal(
    <PortalContainer>
      <button onClick={closeModal}>X</button>
      {children}
    </PortalContainer>,

    document.getElementById("portal-root")
  );
};
export default Portal;