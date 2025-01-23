import React from "react";
import styled from "styled-components";
import logoImg from "../assets/icons/logoImg.png";

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
  const popularKeywords = [
    "인기 검색어",
    "굿즈",
    "플스",
    "닌텐도",
    "다이슨",
    "캠핑",
    "포토카드",
    "에어팟",
    "스타벅스",
    "달력",
    "삼성",
    "다이소",
    "가습기",
    "기프티콘",
    "상품권",
    "기프트카드",
    "노트북",
    "레고",
    "한복",
    "손흥민",
    "의자",
    "아이폰",
  ];

  return (
    <div>
      <Wrapper>
        <div>
          <Container>
            <LogoImg>
              <img src={logoImg} alt="logoImg" />
            </LogoImg>
            <Menus>
              {menus.map((menu, index) => (
                <Menu key={index}>{menu}</Menu>
              ))}
            </Menus>
            <AppDownBtn>앱 다운로드</AppDownBtn>
          </Container>
          <Search></Search>
          <Popular>
            {popularKeywords.map((category, index) => (
              <Category key={index}>{category}</Category>
            ))}
          </Popular>
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
