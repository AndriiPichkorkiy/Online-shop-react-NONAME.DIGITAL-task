import { useNavigate } from "react-router-dom"
import { Card, CharTitle, CharDesc, ImageThumb, Title, Description, PriceTitle, PriceDecs, Rating } from "./Products.styled"

const ProductsItem = ({ product: { id, description, image, price, rating, title, category } }) => {
  const navigate = useNavigate()
  const openCard = () => {
    navigate(`/products/${category}/${id}`)
  }
  return (
    <Card onClick={openCard}>
      <Title data-text={title}>{title}</Title>
      <ImageThumb src={image} alt="product ImageThumb" />
      <CharTitle>Category: </CharTitle><CharDesc>{category}</CharDesc>,
      <CharTitle> Product code: </CharTitle><CharDesc>{id}</CharDesc>
      <Description>{description}</Description>
      <PriceTitle>price:</PriceTitle><PriceDecs> {price}</PriceDecs>

      <Rating>rating: {rating.rate} of {rating.count} votes</Rating>
    </Card>
  )
}

export default ProductsItem