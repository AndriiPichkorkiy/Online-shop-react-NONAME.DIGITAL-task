const sortArrayBy = {
  hightPrice: (products) => [...products].sort((a, b) => -a.price + b.price),
  lowPrice: (products) => [...products].sort((a, b) => a.price - b.price),
  hightRating: (products) =>
    [...products].sort((a, b) => -a.rating.rate + b.rating.rate),
  lowRating: (products) =>
    [...products].sort((a, b) => a.rating.rate - b.rating.rate),
};

export default sortArrayBy;
