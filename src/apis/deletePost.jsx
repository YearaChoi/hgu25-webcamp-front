import axios from "axios";

const deletePost = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_HOST_URL}/delete/${id}`);
    console.log("포스트 삭제 성공");
  } catch (error) {
    console.error("포스트 삭제 실패:", error);
  }
};

export default deletePost;
