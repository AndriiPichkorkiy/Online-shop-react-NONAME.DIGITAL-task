import { useNavigate } from "react-router-dom";
import { StyledButton } from "../Button/StyledButton";

const PopupBuy = ({ isLogin, toggleModal }) => {
  const navigate = useNavigate()
  const redirectToSignIn = () => navigate('/sign-in')
  const redirectToSignUp = () => navigate('/sign-up')

  const title = isLogin ? "Product was added to cart" : "To add a product to the cart, you need to sign in"
  const buttons = isLogin
    ? <StyledButton onClick={toggleModal}>Continue</StyledButton>
    : <>
      <StyledButton onClick={redirectToSignIn}>Sign-in</StyledButton>
      <StyledButton onClick={redirectToSignUp}>Sign-up</StyledButton>
    </>

  return (
    <div>
      <h3>{title}</h3>
      <div>{buttons}</div>
    </div>
  );
}

export default PopupBuy;