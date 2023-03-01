import { StyledButton } from '../../Button/StyledButton'

const CategoriesList = ({ categories, onClick }) => {
  return (
    <ul>
      {categories.map((item, i) => <CategoriesItem item={item} onClick={onClick} key={i} />)}
    </ul>
  );
}

export default CategoriesList;

const CategoriesItem = ({ item, onClick }) => {
  return (
    <li>
      <StyledButton onClick={() => onClick(item)}>{item}</StyledButton>
    </li>
  );
}