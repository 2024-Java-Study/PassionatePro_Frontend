import defaultProfile from '../../assets/images/default_profile.png';
import kebabIcon from '../../assets/images/menu_kebab.png';
import * as S from "./Comment.style";
import React, { useState, useRef } from "react";
import { CommentInput, ReplyInput } from "../";

const addImage = url => {
    return url == null? defaultProfile : url;
}

const addMarginLeft = stage => {
    if (stage===0) return 0;
    else if (stage===1) return 50;
}

const Comment = ({comment, stage }) => {
    const [isKebabOpen, setIsKebabOpen] = useState(false);

    const [isCommentModifyModalOpen, setCommentModifyModalOpen] = useState(false);
    const [isCommentDeleteModalOpen, setCommentDeleteModalOpen] = useState(false);

    const [isReplyModifyModalOpen, setReplyModifyModalOpen] = useState(false);
    const [isReplyDeleteModalOpen, setReplyDeleteModalOpen] = useState(false);
    const [isReplyCreateModalOpen, setReplyCreateModalOpen] = useState(false);

    const username = localStorage.getItem("username");
    const menuRef = useRef<HTMLDivElement>(null);
    const replyRef = useRef<HTMLDivElement>(null);

    const handleKebabToggle = () => {
        setIsKebabOpen((prevValue) => !prevValue);
    };

    const handleKebabClose = (e) => {
        if (!menuRef.current?.contains(e.relatedTarget)) {
            setIsKebabOpen(false);
        }
    };

    const handleCommentModifyModalToggle = () => {
        setCommentModifyModalOpen((prevValue) => !prevValue);
    };
 
    const handleCommentDeleteModalToggle = () => {
        setCommentDeleteModalOpen((prevValue) => !prevValue);
    };

    const handleReplyModifyModalToggle = () => {
        setReplyModifyModalOpen((prevValue) => !prevValue);
    };
 
    const handleReplyDeleteModalToggle = () => {
        setReplyDeleteModalOpen((prevValue) => !prevValue);
    };

    const handleReplyCreateModalToggle = () => {
        setReplyCreateModalOpen((prevValue) => !prevValue);
    };

    // const handleReplyModalClose = (e) => {
    //     if (!replyRef.current?.contains(e.relatedTarget)) {
    //         setReplyModalOpen(false);
    //     }
    // }

    const Menu = () => (
        <S.Menu ref={{menuRef}}>
            { stage===0 && 
                <S.KebabMenu>
                    <S.KebabList onMouseDown={() => (handleReplyCreateModalToggle(), setIsKebabOpen(false))}>
                        답글 작성하기
                    </S.KebabList>
                    <S.KebabList onMouseDown={() => (handleCommentModifyModalToggle(), setIsKebabOpen(false))}>
                        댓글 수정하기
                    </S.KebabList>
                    <S.KebabList onClick={() => (handleCommentDeleteModalToggle(), setIsKebabOpen(false))}>
                        댓글 삭제하기
                    </S.KebabList>
                </S.KebabMenu>
            }
            { stage===1 && 
                <S.KebabMenu>
                    <S.KebabList onMouseDown={() => (handleReplyModifyModalToggle(), setIsKebabOpen(false))}>
                        답글 수정하기
                    </S.KebabList>
                    <S.KebabList onClick={() => (handleReplyDeleteModalToggle(), setIsKebabOpen(false))}>
                        답글 삭제하기
                    </S.KebabList>
                </S.KebabMenu>
            }
        </S.Menu>
    );

    return ( <S.ReplyToggleContainer>
        <S.Comment key={comment.commentId} style={{marginLeft: addMarginLeft(stage)}}>
            <S.CommentHeader>
                <S.WriterProfile src={addImage(comment.writerProfile)}/>
                <S.WriterName>{comment.username}</S.WriterName>
                {/* {isKebabOpen? <Menu/>: <S.KebabButtonIcon src={ kebabIcon } onClick={handleKebabToggle} onBlur={handleKebabClose}></S.KebabButtonIcon>} */}
                <S.KebabButtonIcon src={ kebabIcon } onClick={handleKebabToggle} onBlur={handleKebabClose} tabIndex={0}></S.KebabButtonIcon>
                {isKebabOpen && <Menu/>}
            </S.CommentHeader>
            <S.CommentContent>{comment.content}</S.CommentContent>
            <S.CommentDate>{comment.createdAt}</S.CommentDate>
        </S.Comment>
        {/* 개선사항: 답글 입력창의 외부 누르면 지우기. */}
        {/* <S.ReplyToggle ref={{replyRef}} onBlur={handleReplyModalClose} > */}
        <S.InputToggle ref={{replyRef}} >
            { isCommentModifyModalOpen && (
                <CommentInput command={{flag: 1, id: comment.commentId}}></CommentInput>
            )}
            { isReplyCreateModalOpen && (
                <ReplyInput command={{flag: 0, id: comment.commentId}}></ReplyInput>
            )}
            { isReplyModifyModalOpen && (
                <ReplyInput command={{flag: 1, id: comment.replyId}}></ReplyInput>
            )}
        </S.InputToggle>
    </S.ReplyToggleContainer>);
}

export default Comment;