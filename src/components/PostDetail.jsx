import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function PostDetil() {
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

  const navigate = useNavigate();
  const { postId } = useParams();
  const post = postDummyData.find((p) => p.id === Number(postId));

  if (!post) return <div>존재하지 않는 게시물입니다.</div>;

  const handleDeleteBtnClick = () => {
    alert("삭제하시겠습니까?");
    navigate("/post/category");
  };

  return (
    <Wrapper>
      <PostDetailTop>
        홈 {">"} 중고거래 {">"} 포스트 제목
      </PostDetailTop>
      <Container>
        <PostImg>
          <img src={post.imageUrl} alt={post.title} />
        </PostImg>
        <Detail>
          <Title>{post.title}</Title>
          <div style={{ display: "flex" }}>
            <GrayText>가구/인테리어</GrayText>
            <GrayText>38분 전</GrayText>
          </div>
          <Price>35,000원</Price>
          <Description>수납공간 서랍 3개 사진처럼 있습니다</Description>
          <Description>위에 플러그랑 전등 있어서 유용합니다</Description>
          <Description>편하게 연락주세요</Description>
          <BottomText>채팅 0 · 관심 0</BottomText>
          <div style={{ display: "flex" }}>
            <Btn>수정</Btn>
            <Btn onClick={handleDeleteBtnClick}>삭제</Btn>
          </div>
        </Detail>
      </Container>
    </Wrapper>
  );
}

export default PostDetil;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  padding: 30px 90px 120px 120px;
`;

const PostDetailTop = styled.div`
  /* border: 2px solid green; */
`;

const Container = styled.div`
  /* border: 2px solid red; */
  margin-top: 15px;
  display: flex;
`;

const PostImg = styled.div`
  /* border: 2px solid blue; */
  width: 600px;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Detail = styled.div`
  /* border: 2px solid green; */
  margin-left: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const GrayText = styled.div`
  font-size: 15px;
  color: gray;
  padding-right: 12px;
`;

const Price = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.div`
  margin-top: 20px;
  font-size: 15px;
`;

const BottomText = styled.div`
  margin-top: 40px;
  font-size: 15px;
  color: gray;
`;

const Btn = styled.div`
  margin-top: 10px;
  margin-right: 5px;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  background-color: #f65f0f;
  color: white;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background-color: #ff7931;
    transition-duration: 0.5s;
  }
`;
