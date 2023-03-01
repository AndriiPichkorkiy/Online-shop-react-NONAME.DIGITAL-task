
import PopularProducts from "../Components/PopularProducts/PopularProducts";
import DefSlider from "../Components/Slider/DefCarousel";
import { SliderWrapper } from './Common.styled'

const HomePage = () => {
  return (
    <>
      <SliderWrapper>
        <DefSlider />
      </SliderWrapper>
      <PopularProducts />
    </>

  );
}

export default HomePage;