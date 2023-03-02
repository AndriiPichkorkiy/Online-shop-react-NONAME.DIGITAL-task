import { FooterContainer, FooterLinkList, FooterTitle, SocialContainer, CopyRights, FooterLink } from "./Footer.styled";
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Github } from '@styled-icons/bootstrap/Github'

const Footer = () => {
  const iconsSize = 32;
  return (
    <FooterContainer>
      <SocialContainer>
        <FooterTitle>More about us: </FooterTitle>
        <FooterLinkList inline>
          <li >
            <FooterLink href="/"  ><FacebookSquare size={iconsSize} title="Facebook" /></FooterLink>
          </li>
          <li >
            <FooterLink href="/"  ><Linkedin size={iconsSize} title="Linkedin" /></FooterLink>
          </li>
          <li >
            <FooterLink href="/"  ><Github size={iconsSize} title="Github" /></FooterLink>
          </li>
        </FooterLinkList>
      </SocialContainer>
      <FooterLinkList>
        <li>
          <FooterLink href="/"  >Conditions of Use</FooterLink>
        </li>
        <li>
          <FooterLink href="/"  >Privacy Notice</FooterLink>
        </li>
        <li>
          <FooterLink href="/"  >Your Ads Privacy Choices</FooterLink>
        </li>
      </FooterLinkList>
      <CopyRights>© 1996-2023, example.com.ua, Inc. or its affiliates</CopyRights>
    </FooterContainer>
  );
}

export default Footer;