import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img0 from '../../assests/sliderImgs/11.jpg'
import img1 from '../../assests/sliderImgs/6.jpg'
import img2 from '../../assests/sliderImgs/7.jpg'
import img3 from '../../assests/sliderImgs/8.jpg'
import img4 from '../../assests/sliderImgs/9.jpg'
import img5 from '../../assests/sliderImgs/10.jpg'
import CarouselItem from "./CarouselItem";

const defaultSlides = [
  { src: img0, title: "title 10" },
  { src: img1, title: "title 11" },
  { src: img2, title: "title 21" },
  { src: img3, title: "title 31" },
  { src: img4, title: "title 41" },
  { src: img5, title: "title 51" }]

const DefCarousel = ({ slides = defaultSlides }) => {

  return (
    <Carousel autoPlay emulateTouch={true} showThumbs={false}>
      {slides.map((item, i) => <CarouselItem {...item} key={i} />)}
    </Carousel>

  );
}

export default DefCarousel;