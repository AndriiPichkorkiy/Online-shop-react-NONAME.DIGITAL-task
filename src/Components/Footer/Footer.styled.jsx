import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: fit-content;
  /* border-top: solid black 1px; */
  background-color: #868B8E;
  text-align: center;
`

export const FooterTitle = styled.h2`
  color: #EEEDE7;
  display: inline;
  font-size: 1.5rem;
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
 }
`

export const FooterSocialList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const CopyRights = styled.ul`
  color: #E7D2CC;
`
export const FooterLink = styled.a`
  color: #EEEDE7;
 text-decoration: none;

  &:hover {
    color: #E7D2CC;
  }
`