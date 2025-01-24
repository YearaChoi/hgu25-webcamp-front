import React from "react";
import styled from "styled-components";
import logoImg from "../assets/icons/logoImg.png";
import adImg from "../assets/icons/footerImg.png";
import SvgIcon from "@mui/material/SvgIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const footerData = {
    company: [
      "회사",
      "회사 소개",
      "당근페이",
      "팀문화",
      "서비스 소개",
      "블로그",
      "채용",
    ],
    navigation: [
      "탐색",
      "중고거래",
      "부동산",
      "중고차",
      "알바",
      "동네업체",
      "동네생활",
      "모임",
      "채팅하기",
      "이웃",
    ],
    business: ["비즈니스", "당근 비즈니스", "제휴 문의", "광고 문의"],
    karrot: ["Karrot", "Canada", "United States", "United Kingdom", "日本"],
    inquiry: ["문의", "IR", "PR", "고객센터"],
  };

  return (
    <Wrapper>
      <AdImg>
        <img src={adImg} alt="adImg" />
      </AdImg>
      <FooterTop>
        <TopLeft>
          <img src={logoImg} alt="adImg" />
          <Icons>
            <SvgIcon component={FacebookIcon} inheritViewBox />
            <SvgIcon component={InstagramIcon} inheritViewBox />
            <SvgIcon component={YouTubeIcon} inheritViewBox />
          </Icons>
        </TopLeft>
        <TopRight>
          <div>
            <Column>
              <Title>{footerData.company[0]}</Title>
              {footerData.company.slice(1).map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </Column>
            <Column>
              <Title>{footerData.inquiry[0]}</Title>
              {footerData.inquiry.slice(1).map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </Column>
          </div>
          <Column>
            <Title>{footerData.navigation[0]}</Title>
            {footerData.navigation.slice(1).map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </Column>
          <Column>
            <Title>{footerData.business[0]}</Title>
            {footerData.business.slice(1).map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </Column>
          <Column>
            <Title>{footerData.karrot[0]}</Title>
            {footerData.karrot.slice(1).map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </Column>
        </TopRight>
      </FooterTop>
      <FooterBottom>
        <InfoBold>(주) 당근마켓</InfoBold>
        <Info>
          <InfoBold>대표 </InfoBold>김용현 | 황도연{" "}
          <InfoBold>사업자번호</InfoBold> 375-87-00088
        </Info>
        <Info>
          <InfoBold>직업정보제공사업 신고번호</InfoBold> J1200020200016
        </Info>
        <Info>
          <InfoBold>통신판매업 신고번호</InfoBold>2021-서울서초-2875
        </Info>
        <Info>
          <InfoBold>호스팅 사업자</InfoBold> Amazon Web Service(AWS)
        </Info>
        <Info>
          <InfoBold>주소</InfoBold> 서울특별시 구로구 디지털로 300, 10층
          (당근서비스)
        </Info>
        <Info>
          <InfoBold>전화</InfoBold> | 1544-9796 고객문의 cs@daangnservice.com
        </Info>

        <InfoBottom>
          <InfoBold>이용약관</InfoBold>
          <InfoBold>개인정보처리방침</InfoBold>
          <InfoBold>운영정책</InfoBold>
          <InfoBold>위치기반서비스 이용약관</InfoBold>
          <InfoBold>이용자보호 비전과 계획</InfoBold>
          <InfoBold>청소년보호정책</InfoBold>
        </InfoBottom>
      </FooterBottom>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  /* border: 2px solid blue; */
`;

const AdImg = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FooterTop = styled.div`
  height: 450px;
  /* border: 2px solid red; */
  display: flex;
`;

const TopLeft = styled.div`
  /* border: 2px solid green; */
  padding-left: 90px;

  img {
    height: 46px;
    margin-top: 50px;
  }
`;

const Icons = styled.div`
  /* border: 2px solid blue; */
  margin-left: 5px;
  width: 100px;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
`;

const TopRight = styled.div`
  /* border: 2px solid green; */
  width: 100%;
  margin-left: 380px;
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
`;

const Column = styled.div`
  /* border: 3px solid red; */
  font-size: 15px;
  padding-bottom: 60px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Text = styled.div`
  padding: 2px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const FooterBottom = styled.div`
  padding-top: 30px;
  padding-left: 60px;
  height: 270px;
  border-top: 1px solid #e4e4e4;
  color: gray;
`;

const Info = styled.div`
  font-size: 15px;
`;

const InfoBold = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const InfoBottom = styled.div`
  padding-top: 20px;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-between;
  width: 740px;
`;
