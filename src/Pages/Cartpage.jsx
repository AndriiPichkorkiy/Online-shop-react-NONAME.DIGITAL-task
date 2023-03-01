import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiShop } from "../api/apiShop";
import { StyledButton } from "../Components/Button/StyledButton";
import CartList from "../Components/CartList/CartList";
import { getCart } from "../redux/selectors";

import { NotificationManager } from 'react-notifications';
import Loader from "../Components/Loader/Loader";

const Cartpage = () => {
  const cart = useSelector(getCart)
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([])

  useEffect(() => {
    const promises = []
    cart.forEach((item) => {
      promises.push(apiShop.getProductById(item.id))
    })
    Promise.all(promises).then(promiseHandler).finally(() => setIsLoading(false))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //every time when user add more products to Cart, re-calculate count of products:
  useEffect(() => {
    products.forEach(itemProduct => {
      const index = cart.findIndex(cartItem => cartItem.id === itemProduct.id)
      itemProduct.count = cart[index].count
    })
    setProducts([...products])

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])


  function promiseHandler(response) {
    const products = []
    response.forEach(responseItem => {
      const count = cart.find(cartItem => cartItem.id === responseItem.id).count
      const ComplexProduct = {
        ...responseItem,
        count
      }
      products.push(ComplexProduct)
      setProducts(products)
    })
  }


  const buyProducts = () => {
    const total = products.reduce((reducer, product) => reducer + product.count * product.price, 0)
    NotificationManager.info(`${total}`, "total:", 2000);
  }

  if (isLoading) return <Loader />
  if (!products.length) return <h1>Cart is empty</h1>

  return (
    <>
      <CartList products={products} />
      <StyledButton onClick={buyProducts}>Buy</StyledButton>
    </>

  );
}

export default Cartpage;