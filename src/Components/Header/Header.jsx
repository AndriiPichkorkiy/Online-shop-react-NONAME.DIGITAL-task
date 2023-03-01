import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import PrivateNavigation from "../Navigation/PrivateNavigation";
import { HeaderContainer, AuthContainer } from "./Header.styled";


const Header = () => {
  const navigate = useNavigate();

  function navigateToHome(event) {
    event.preventDefault()
    navigate("/home")
  }
  return (
    <HeaderContainer>
      <a onClick={navigateToHome} href="./">
        <h1>Online Shop</h1>
      </a>
      <Navigation />
      <AuthContainer>
        <PrivateNavigation />
      </AuthContainer>
    </HeaderContainer>

  );
}

export default Header;