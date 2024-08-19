import axios from "../../customAxios"

const DeletePost = () => {
    const postId = localStorage.getItem("postId");
    const API = process.env.REACT_APP_API_URL + `/boards/${postId}`;    
    axios
        .delete(API, {
        withCredentials: true,
        headers: {
            "Accept": "application/json",
        },
    })
    .then((result) => {
        console.log(result);
        window.alert("게시물 삭제에 성공하였습니다.");
        window.location.href = "/";
    })
    .catch((error) => {
        console.log(error);
        window.alert("게시물 삭제에 실패하였습니다.");
    })
};

export default DeletePost;