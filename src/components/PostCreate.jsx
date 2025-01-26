import React, { useState } from "react";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import CollectionsIcon from "@mui/icons-material/Collections";
import { useNavigate } from "react-router-dom";
import createPost from "../apis/createPost";

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

function PostCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  console.log("formdata: ", formData);
  console.log("file: ", imageFile);

  const handleSubmit = async () => {
    try {
      await createPost(formData, imageFile);
      console.log("게시물 추가 성공");
      navigate("/post/category");
    } catch (error) {
      console.log("게시물 추가 실패");
    }
  };

  return (
    <Wrapper>
      <PostDetailTop>
        홈 {">"} 중고거래 {">"} 게시물 작성
      </PostDetailTop>
      <Container>
        <PostContainer>
          <PostImg
            onClick={() => document.getElementById("imageInput").click()}
          >
            {imageFile ? (
              <img src={URL.createObjectURL(imageFile)} alt="Selected" />
            ) : (
              <SvgIcon
                component={CollectionsIcon}
                inheritViewBox
                style={{ color: "#ff5d0547", fontSize: "200px" }}
              />
            )}
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </PostImg>
        </PostContainer>
        <Detail>
          <Title>
            <Input
              type="text"
              placeholder="게시물 제목을 입력하세요"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={{ outline: "none" }}
            />
          </Title>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "15px", marginRight: "20px" }}>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={{ outline: "none" }}
              >
                <option value="">카테고리 선택</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </div>
            <div style={{ display: "flex" }}>
              <Price>
                <Input
                  placeholder="가격을 입력하세요"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  style={{ outline: "none" }}
                />
              </Price>
              <div
                style={{
                  paddingTop: "25px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                원
              </div>
            </div>
          </div>
          <Description>
            <Textarea
              placeholder="상품 상세설명을 입력하세요"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={{ outline: "none" }}
            />
          </Description>
          <Btn onClick={handleSubmit}>게시물 업로드</Btn>
        </Detail>
      </Container>
    </Wrapper>
  );
}

export default PostCreate;

const Wrapper = styled.div`
  padding: 30px 90px 120px 120px;
`;

const PostDetailTop = styled.div`
  margin-bottom: 20px;
`;

const Container = styled.div`
  margin-top: 15px;
  display: flex;
`;

const PostContainer = styled.div`
  width: 600px;
  height: 600px;
  background-color: #fcf3f0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* border: 2px solid red; */
`;

const PostImg = styled.div`
  cursor: pointer;
  /* width: 600px;
  height: 600px; */
  /* background-color: #fcf3f0; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Detail = styled.div`
  margin-left: 30px;
  /* border: 2px solid red; */
  width: 590px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  width: 310px;
`;

const Price = styled.div`
  margin-top: 12px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  width: 150px;
`;

const Description = styled.div`
  margin-top: 20px;
`;

const Btn = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  width: 100%;
  background-color: #f65f0f;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7931;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
`;

const Select = styled.select`
  width: 140px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 240px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
  resize: none;
`;
