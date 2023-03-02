import { NotificationContainer } from "react-notifications";
import "./App.css";
import "./reset.css";
import "react-notifications/lib/notifications.css";
import MainRoutes from "./Routes/MainRoutes";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { signIn } from "./redux/authSlice";
import { useEffect } from "react";

function App() {
  // auch0
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      const userObj = {
        displayName: user.name,
        email: user.email,
      };
      dispatch(signIn(userObj));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <>
      <MainRoutes />
      <NotificationContainer />
    </>
  );
}

export default App;
