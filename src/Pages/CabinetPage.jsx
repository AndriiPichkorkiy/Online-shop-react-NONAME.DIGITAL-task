import { getUser } from '../redux/selectors'
import { useSelector } from "react-redux";

const CabinetPage = () => {
  const user = useSelector(getUser);
  return (
    <>
      <h1>Cabinet</h1>
      <p> Name: {user.displayName}</p>
      <p> email: {user.email}</p>
    </>
  );
}

export default CabinetPage;