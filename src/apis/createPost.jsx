import axios from "axios";

const createPost = async (title, price, discription, category) => {
  try {
    const serverResponse = await axios.post(
      `${process.env.REACT_APP_HOST_URL}`,
      {
        title,
        price,
        discription,
        category,
      }
    );
    console.log("포스트가 정상적으로 추가되었음", serverResponse);

    return serverResponse.data; //서버에서 반환한 데이터를 반환
  } catch (error) {
    console.error("포스트 추가 실패:", error);
    throw error;
  }
};

export default createPost;
