const CarouselItem = ({ src, title }) => {
  return (
    <>
      <img src={src} alt="" />
      <p className="legend">{title}</p>
    </>
  );
}

export default CarouselItem;