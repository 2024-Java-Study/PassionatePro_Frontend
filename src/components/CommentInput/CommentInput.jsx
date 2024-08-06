import * as S from "./CommentInput.style";
import { useState } from "react";
import axios from "axios";

const CommentInput = (command) => {

    const [commentInfo, setCommentInfo] = useState({
        id: command.command.id,
        command: command.command.flag, 
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentInfo.command===0) commentCreateAPI(commentInfo.id, commentInfo.content);
        if (commentInfo.command===1) commentModifyAPI(commentInfo.id, commentInfo.content);
        window.location.reload();
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
            { boardId: postId, content: content },
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

    const commentModifyAPI = (commentId, content) => {
        const API = process.env.REACT_APP_API_URL + "/comments/" + commentId;
        axios.put( API,
            { content: content },
            { 
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            }
        ).then((result) => {
            console.log(result);
            window.alert("댓글이 수정되었습니다.");
        }).catch((error) => {
            window.alert("댓글 수정 실패");
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