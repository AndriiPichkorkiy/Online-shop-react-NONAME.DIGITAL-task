import { useDispatch } from "react-redux";
import { addProductToCart, deleteProductFromCart, removeProductFromCart } from "../../redux/cartSlice";

const CartListItem = ({ product: { id }, product }) => {
  const dispatch = useDispatch()

  const addToCart = () => dispatch(addProductToCart(id))
  const removeFromCart = () => dispatch(removeProductFromCart(id))
  const deleteFromCart = () => dispatch(deleteProductFromCart(id))

  return (
    <div>
      <p>Title: {product.title}</p>
      <p>Count: {product.count}</p>
      <p>Total Price: {product.count * product.price}</p>
      <button onClick={addToCart}>+</button>
      <button onClick={removeFromCart}>-</button>
      <button onClick={deleteFromCart}>delete</button>
      <img src={product.image} alt="" />
    </div>
  );
}

export default CartListItem;