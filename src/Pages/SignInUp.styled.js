import styled from "styled-components";

export const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitelInput = styled.span`
  margin-top: 1rem;
  display: block;
`;

export const FormFooter = styled.div`
  margin-top: 1rem;
`;

export const FormFooterLink = styled.button`
  background: none;
  text-decoration: underline;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;
    color: #e7d2cc;
  }
`;

export const ServicesEnterContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;
