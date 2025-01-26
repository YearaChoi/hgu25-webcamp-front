import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import getPost from "../apis/getPost";
import deletePost from "../apis/deletePost";
import updatePost from "../apis/updatePost";

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

function PostDetil() {
  const [post, setPost] = useState("");
  const { postId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const id = postId;
      const fetchedPost = await getPost(id);
      setPost(fetchedPost);
    };
    fetchPost();
  }, [postId]);

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        category: post.category,
        price: post.price,
        description: post.description,
      });
      setImageFile(post.imageUrl);
    }
  }, [post]);

  console.log("imgaeUrl :", post.imageUrl);

  const handleEditBtnClick = () => {
    setIsEditing(true);
  };

  const handleCancelBtnClick = () => {
    setIsEditing(false);
    setFormData({
      title: post.title,
      category: post.category,
      price: post.price,
      description: post.description,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);

      // 파일의 미리보기 URL 생성
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
    }
  };

  console.log("formdata: ", formData);
  console.log("file: ", imageFile);

  const handleSaveBtnClick = async () => {
    setIsEditing(false);

    try {
      await updatePost(postId, formData, imageFile);
      console.log("게시물이 성공적으로 업데이트되었습니다!");
    } catch (error) {
      console.log("게시물 업데이트에 실패했습니다.");
    }
  };

  const handleDeleteBtnClick = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        const id = postId;
        await deletePost(id);
        navigate("/post/category");
      } catch (error) {
        console.error("Failed to delete post:", error);
      }
    }
  };

  if (!post) return <div>존재하지 않는 게시물입니다.</div>;

  return (
    <Wrapper>
      <PostDetailTop>
        홈 {">"} 중고거래 {">"} {post.title}
      </PostDetailTop>
      <Container>
        <PostImg onClick={() => document.getElementById("imageInput").click()}>
          {imagePreview ? (
            <img src={imagePreview} alt="미리보기 이미지" />
          ) : (
            <img src={imageFile} alt={post.title} />
          )}
        </PostImg>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <Detail>
          <Title>
            {isEditing ? (
              <Input
                type="text"
                placeholder="게시물 제목을 입력하세요"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style={{ outline: "none" }}
              />
            ) : (
              post.title
            )}
          </Title>

          <div style={{ display: "flex" }}>
            {isEditing ? (
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
            ) : (
              <>
                <GrayText>
                  {
                    categories.find(
                      (category) => category.id === parseInt(post.category)
                    )?.name
                  }
                </GrayText>
                <GrayText>38분 전</GrayText>
              </>
            )}
          </div>

          <Price>
            {isEditing ? (
              <div style={{ display: "flex" }}>
                <Input
                  type="number"
                  placeholder="가격을 입력하세요"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  style={{ outline: "none" }}
                />
                <div style={{ paddingLeft: "5px", marginTop: "12px" }}>원</div>
              </div>
            ) : (
              `${post.price}원`
            )}
          </Price>

          <Description>
            {isEditing ? (
              <Textarea
                placeholder="상품 상세설명을 입력하세요"
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{ outline: "none" }}
              />
            ) : (
              post.description
            )}
          </Description>
          <BottomText>채팅 0 · 관심 0</BottomText>
          <div style={{ display: "flex" }}>
            {isEditing ? (
              <>
                <Btn onClick={handleSaveBtnClick}>저장</Btn>
                <Btn onClick={handleCancelBtnClick}>취소</Btn>
              </>
            ) : (
              <>
                <Btn onClick={handleEditBtnClick}>수정</Btn>
                <Btn onClick={handleDeleteBtnClick}>삭제</Btn>
              </>
            )}
          </div>
        </Detail>
      </Container>
    </Wrapper>
  );
}

export default PostDetil;

const Wrapper = styled.div`
  padding: 30px 90px 120px 120px;
`;

const PostDetailTop = styled.div``;

const Container = styled.div`
  margin-top: 15px;
  display: flex;
`;

const PostImg = styled.div`
  width: 600px;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Detail = styled.div`
  margin-left: 30px;
  /* border: 2px solid orange; */
  width: 590px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  width: 310px;
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
  width: 160px;
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
  padding: 5px 16px 5px 16px;
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
