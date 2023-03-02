import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
  width: 100%;
  margin: 0.5rem auto;
  padding: 0.3rem;

  border-radius: 4px;
  border-width: 0px;
  background: none;

  ${({ coloredBtn }) => {
    if (coloredBtn) return {
      "margin-top": "1rem",
      "background": "#E7D2CC",
      "color": "white",
    }
  }}
  ${({ small }) => {
    if (small) return {
      "width": "fit-content",
      "padding": "1rem 4rem",
      "margin": "0 auto",
      "display": "block",
      "font-size": "1.5rem",
    }
  }}
  ${({ Service }) => {
    if (Service) return {
      "margin-left": "1rem",
      "margin-right": "1rem",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "flex-end",
      "color": "#4E4F50",
    }
  }}


  &:hover {
    background: #00000035;;
    color: white
  }
`

export const ButtonGoBack = styled(Link)`
  text-decoration: none;
  color: #E7D2CC;
  margin-bottom: 1rem;
  display: block;
`

export const ButtonClose = styled.button`
  /* text-decoration: none;
  color: #E7D2CC;
  margin-bottom: 1rem;
  display: block; */
  border: none;
  background: none;
  position: absolute;
  top: 8px;
  right: 8px;

  &:hover {
    background: #00000035;;
    color: white
  }
`