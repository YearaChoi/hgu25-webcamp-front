import axios from "axios";

const getAllPost = async () => {
  try {
    const serverResponse = await axios.get(
      `${process.env.REACT_APP_HOST_URL}/getAll`
    );
    console.log("serverRespon:", serverResponse);

    // 이미지 경로를 기반으로 이미지를 가져오는 코드
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

export default getAllPost;
