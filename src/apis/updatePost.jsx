import axios from "axios";

const updatePost = async (id, title, price, discription, category) => {
  try {
    const serverResponse = await axios.put(
      `${process.env.REACT_APP_HOST_URL}`,
      {
        id,
        title,
        price,
        discription,
        category,
      }
    );

    console.log("포스트가 정상적으로 추가되었음", serverResponse);

    return serverResponse.data;
  } catch (error) {
    console.error("포스트 추가 실패:", error);
    throw error;
  }
};

export default updatePost;
