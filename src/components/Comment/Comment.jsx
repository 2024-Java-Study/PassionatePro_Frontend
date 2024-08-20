import defaultProfile from '../../assets/images/default_profile.png';
import kebabIcon from '../../assets/images/menu_kebab.png';
import * as S from "./Comment.style";
import React, { useState, useRef } from "react";
import { CommentInput, ReplyInput } from "../";
import axios from 'axios';

const addImage = url => {
    return url == null? defaultProfile : url;
}

const addMarginLeft = stage => {
    if (stage===0) return 0;
    else if (stage===1) return 50;
}

const Comment = ({comment, stage }) => {
    const [isKebabOpen, setIsKebabOpen] = useState(false);
    const [inputModalMode, setInputModalMode] = useState(0);
 
    const username = localStorage.getItem("username");
    const menuRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    const handleKebabToggle = () => {
        setIsKebabOpen((prevValue) => !prevValue);
    };

    const handleKebabClose = (e) => {
        if (!menuRef.current?.contains(e.relatedTarget)) {
            setIsKebabOpen(false);
        }
    };

    const handleInputModalClose = (e) => {
        if (!inputRef.current?.contains(e.relatedTarget)) {
            setInputModalMode(0);
        }
    }

    const handleReplyCreateModalToggle = () => {
        if (inputModalMode===0) setInputModalMode(1);
        else setInputModalMode(0);
    };

    const handleCommentModifyModalToggle = () => {
        if (inputModalMode===0) setInputModalMode(2);
        else setInputModalMode(0);
    };

    const handleReplyModifyModalToggle = () => {
        if (inputModalMode===0)  setInputModalMode(3);
        else setInputModalMode(0);
    };
 
    const handleCommentDeleteModalToggle = () => {
        if(window.confirm("정말 댓글을 삭제하시겠습니까?")) {
            CommentDeleteAPI(comment.commentId);
        } else {
            alert("댓글 삭제 취소");
        }
    };

    const handleReplyDeleteModalToggle = () => {
        if(window.confirm("정말 답글을 삭제하시겠습니까?")) {
            ReplyDeleteAPI(comment.replyId);
        } else {
            alert("답글 삭제 취소");
        }
    };

    const CommentDeleteAPI = (id) => {
        const API = process.env.REACT_APP_API_URL + "/comments/" + id;
        axios.delete( API,
            { 
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            }
        ).then((result) => {
            console.log(result);
            window.alert("댓글이 삭제되었습니다.");
            window.location.reload();
        }).catch((error) => {
            window.alert("댓글 삭제 실패");
            console.log(error);
        });
    };

    const ReplyDeleteAPI = (id) => {
        const API = process.env.REACT_APP_API_URL + "/replies/" + id;
        axios.delete( API,
            { 
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            }
        ).then((result) => {
            console.log(result);
            window.alert("답글이 삭제되었습니다.");
            window.location.reload();
        }).catch((error) => {
            window.alert("답글 삭제 실패");
            console.log(error);
        });
    };

    const Menu = ({writer}) => (
        <S.Menu ref={{menuRef}}>
            { stage===0 && 
                <S.KebabMenu>
                    <S.KebabList onMouseDown={() => (handleReplyCreateModalToggle(), setIsKebabOpen(false))}>
                        답글 작성하기
                    </S.KebabList>
                    { username == writer && <S.KebabList onMouseDown={() => (handleCommentModifyModalToggle(), setIsKebabOpen(false))}>
                        댓글 수정하기
                    </S.KebabList> }
                    { username == writer && <S.KebabList onMouseDown={() => (handleCommentDeleteModalToggle(), setIsKebabOpen(false))}>
                        댓글 삭제하기
                    </S.KebabList> }
                </S.KebabMenu>
            }
            { (stage===1) && 
                <S.KebabMenu>
                    { username == writer && <S.KebabList onMouseDown={() => (handleReplyModifyModalToggle(), setIsKebabOpen(false))}>
                        답글 수정하기
                    </S.KebabList> }
                    { username == writer && <S.KebabList onMouseDown={() => (handleReplyDeleteModalToggle(), setIsKebabOpen(false))}>
                        답글 삭제하기
                    </S.KebabList> }
                </S.KebabMenu>
            }
        </S.Menu>
    );

    return ( <S.ReplyToggleContainer>
        <S.Comment key={comment.commentId} style={{marginLeft: addMarginLeft(stage)}}>
            <S.CommentHeader>
                <S.WriterProfile src={addImage(comment.profile)}/>
                <S.WriterName style={{color: (comment.isWriterQuit || comment.isDeleted)? '#808080': 'black'}}>{comment.username}</S.WriterName>
                {/* {isKebabOpen? <Menu/>: <S.KebabButtonIcon src={ kebabIcon } onClick={handleKebabToggle} onBlur={handleKebabClose}></S.KebabButtonIcon>} */}
                <S.KebabButtonIcon src={ kebabIcon } onClick={handleKebabToggle} onBlur={handleKebabClose} tabIndex={0}></S.KebabButtonIcon>
                {isKebabOpen && <Menu writer={comment.username}/>}
            </S.CommentHeader>
            <S.CommentContent>{comment.content}</S.CommentContent>
            <S.CommentDate>{comment.createdAt}</S.CommentDate>
        </S.Comment>
        {/* 개선사항: 답글 입력창의 외부 누르면 지우기. */}
        {/* <S.ReplyToggle ref={{inputRef}} onBlur={handleInputModalClose} > */}
        { inputModalMode!=0 && <S.InputToggle ref={{inputRef}} onBlur={handleInputModalClose} tabIndex={0}>
            { inputModalMode===2 && (
                <CommentInput command={{flag: 1, id: comment.commentId}}></CommentInput>
            )}
            { inputModalMode===1 && (
                <ReplyInput command={{flag: 0, id: comment.commentId}}></ReplyInput>
            )}
            { inputModalMode===3 && (
                <ReplyInput command={{flag: 1, id: comment.replyId}}></ReplyInput>
            )}
        </S.InputToggle> }
    </S.ReplyToggleContainer>);
}

export default Comment;