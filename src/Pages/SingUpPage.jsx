import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../api/apiAuth";
import { NotificationManager } from 'react-notifications';
import { ContainerCenter, Form } from "./Common.styled";
import { StyledButton } from "../Components/Button/StyledButton";

const defaultState = {
  name: "",
  email: "",
  password: "",
};

const SingUpPage = () => {
  const [formData, setFormData] = useState(defaultState);
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
        await apiAuth.signUp(formData)
        NotificationManager.success("Now you can sing-in", "Success", 2000);
      } catch (error) {

      }

    } else {
      NotificationManager.warning("Fill in all filds pls", "Error", 2000);
    }
  }

  return (
    <ContainerCenter>
      <Form>
        <div>
          <p>Name:</p>
          <input
            type="text"
            name="name"
            onChange={handlerOnChange}
            value={formData.name}
          />
        </div>
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
            Enter
          </StyledButton>
        </div>
      </Form>
      <div>
        <p>allready have an accaunt? </p>
        <StyledButton
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          go to login screen
        </StyledButton>
      </div>
    </ContainerCenter>
  );
}

export default SingUpPage;