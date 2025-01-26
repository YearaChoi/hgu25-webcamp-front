import React from "react";
import styled from "styled-components";
import logoImg from "../assets/icons/logoImg.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleMenuClick = () => {
    navigate("/post/category");
    window.location.reload();
  };

  return (
    <div>
      <Wrapper>
        <div>
          <Container>
            <LogoImg onClick={handleLogoClick}>
              <img src={logoImg} alt="logoImg" />
            </LogoImg>
            <Menus>
              <Menu onClick={handleMenuClick}>중고거래</Menu>
              <Menu>부동산</Menu>
              <Menu>중고차</Menu>
              <Menu>알바</Menu>
              <Menu>동네업체</Menu>
              <Menu>동네생활</Menu>
              <Menu>모임</Menu>
            </Menus>
            <AppDownBtn>앱 다운로드</AppDownBtn>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;

const Wrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1260px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  padding-top: 12px;
`;

const LogoImg = styled.div`
  cursor: pointer;
`;

const Menus = styled.div`
  /* border: 2px solid red; */
  width: 560px;
  display: flex;
  justify-content: space-evenly;
`;

const Menu = styled.div`
  /* border: 2px solid green; */
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #414141;
  }
`;

const AppDownBtn = styled.div`
  background-color: #fce9df;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  color: #e65f17;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;
