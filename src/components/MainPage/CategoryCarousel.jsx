import React from "react";
import styled from "styled-components";

function CategoryCarousel() {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
}

export default CategoryCarousel;

const Wrapper = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  border: 2px solid red;
  width: 80vw;
  height: 400px;
`;
