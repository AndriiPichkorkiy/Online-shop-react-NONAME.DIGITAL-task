import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { apiShop } from "../../api/apiShop";
import { CharTitle, CharDesc, Description, PriceTitle, PriceDecs } from "../../Components/ProductsComponents/Products/Products.styled"
import { ProductPageContainer, ImageThumb, Title, } from "./ProductsPage.styled"
import { addProductToCart } from "../../redux/cartSlice";
import { getUser } from '../../redux/selectors'
import { useSelector } from "react-redux";

import PopupBuy from "../../Components/Portal/Popup";
import Portal from "../../Components/Portal/Portal";

import { StyledButton, ButtonGoBack } from "../../Components/Button/StyledButton"
import { ContainerCenter } from "../Common.styled";

import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack'

const ProductPage = () => {
  const [product, setProduct] = useState(null)
  const { productId } = useParams();
  const dispatch = useDispatch()
  const location = useLocation();
  const isLogin = useSelector(getUser);
  const [isShowModal, setIsShowModal] = useState(false)
  const hideModal = () => setIsShowModal(false)

  useEffect(() => {
    apiShop.getProductById(productId).then(setProduct)


  }, [productId])


  if (!productId) return <h1>oops somethign wrong -_-</h1>
  if (!product) return <h1>id: {productId}</h1>



  const addToCart = () => {
    dispatch(addProductToCart(id))
    setIsShowModal(true)
  }

  const redirectOnBuy = () => {
    setIsShowModal(true)
  }

  const { id, description, image, price, rating, title, category } = product
  const backLinkHref = location.state?.from ?? "/products/" + category;
  const iconsSize = 24;

  return (
    <ContainerCenter>
      <ProductPageContainer>
        <ButtonGoBack to={backLinkHref}>
          <ArrowBack size={iconsSize} title="Linkedin" />
          Go back
        </ButtonGoBack>
        <Title data-text={title}>{title}</Title>
        <ImageThumb src={image} alt="product ImageThumb" />
        <CharTitle>Category: </CharTitle><CharDesc>{category}</CharDesc>,
        <CharTitle> Product code: </CharTitle><CharDesc>{id}</CharDesc>
        <Description>{description}</Description>
        <PriceTitle>price:</PriceTitle><PriceDecs> {price}</PriceDecs>

        <p>rating: {rating.rate} of {rating.count} votes</p>
        <StyledButton onClick={isLogin ? addToCart : redirectOnBuy} coloredBtn>Add to Cart</StyledButton>
      </ProductPageContainer>
      {
        isShowModal &&
        <Portal toggleModal={hideModal} >
          <PopupBuy isLogin={isLogin} toggleModal={hideModal} />
        </Portal>
      }
    </ContainerCenter>

  )
}

export default ProductPage;