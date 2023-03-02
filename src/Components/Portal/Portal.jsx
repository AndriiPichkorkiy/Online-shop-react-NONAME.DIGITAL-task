
import { PortalContainer } from "./Portal.styled";

import { createPortal } from "react-dom";
import { ButtonClose } from '../Button/StyledButton'

const Portal = ({ children, toggleModal }) => {
  const closeModal = () => {
    toggleModal();
  };


  return createPortal(
    <PortalContainer>
      <ButtonClose onClick={closeModal}>X</ButtonClose>
      {children}
    </PortalContainer>,

    document.getElementById("portal-root")
  );
};
export default Portal;