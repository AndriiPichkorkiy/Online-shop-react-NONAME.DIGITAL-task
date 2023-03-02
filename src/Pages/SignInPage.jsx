import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiAuth, { signInWithGoogle } from "../api/apiAuth";
import { signIn } from "../redux/authSlice";
import { NotificationManager } from 'react-notifications';
import { ContainerCenter } from "./Common.styled";
import { Form, TitelInput, FormFooter, FormFooterLink, ServicesEnterContainer } from "./SignInUp.styled";
import { StyledButton } from "../Components/Button/StyledButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0 } from "@styled-icons/simple-icons/Auth0"
import { Google } from "@styled-icons/boxicons-logos/Google"

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

  const iconSizeGoogle = 42;
  const iconSizeAuth0 = 36;

  return (
    <ContainerCenter>
      <Form>
        <div>
          <TitelInput>Email:</TitelInput>
          <input
            type="text"
            name="email"
            onChange={handlerOnChange}
            value={formData.email}
          />
        </div>
        <div>
          <TitelInput>Password:</TitelInput>
          <input
            type="password"
            name="password"
            onChange={handlerOnChange}
            value={formData.password}
          />
        </div>
        <div>
          <StyledButton coloredBtn type="submit" onClick={submit}>
            Enter
          </StyledButton>

        </div>
      </Form>
      <ServicesEnterContainer>
        <StyledButton Service type="submit" onClick={submitSignInWithGoogle}>
          <Google size={iconSizeGoogle} /> Google
        </StyledButton>
        <StyledButton Service onClick={() => loginWithRedirect()}>
          <Auth0 size={iconSizeAuth0} />
          Auth0
        </StyledButton>
      </ServicesEnterContainer>


      <FormFooter>
        <p>don't have an accaunt? </p>
        <FormFooterLink
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          Go to registration screen
        </FormFooterLink>
      </FormFooter>
    </ContainerCenter>
  )
}

export default SignInPage;