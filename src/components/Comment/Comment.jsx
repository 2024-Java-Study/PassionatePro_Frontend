import defaultProfile from '../../assets/images/default_profile.png';
import * as S from "./Comment.style";

const addImage = url => {
    return url == null? defaultProfile : url;
}

const addMarginLeft = stage => {
    if (stage==0) return 0;
    else if (stage==1) return 50;
}

const Comment = ({ comment, stage }) => {
    return (
        <S.Comment key={comment.commentId} style={{marginLeft: addMarginLeft(stage)}}>
            <S.CommentHeader>
                <S.WriterProfile src={addImage(comment.writerProfile)}/>
                <S.WriterName>{comment.username}</S.WriterName>
            </S.CommentHeader>
            <S.CommentContent>{comment.content}</S.CommentContent>
            <S.CommentDate>{comment.createdAt}</S.CommentDate>
        </S.Comment>
    );
}

export default Comment;