import React from "react";
import styled from "styled-components";
import logoImg from "../assets/icons/logoImg.png";
import { useNavigate } from "react-router-dom";
import HeaderDetail from "./HeaderDetail";

function Header() {
  const menus = [
    "중고거래",
    "부동산",
    "중고차",
    "알바",
    "동네업체",
    "동네생활",
    "모임",
  ];

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
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
              {menus.map((menu, index) => (
                <Menu key={index}>{menu}</Menu>
              ))}
            </Menus>
            <AppDownBtn>앱 다운로드</AppDownBtn>
          </Container>
          <HeaderDetail />
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
  background-color: #fcf0df;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  color: #c5643d;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;
