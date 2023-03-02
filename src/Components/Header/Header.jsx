import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import PrivateNavigation from "../Navigation/PrivateNavigation";
import { HeaderContainer, AuthContainer, TitleHeader } from "./Header.styled";


const Header = () => {
  const navigate = useNavigate();

  function navigateToHome(event) {
    event.preventDefault()
    navigate("/home")
  }
  return (
    <HeaderContainer>
      <a onClick={navigateToHome} href="./" style={{ "textDecoration": "none" }}>
        <TitleHeader>Online Shop</TitleHeader>
      </a>
      <Navigation />
      <AuthContainer>
        <PrivateNavigation />
      </AuthContainer>
    </HeaderContainer>

  );
}

export default Header;