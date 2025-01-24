import React from "react";
import styled from "styled-components";
import adImg from "../assets/icons/footerImg.png";

function Footer() {
  return (
    <Wrapper>
      <AdImg>
        <img src={adImg} alt="adImg" />
      </AdImg>
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
