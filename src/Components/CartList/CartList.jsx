import { CartListTitle } from "./Cart.styled";
import CartListItem from "./CartListItem";

const CartList = ({ products }) => {
  return (
    <>
      <CartListTitle>Shopping Cart</CartListTitle>
      <ul>
        {products.map(product => <CartListItem product={product} key={product.id} />)}
      </ul>
    </>

  );
}

export default CartList;