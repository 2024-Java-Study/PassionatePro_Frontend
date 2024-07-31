import * as S from "./CommentInput.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CommentInput = (postId) => {
    const [commentInfo, setCommentInfo] = useState({
        postId: postId,
        content: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        commentCreateAPI(commentInfo.postId, commentInfo.content);
        navigate("/boards");
    };

    const onChangeInfo = (e) => {
        setCommentInfo({
            ...commentInfo,
            [e.target.name]: e.target.value,
        });
    };

    const commentCreateAPI = (postId, content) => {
        const API = process.env.REACT_APP_API_URL + "/comments";
        axios.post( API,
            { boardId: postId.postId, content: content },
            { 
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            }
        ).then((result) => {
            console.log(result);
            window.alert("댓글이 작성되었습니다.");
        }).catch((error) => {
            window.alert("댓글 작성 실패");
            console.log(error);
        });
    };

    return (
        <S.CommentInput>
            <S.Text>댓글</S.Text>
            <S.InputBox 
                name="content"
                onChange={onChangeInfo}
                value={commentInfo.content}
                placeholder="댓글을 입력하세요..."
            />
            <S.Button onClick={handleSubmit}/>
        </S.CommentInput>
    );
};

export default CommentInput;