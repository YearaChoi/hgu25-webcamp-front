import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function PostList() {
  const categories = [
    { id: 1, name: "디지털기기" },
    { id: 2, name: "생활가전" },
    { id: 3, name: "가구/인테리어" },
    { id: 4, name: "생활/주방" },
    { id: 5, name: "유아동" },
    { id: 6, name: "유아도서" },
    { id: 7, name: "여성의류" },
    { id: 8, name: "여성잡화" },
    { id: 9, name: "남성패션/잡화" },
    { id: 10, name: "뷰티/미용" },
    { id: 11, name: "스포츠/레저" },
    { id: 12, name: "취미/게임/음반" },
    { id: 13, name: "도서" },
    { id: 14, name: "티켓/교환권" },
    { id: 15, name: "가공식품" },
    { id: 16, name: "건강기능식품" },
    { id: 17, name: "반려동물용품" },
    { id: 18, name: "식물" },
    { id: 19, name: "기타 중고물품" },
    { id: 20, name: "삽니다" },
  ];

  const postDummyData = [
    {
      id: 1,
      title: "중고 노트북 판매",
      category: 1,
      description: "사용감 적은 맥북 프로 판매합니다. 2020년 모델.",
      price: "20000",
      createdAt: "2025-01-20 14:30",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg",
    },
    {
      id: 2,
      title: "냉장고 싸게 팝니다",
      category: 2,
      description: "2년 사용한 삼성 냉장고. 성능 문제없음.",
      price: "20000",
      createdAt: "2025-01-21 10:15",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg",
    },
    {
      id: 3,
      title: "원목 식탁 세트",
      category: 3,
      description: "6인용 원목 식탁과 의자 세트입니다. 깨끗하게 사용했어요.",
      price: "20000",
      createdAt: "2025-01-19 09:45",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg",
    },
    {
      id: 4,
      title: "주방용품 일괄 판매",
      category: 4,
      description: "후라이팬, 냄비, 접시 등 다양한 주방용품 팝니다.",
      price: "20000",
      createdAt: "2025-01-22 11:30",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg",
    },
    {
      id: 5,
      title: "유아용 장난감 판매",
      category: 5,
      description: "아기가 사용하던 장난감입니다. 상태 양호.",
      price: "20000",
      createdAt: "2025-01-18 16:00",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg",
    },
    {
      id: 6,
      title: "여성 겨울 코트",
      category: 7,
      description: "새 옷이나 다름없는 여성 겨울 코트입니다.",
      price: "20000",
      createdAt: "2025-01-20 13:00",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg",
    },
    {
      id: 7,
      title: "스포츠 용품 세트",
      category: 11,
      description: "야구 배트와 글러브, 운동화 일괄 판매합니다.",
      price: "20000",
      createdAt: "2025-01-17 15:20",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg",
    },
    {
      id: 8,
      title: "공연 티켓 판매",
      category: 14,
      description: "2월 10일 공연 티켓 2장 팝니다. 선착순.",
      price: "20000",
      createdAt: "2025-01-23 08:40",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg",
    },
    {
      id: 9,
      title: "공연 티켓 판매",
      category: 14,
      description: "2월 10일 공연 티켓 2장 팝니다. 선착순.",
      price: "20000",
      createdAt: "2025-01-23 08:40",
      imageUrl:
        "https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg",
    },
  ];

  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryId) {
      const radioBtn = document.getElementById(`category-${categoryId}`);
      if (radioBtn) {
        radioBtn.checked = true;
      }
    }
  }, [categoryId]);

  const handlePageReload = () => {
    navigate("/post/category");
    window.location.reload();
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/post/category/${categoryId}`);
  };

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handleCreatePostBtnClick = () => {
    navigate("/post/create");
  };

  return (
    <Wrapper>
      <Top>
        홈 {">"} 중고거래
        <TopInfo>
          <MainText>
            경상북도 포항시 북구 중고거래{" "}
            {categoryId &&
              `- ${
                categories.find(
                  (category) => category.id === parseInt(categoryId)
                )?.name
              }`}
          </MainText>
          <CreatPostBtn onClick={handleCreatePostBtnClick}>
            게시물 추가하기
          </CreatPostBtn>
        </TopInfo>
      </Top>
      <MainContainer>
        <PostFilter>
          <FilterTop>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>필터</div>
            <div
              style={{
                fontSize: "14px",
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={handlePageReload}
            >
              초기화
            </div>
          </FilterTop>
          <FileterMain>
            <FilterCategory>카테고리</FilterCategory>
            {categories.map((category) => (
              <div key={category.id} style={{ paddingTop: "5px" }}>
                <input
                  type="radio"
                  id={`category-${category.id}`}
                  name="option"
                  value={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                />
                <Lable htmlFor={`category-${category.id}`}>
                  {category.name}
                </Lable>
                <br />
              </div>
            ))}
          </FileterMain>
        </PostFilter>
        <PostListContainer>
          {postDummyData.map((post) => (
            <PostContainer
              key={post.id}
              onClick={() => handlePostClick(post.id)}
            >
              <PostImg>
                <img src={post.imageUrl} alt="이미지" />
              </PostImg>
              <PostTitle>{post.title}</PostTitle>
              <PostPrice>{post.price}원</PostPrice>
            </PostContainer>
          ))}
        </PostListContainer>
      </MainContainer>
    </Wrapper>
  );
}

export default PostList;

const Wrapper = styled.div`
  /* border: 2px solid blue; */
  padding: 30px 80px 20px 110px;
`;

const Top = styled.div`
  /* border: 2px solid green; */
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CreatPostBtn = styled.div`
  background-color: #f65f0f;
  margin-right: 20px;
  padding: 8px 15px 8px 15px;
  border-radius: 15px;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  transition-duration: 0.5s;

  &:hover {
    background-color: #ff7931;
    transition-duration: 0.5s;
  }
`;

const MainText = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const MainContainer = styled.div`
  /* border: 2px solid red; */
  margin-top: 45px;
  display: flex;
`;

const PostFilter = styled.div`
  /* border: 2px solid orange; */
  width: 450px;
`;

const FilterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 20px;
`;

const FileterMain = styled.div`
  padding-top: 15px;
`;

const FilterCategory = styled.div`
  font-weight: bold;
  font-size: 15px;
  padding-bottom: 10px;
`;

const Lable = styled.label`
  font-size: 15px;
  padding-left: 8px;
  cursor: pointer;
`;

const PostListContainer = styled.div`
  /* border: 2px solid aqua; */
  margin-left: 20px;
  margin-bottom: 80px;
  padding: 10px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;

const PostImg = styled.div`
  width: 230px;
  height: 220px;
  /* border: 2px solid blue; */
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    /* cursor: pointer; */
  }
`;

const PostContainer = styled.div`
  width: 230px;
  padding-bottom: 40px;
  cursor: pointer;
  /* border: 2px solid green; */

  &:hover ${PostImg} img {
    transform: scale(1.2, 1.2);
    transition-duration: 0.5s;
  }

  ${PostImg} img {
    transform: scale(1);
    transition: transform 0.5s;
  }
`;

const PostTitle = styled.div`
  padding-top: 10px;
  font-size: 16px;
`;

const PostPrice = styled.div`
  padding-top: 3px;
  font-size: 16px;
  font-weight: bold;
`;
