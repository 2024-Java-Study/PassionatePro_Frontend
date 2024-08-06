import * as S from "./ReplyInput.style";
import { useState } from "react";
import axios from "axios";

const ReplyInput = (command) => {

    const [replyInfo, setReplyInfo] = useState({
        id: command.command.id, 
        command: command.command.flag, 
        content: command.command.content,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (replyInfo.command===0) replyCreateAPI(replyInfo.id, replyInfo.content);
        if (replyInfo.command===1) replyModifyAPI(replyInfo.id, replyInfo.content);
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
            { commentId: commentId, content: content },
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

    const replyModifyAPI = (replyId, content) => {
        const API = process.env.REACT_APP_API_URL + "/replies/" + replyId;
        console.log(command);
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
            window.alert("답글이 수정되었습니다.");
        }).catch((error) => {
            window.alert("답글 수정 실패");
            console.log(error);
        });
    };

    console.log(replyInfo);
    return (
        <S.ReplyInput>
            <S.Text>답글</S.Text>
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