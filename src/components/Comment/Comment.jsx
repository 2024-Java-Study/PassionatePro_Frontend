import defaultProfile from '../../assets/images/default_profile.png';
import * as S from "./Comment.style";

const addImage = url => {
    return url == null? defaultProfile : url;
}

// const addMargin = stage => {
//     if (stage==1) return 0;
//     else if (stage==2) return 10;
// }

const Comment = ({ comment }) => {
    return (
        <S.Comment key={comment.commentId}>
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