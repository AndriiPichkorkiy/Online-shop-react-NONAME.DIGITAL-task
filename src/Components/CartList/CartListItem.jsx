import { useDispatch } from "react-redux";
import { addProductToCart, deleteProductFromCart, removeProductFromCart } from "../../redux/cartSlice";
import { ButtonClose } from "../Button/StyledButton";
import { CartItemContainer, ImgContainer, DescriptionContainer, PriceContainer, CartTitle, ButtonsCalculate, PriceTitle } from './Cart.styled'

const CartListItem = ({ product: { id }, product }) => {
  const dispatch = useDispatch()

  const addToCart = () => dispatch(addProductToCart(id))
  const removeFromCart = () => dispatch(removeProductFromCart(id))
  const deleteFromCart = () => dispatch(deleteProductFromCart(id))

  return (
    <CartItemContainer>
      <ImgContainer>
        <img src={product.image} alt="" />
      </ImgContainer>
      <DescriptionContainer>
        <CartTitle>{product.title}</CartTitle>
        <PriceContainer>


          <ButtonsCalculate onClick={addToCart}>+</ButtonsCalculate>
          <p>Count: {product.count}</p>
          <ButtonsCalculate onClick={removeFromCart}>-</ButtonsCalculate>
          <ButtonClose onClick={deleteFromCart}>X</ButtonClose>


        </PriceContainer>
        <PriceTitle>Total Price: {product.count * product.price}</PriceTitle>
      </DescriptionContainer>



    </CartItemContainer>
  );
}

export default CartListItem;