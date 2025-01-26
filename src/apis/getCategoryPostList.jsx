import axios from "axios";

const getCategoryPostList = async (category) => {
  try {
    const serverResponse = await axios.get(
      `${process.env.REACT_APP_HOST_URL}/category/${category}`
    );
    console.log("serverRespon:", serverResponse);
    return serverResponse.data;
  } catch (error) {
    console.error("포스트 불러오기 실패:", error);
    return [];
  }
};

export default getCategoryPostList;
