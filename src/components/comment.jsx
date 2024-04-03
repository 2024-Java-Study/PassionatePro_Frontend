import defaultProfile from '../assets/PP_Default_Profile1.png';
import '../styles/comment.css';

const addImage = url => {
    return url == null? defaultProfile : url;
}

const addMargin = stage => {
    if (stage==1) return 0;
    else if (stage==2) return 10;
}

function Comment({ comment, stage }) {
    return (
        <div className='Comment-box'>
            <div className='Writer-info'>
                <img
                    className='Writer-profile'
                    src={addImage(comment.writerProfile)}
                />
                <div className='Writer-name'>
                    {comment.writerName}
                </div>
            </div>
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