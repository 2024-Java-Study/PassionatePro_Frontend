import * as S from "./ReplyInput.style";
import { useState } from "react";
import axios from "axios";

const ReplyInput = (commentId) => {

    const [replyInfo, setReplyInfo] = useState({
        commentId: commentId,
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        replyCreateAPI(replyInfo.commentId, replyInfo.content);
        window.location.reload();
    };

    const onChangeInfo = (e) => {
        setReplyInfo({
            ...replyInfo,
            [e.target.name]: e.target.value,
        });
    };

    const replyCreateAPI = (commentId, content) => {
        const API = process.env.REACT_APP_API_URL + "/replies";
        axios.post( API,
            { commentId: commentId.commentId, content: content },
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
        <S.ReplyInput>
            {/* <S.Text>댓글</S.Text> */}
            <S.InputBox 
                name="content"
                onChange={onChangeInfo}
                value={replyInfo.content}
                placeholder="답글을 입력하세요..."
                // ref={inputRef}
            />
            <S.Button onClick={handleSubmit}/>
        </S.ReplyInput>
    );
};

export default ReplyInput;