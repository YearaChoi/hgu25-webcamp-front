import axios from "axios";

const getPost = async (id) => {
  try {
    const serverResponse = await axios.get(
      `${process.env.REACT_APP_HOST_URL}/get/${id}`
    );
    console.log("serverRespon:", serverResponse);
    return serverResponse.data;
  } catch (error) {
    console.error("포스트 불러오기 실패:", error);
    return [];
  }
};

export default getPost;
