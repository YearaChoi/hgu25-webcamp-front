import React from "react";
import styled from "styled-components";
import categoryImg1 from "../../assets/icons/categoryImg1.png";
import categoryImg2 from "../../assets/icons/categoryImg2.png";
import categoryImg3 from "../../assets/icons/categoryImg3.png";
import categoryImg4 from "../../assets/icons/categoryImg4.png";
import categoryImg5 from "../../assets/icons/categoryImg5.png";
import categoryImg6 from "../../assets/icons/categoryImg6.png";
import { useNavigate } from "react-router-dom";

const popularCategory = [
  { id: "1", name: "디지털기기", img: categoryImg1 },
  { id: "2", name: "생활가전", img: categoryImg2 },
  { id: "3", name: "가구/인테리어", img: categoryImg3 },
  { id: "4", name: "생활/주방", img: categoryImg4 },
  { id: "5", name: "유아동", img: categoryImg5 },
  { id: "6", name: "유아도서", img: categoryImg6 },
  { id: "7", name: "여성의류", img: categoryImg1 },
];

function CategoryCarousel() {
  const navigate = useNavigate();
  const handleCategoryClick = (categoryId) => {
    navigate(`post/category/${categoryId}`);
  };

  return (
    <Wrapper>
      <Container maxWidth="md">
        <Title>인기 카테고리</Title>
        <CategoryContainer>
          {popularCategory.map((category) => (
            <CategoryWrapper
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              <Category>
                <img src={category.img} alt={category.name} />
              </Category>
              <Text>{category.name}</Text>
            </CategoryWrapper>
          ))}
        </CategoryContainer>
      </Container>
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
  /* border: 2px solid red; */
  width: 1300px;
  height: 370px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-evenly;
`;

const Category = styled.div`
  background-color: #f0f0f0;
  border-radius: 50%;
  height: 170px;
  width: 170px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:img {
    height: 30px;
  }
`;

const CategoryWrapper = styled.div`
  &:hover ${Category} img {
    transform: scale(1.2, 1.2);
    transition-duration: 0.5s;
  }
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`;
