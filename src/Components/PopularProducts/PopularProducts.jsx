import { useEffect, useState } from "react";
import { apiShop } from "../../api/apiShop";
import Loader from "../Loader/Loader";
import { CardList } from "../ProductsComponents/Products/Products.styled";
import PopularShortItem from "./PopularShortItem";

const PopularProducts = () => {
  const [products, setProduct] = useState([])

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const limit = 5
    apiShop.getProducts(limit).then(setProduct).finally(() => setIsLoading(false))

  }, [])

  return (
    <>
      <h1>Popular products:</h1>
      {isLoading ? <Loader /> :
        <CardList>
          {products.map((item) => <PopularShortItem key={item.id} product={item} />)}
        </CardList>}
    </>
  );
}

export default PopularProducts;