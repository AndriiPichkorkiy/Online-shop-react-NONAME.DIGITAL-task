import { useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";
import { NavContainer, NavLinkStyled } from "./Navigation.styled";

const PrivateNavigation = ({ style }) => {
  const isLogin = useSelector(getUser)
  if (!isLogin) {
    return (
      <NavContainer style={{ ...style }}>
        <NavLinkStyled to="/sign-in">Sign-in</NavLinkStyled>
        <NavLinkStyled to="/sign-up">Sign-up</NavLinkStyled>
      </NavContainer>)
  }

  return (
    <NavContainer style={{ ...style }}>
      <NavLinkStyled to="/cabinet">Cabinet</NavLinkStyled>
      <NavLinkStyled to="/cart">Cart</NavLinkStyled>
    </NavContainer>
  );
}

export default PrivateNavigation;