import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';
import { getAuth, signOut } from "firebase/auth";

import { signOut as signOutAction } from '../../redux/authSlice'
import {
  CabinetTitle, CabinetMenuListItem, LogOutBtn, CabinetMenuColumn, RightColumn, CabinetContainer, ImgWrapper, TitleOrder
} from './CabinetPage.styled';

import OrderEmpty from '../../assests/orderEmpty.jpg'

const CabinetPage = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, logout } = useAuth0();

  const logOutFunction = isAuthenticated
    ? () => logout({ logoutParams: { returnTo: window.location.origin } })
    : () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        dispatch(signOutAction())
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }

  return (
    <CabinetContainer>
      <CabinetMenuColumn>
        <CabinetTitle>Мій акаунт</CabinetTitle>
        <ul>
          <CabinetMenuListItem active>Мої замовлення</CabinetMenuListItem>
          <CabinetMenuListItem>Мої повернення</CabinetMenuListItem>
          <CabinetMenuListItem>Дані облікового запису</CabinetMenuListItem>
          <CabinetMenuListItem>Адреси доставки</CabinetMenuListItem>
          <CabinetMenuListItem>Адреса платника</CabinetMenuListItem>
          <CabinetMenuListItem>
            <LogOutBtn onClick={logOutFunction}>
              LogOut
            </LogOutBtn>
          </CabinetMenuListItem>
        </ul>
      </CabinetMenuColumn>
      <RightColumn>
        <ImgWrapper>
          <img src={OrderEmpty} alt="" />
        </ImgWrapper>
        <TitleOrder>Замовлення відсутні</TitleOrder>
      </RightColumn>
    </CabinetContainer>
  );
}

export default CabinetPage;