import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiAuth, { signInWithGoogle } from "../api/apiAuth";
import { signIn } from "../redux/authSlice";
import { NotificationManager } from 'react-notifications';
import { ContainerCenter, Form } from "./Common.styled";
import { StyledButton } from "../Components/Button/StyledButton";
import { useAuth0 } from "@auth0/auth0-react";

const defaultState = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const [formData, setFormData] = useState(defaultState);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  function handlerOnChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function submit(e) {
    e.preventDefault();

    for (const key in formData) {
      formData[key] = formData[key].trim();
    }
    // setFormData({ ...formData });

    if (Object.values(formData).every((item) => !!item)) {
      try {
        await apiAuth.signIn(formData).then((response) => {
          const user = {
            displayName: response.user.displayName,
            email: response.user.email,
          }
          dispatch(signIn(user));
        })
        NotificationManager.success("", "Success", 2000);
      } catch (error) {

      }
    } else {
      NotificationManager.warning("Fill in all filds pls", "Error", 2000);
    }
  }

  const submitSignInWithGoogle = () => {
    signInWithGoogle().then(response => {
      const userObj = {
        displayName: response.displayName,
        email: response.email,
      }
      dispatch(signIn(userObj));
      NotificationManager.success("", "Success", 2000);
    })
  }

  // auth0
  const { loginWithRedirect } = useAuth0();

  // return <button onClick={() => loginWithRedirect()}>Log In</button>;

  return (
    <ContainerCenter>
      <Form>
        <div>
          <p>Email:</p>
          <input
            type="text"
            name="email"
            onChange={handlerOnChange}
            value={formData.email}
          />
        </div>
        <div>
          <p>Password:</p>
          <input
            type="password"
            name="password"
            onChange={handlerOnChange}
            value={formData.password}
          />
        </div>
        <div>
          <StyledButton type="submit" onClick={submit}>
            Enter with email
          </StyledButton>

        </div>
      </Form>
      <StyledButton type="submit" onClick={submitSignInWithGoogle}>
        Enter with Google
      </StyledButton>
      <button onClick={() => loginWithRedirect()}>Enter with Auth0</button>;
      <div>
        <p>don't have an accaunt? </p>
        <StyledButton
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          go to registration screen
        </StyledButton>
      </div>
    </ContainerCenter>
  );
}

export default SignInPage;