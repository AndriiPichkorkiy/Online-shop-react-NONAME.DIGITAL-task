import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: fit-content;
  border-top: solid black 1px;
  background-color: grey;
  text-align: center;
`

export const FooterTitle = styled.h2`
  display: inline;
  font-size: 2rem;
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterLinkList = styled.ul`
 display: ${({ inline }) => inline ? "inline-flex" : "flex"};
 flex-direction: row;
 justify-content: center;

 &>li {
  margin: 1rem;

  &>a {
    text-decoration: none;

    &:hover {
      color: orange
    }
  }
 }
`

export const FooterSocialList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`