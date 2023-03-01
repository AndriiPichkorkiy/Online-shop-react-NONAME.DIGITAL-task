import { CardList } from "./Products.styled";
import ProductsItem from "./ProductsItem";

const ProductsList = ({ products }) => {
  return (
    <CardList>
      {products.map((item) => <ProductsItem key={item.id} product={item} />)}
    </CardList>
  );
}

export default ProductsList;