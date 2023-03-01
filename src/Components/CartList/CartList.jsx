import CartListItem from "./CartListItem";

const CartList = ({ products }) => {
  return (
    <ul>
      {products.map(product => <CartListItem product={product} key={product.id} />)}
    </ul>
  );
}

export default CartList;