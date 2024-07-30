import defaultProfile from '../../assets/images/default_profile.png';
import kebabIcon from '../../assets/images/menu_kebab.png';
import * as S from "./Comment.style";
import React, { useState, useRef } from "react";

const addImage = url => {
    return url == null? defaultProfile : url;
}

const addMarginLeft = stage => {
    if (stage==0) return 0;
    else if (stage==1) return 50;
}

const Comment = ({ comment, stage }) => {
    const [isKebabOpen, setIsKebabOpen] = useState(false);
    const [isCommentModifyModalOpen, setCommentModifyModalOpen] = useState(false);
    const [isCommentDeleteModalOpen, setCommentDeleteModalOpen] = useState(false);
    const [isReplyModalOpen, setReplyModalOpen] = useState(false);

    const username = localStorage.getItem("username");
    const menuRef = useRef<HTMLDivElement>(null);

    const handleKebabToggle = () => {
        setIsKebabOpen((prevValue) => !prevValue);
    };

    const handleKebabClose = (e) => {
        if (!menuRef.current?.contains(e.relatedTarget)) {
            setIsKebabOpen(false);
        }
    };

    const handleModifyModalToggle = () => {
        setCommentModifyModalOpen((prevValue) => !prevValue);
    };
 
    const handleDeleteModalToggle = () => {
        setCommentDeleteModalOpen((prevValue) => !prevValue);
    };

    const handleReplyModalToggle = () => {
        setReplyModalOpen((prevValue) => !prevValue);
    };

    const Menu = () => (
        <S.Menu ref={{menuRef}}>
            <S.KebabMenu>
                <S.KebabList onClick={() => (handleReplyModalToggle(), setIsKebabOpen(false))}>
                    답글 작성하기
                </S.KebabList>
                <S.KebabList onClick={() => (handleModifyModalToggle(), setIsKebabOpen(false))}>
                    수정하기
                </S.KebabList>
                <S.KebabList onClick={() => (handleDeleteModalToggle(), setIsKebabOpen(false))}>
                    삭제하기
                </S.KebabList>
            </S.KebabMenu>
        </S.Menu>
    );

    return (
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
    );
}

export default Comment;