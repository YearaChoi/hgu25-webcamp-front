import axios from "axios";

// multipart/form-data 형식
// 이미지는 file, 나머지 정보는 param으로 json 형식으로 전달
const createPost = async (formData, imageFile) => {
  try {
    const form = new FormData();

    form.append(
      "param",
      JSON.stringify({
        title: formData.title,
        price: formData.price,
        description: formData.description,
        category: formData.category,
      })
    );

    if (imageFile) {
      form.append("file", imageFile);
    }

    const serverResponse = await axios.post(
      `${process.env.REACT_APP_HOST_URL}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("포스트가 정상적으로 추가되었습니다", serverResponse);
    return serverResponse.data;
  } catch (error) {
    console.error("포스트 추가 실패:", error);
    throw error;
  }
};

export default createPost;
