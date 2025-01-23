import React from "react";
import styled from "styled-components";
import logoImg from "../assets/icons/logoImg.png";
import HeaderCarousel from "./MainPage/HeaderCarousel";

function Header() {
  return (
    <div>
      <Wrapper>
        <div>
          <Container>
            <LogoImg>
              <img src={logoImg} alt="logoImg" />
            </LogoImg>
            <Menus>
              <Menu>중고거래</Menu>
              <Menu>부동산</Menu>
              <Menu>중고차</Menu>
              <Menu>알바</Menu>
              <Menu>동네업체</Menu>
              <Menu>동네생활</Menu>
              <Menu>모임</Menu>
            </Menus>
            <AppDownBtn>앱 다운로드</AppDownBtn>
          </Container>
          <Search></Search>
          <Popular>
            <Category>인기 검색어</Category>
            <Category>굿즈</Category>
            <Category>플스</Category>
            <Category>닌텐도</Category>
            <Category>다이슨</Category>
            <Category>캠핑</Category>
            <Category>포토카드</Category>
            <Category>에어팟</Category>
            <Category>스타벅스</Category>
            <Category>달력</Category>
            <Category>삼성</Category>
            <Category>다이소</Category>
            <Category>가습기</Category>
            <Category>기프티콘</Category>
            <Category>상품권</Category>
            <Category>기프트카드</Category>
            <Category>노트북</Category>
            <Category>레고</Category>
            <Category>한복</Category>
            <Category>손흥민</Category>
            <Category>의자</Category>
            <Category>아이폰</Category>
          </Popular>
        </div>
      </Wrapper>
      <HeaderCarousel />
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
  width: 1200px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.div``;

const Menus = styled.div`
  /* border: 2px solid red; */
  width: 500px;
  display: flex;
  justify-content: space-evenly;
`;

const Menu = styled.div`
  /* border: 2px solid green; */
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #414141;
  }
`;

const AppDownBtn = styled.div`
  background-color: #fcdfdf;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  color: #aa3636;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;

const Search = styled.div`
  border: 2px solid red;
  height: 60px;
`;

const Popular = styled.div`
  /* border: 2px solid orange; */
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 180px;
`;

const Category = styled.div`
  font-size: 14px;
  padding: 5px;
`;
