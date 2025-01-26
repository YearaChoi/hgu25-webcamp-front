import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import getAllPost from "../../apis/getAllPost";

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

function PostList() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const radioBtn = document.getElementById(`category-${categoryId}`);
      if (radioBtn) {
        radioBtn.checked = true;
      }
    }
  }, [categoryId]);

  useEffect(() => {
    const fetchPostList = async () => {
      const fetchedPostList = await getAllPost();
      const sortedPosts = fetchedPostList.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedPosts);
    };
    fetchPostList();
  }, []);

  // console.log(posts);
  // console.log(`${process.env.REACT_APP_HOST_URL}/getAll`);

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

  if (!posts) {
    <div>게시물이 없습니니다.</div>;
  }

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
          {posts.map((post) => (
            <PostContainer
              key={post.id}
              onClick={() => handlePostClick(post.id)}
            >
              <PostImg>
                <img src={post.imageName} alt="이미지" />
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
  border: 2px solid orange;
  width: 250px;
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
  border: 2px solid aqua;
  width: 960px;
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
