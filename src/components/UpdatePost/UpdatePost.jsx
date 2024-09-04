import axios from "../../customAxios"

const UpdatePost = (formData) => {
    console.log(formData);
    const postId = localStorage.getItem("postId");
    const API = process.env.REACT_APP_API_URL + `/boards/${postId}`;

    axios
      .put(API, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        console.log("게시물 수정 성공");
      })
      .catch((error) => {
        console.log(error);
        console.log("게시물 수정 실패");
      });
};

export default UpdatePost;