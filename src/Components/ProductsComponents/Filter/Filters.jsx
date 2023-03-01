import sortArrayBy from "../../../helpers/sortArrayBy";
import { StyledButton } from "../../Button/StyledButton"

const Filters = ({ products, setProduct }) => {
  const { hightPrice, lowPrice, hightRating, lowRating } = sortArrayBy

  const sortByHightPrice = () => setProduct(hightPrice(products))
  const sortByLowPrice = () => setProduct(lowPrice(products))
  const sortByHightRating = () => setProduct(hightRating(products))
  const sortByLowRating = () => setProduct(lowRating(products))

  return (
    <ul>
      <li><StyledButton onClick={sortByHightPrice}>hight price</StyledButton></li>
      <li><StyledButton onClick={sortByLowPrice}>low price</StyledButton></li>
      <li><StyledButton onClick={sortByHightRating}>hight rating</StyledButton></li>
      <li><StyledButton onClick={sortByLowRating}>low rating</StyledButton></li>
    </ul>
  );
}

export default Filters;