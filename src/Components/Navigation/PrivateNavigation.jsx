import { useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";
import { NavContainer, NavLinkStyled } from "./Navigation.styled";
import { Cart4 } from "@styled-icons/bootstrap/Cart4"
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle"

const PrivateNavigation = ({ style }) => {
  const user = useSelector(getUser)
  const iconSize = 24;
  if (!user) {
    return (
      <NavContainer style={{ ...style }}>
        <NavLinkStyled to="/sign-in">Sign-in</NavLinkStyled>
        <NavLinkStyled to="/sign-up">Sign-up</NavLinkStyled>
      </NavContainer>)
  }

  return (
    <NavContainer style={{ ...style }}>
      <NavLinkStyled to="/cabinet">
        <UserCircle size={iconSize} />
        <br />{user.displayName}
      </NavLinkStyled>
      <NavLinkStyled to="/cart">
        <Cart4 size={iconSize} />
      </NavLinkStyled>
    </NavContainer>
  );
}

export default PrivateNavigation;