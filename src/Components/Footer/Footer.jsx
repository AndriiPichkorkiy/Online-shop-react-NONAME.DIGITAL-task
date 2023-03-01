import { FooterContainer, FooterLinkList, FooterTitle, SocialContainer } from "./Footer.styled";
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Github } from '@styled-icons/bootstrap/Github'

const Footer = () => {
  return (
    <FooterContainer>
      <SocialContainer>
        <FooterTitle>More about us: </FooterTitle>
        <FooterLinkList inline>
          <li >
            <a href="/"  ><FacebookSquare size="48" title="Facebook" /></a>
          </li>
          <li >
            <a href="/"  ><Linkedin size="48" title="Linkedin" /></a>
          </li>
          <li >
            <a href="/"  ><Github size="48" title="Github" /></a>
          </li>
        </FooterLinkList>
      </SocialContainer>
      <FooterLinkList>
        <li>
          <a href="/"  >Conditions of Use</a>
        </li>
        <li>
          <a href="/"  >Privacy Notice</a>
        </li>
        <li>
          <a href="/"  >Your Ads Privacy Choices</a>
        </li>
      </FooterLinkList>
      <span>© 1996-2023, example.com.ua, Inc. or its affiliates</span>
    </FooterContainer>
  );
}

export default Footer;