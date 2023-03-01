import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { CommonWrapper, ContentWrapper, FooterWrapper } from "./CommonTemplate.styled";

const CommonTemplate = () => {
  return (
    <CommonWrapper>
      <ContentWrapper >
        <Header />
        <Outlet />
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>


    </CommonWrapper>
  );
}

export default CommonTemplate;