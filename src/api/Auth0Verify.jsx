import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { signIn } from '../redux/authSlice'

const Auth0Verify = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch()

  if (isAuthenticated) {
    const userObj = {
      displayName: user.name,
      email: user.email
    }
    dispatch(signIn(userObj));
  }
  return (
    <Navigate to='/' />
  );
}

export default Auth0Verify;