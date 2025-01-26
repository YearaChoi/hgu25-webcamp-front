import axios from "axios";

const getCategoryPostList = async (category) => {
  try {
    const serverResponse = await axios.get(
      `${process.env.REACT_APP_HOST_URL}/category/${category}`
    );
    console.log("serverRespon:", serverResponse);

    const posts = serverResponse.data;
    posts.forEach((post) => {
      // 이미지 URL을 생성하여 post에 추가
      post.imageUrl = `${process.env.REACT_APP_HOST_URL}${post.imagePath}`;
    });

    return posts;
  } catch (error) {
    console.error("포스트 불러오기 실패:", error);
    return [];
  }
};

export default getCategoryPostList;
