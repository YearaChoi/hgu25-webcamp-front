import Carousel from "react-bootstrap/Carousel";
import carouseImg1 from "../../assets/icons/carouseImg1.jpg";
import carouseImg2 from "../../assets/icons/carouseImg2.jpg";
import carouseImg3 from "../../assets/icons/carouseImg3.jpg";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function MainCarousel() {
  return (
    <Wrapper>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Img src={carouseImg1} alt="logoImg" />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={carouseImg2} alt="logoImg" />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={carouseImg3} alt="logoImg" />
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
}

export default MainCarousel;

const Wrapper = styled.div`
  /* border: 2px solid red; */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
