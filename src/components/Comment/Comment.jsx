import defaultProfile from '../../assets/PP_Default_Profile1.png';
import * as S from "./Comment.style";

const addImage = url => {
    return url == null? defaultProfile : url;
}

// const addMargin = stage => {
//     if (stage==1) return 0;
//     else if (stage==2) return 10;
// }

const Comment = ( comment, stage ) => {
    return (
        <div className='Comment-box'>
            <S.WriterInfo>
                <S.WriterProfile
                    src={addImage(comment.writerProfile)}
                />
                <div className='Writer-name'>
                    {comment.writerName}
                </div>
            </S.WriterInfo>
            <div>{comment.content}</div>
            <div>{comment.date}</div>
        </div>
    );
}

export default function Comments() {
    return (
        <Comment
            comment = {{
                writerProfile: null,
                writerName: "댓글 쓴 사람", 
                content: "댓글 내용",
                date: "2023-4-1 17:31:28"
            }}
        />
    );
}