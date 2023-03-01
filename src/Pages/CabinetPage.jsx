import { getUser } from '../redux/selectors'
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';
import { StyledButton } from '../Components/Button/StyledButton';
import { getAuth, signOut } from "firebase/auth";

import { signOut as signOutAction } from '../redux/authSlice'

const CabinetPage = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const { isAuthenticated, logout } = useAuth0();

  const logOutFunction = isAuthenticated
    ? () => logout({ logoutParams: { returnTo: window.location.origin } })
    : () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        dispatch(signOutAction())
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }

  return (
    <>
      <h1>Cabinet</h1>
      <p> Name: {user.displayName}</p>
      <p> email: {user.email}</p>
      <StyledButton onClick={logOutFunction}>LogOut</StyledButton>
    </>
  );
}

export default CabinetPage;