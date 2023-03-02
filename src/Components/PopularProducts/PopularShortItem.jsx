import { useNavigate } from "react-router-dom"
import { Card, ImageThumb, Title, PriceTitle, PriceDecs, Rating } from "../ProductsComponents/Products/Products.styled"

const PopularShortItem = ({ product: { id, image, price, rating, title, category } }) => {
  const navigate = useNavigate()
  const openCard = () => {
    navigate(`/products/${category}/${id}`)
  }
  return (
    <Card onClick={openCard} short>
      <Title data-text={title}>{title}</Title>
      <ImageThumb src={image} alt="product ImageThumb" />
      <PriceTitle>price:</PriceTitle><PriceDecs> {price}</PriceDecs>

      <Rating>rating: {rating.rate} of {rating.count} votes</Rating>
    </Card>
  )
}

export default PopularShortItem