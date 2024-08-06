import axios from "axios";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const DeletePost = ({key}) => {

    // const pathname = useLocation().pathname;

    // const post = useLocation().location.state?.board;

    // const API = process.env.REACT_APP_API_URL + `/boards/${post.id}`;
    const API = process.env.REACT_APP_API_URL + `/boards/${key}`;


    axios
        .delete(API, {
        withCredentials: true,
        headers: {
            "Accept-Type": "application/json",
        },
    })
    .then((result) => {
        console.log(result);
        window.alert("게시물 삭제에 성공하였습니다.");
    })
    .catch((error) => {
        console.log(error);
        window.alert("게시물 삭제에 실패하였습니다.");
    })
};

export default DeletePost;