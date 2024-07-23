import * as S from "./Post.style";

const PostHeader = ({postInfo}) => {
    return (
        <S.PostHeader>
            <S.PostTitle>{postInfo.title}</S.PostTitle>
            <S.PostInfo>
            <S.PostWriterInfo>{postInfo.username}</S.PostWriterInfo>
            <S.PostDate>
                {"· "}
                {postInfo.date}
            </S.PostDate>
            </S.PostInfo>
        </S.PostHeader>
    );
    // Todo: title 옆에 수정 삭제 버튼
};

const PostContainer = ({post}) => {
    const containFiles = post.urlList.length > 0;
    return (<S.PostContainer>
        <S.PostContent>{post.content}</S.PostContent>
        { containFiles && 
        <S.PostImages>
            {post.urlList.map((url) => (
                <S.PostImage src={url}></S.PostImage>
             ))}
        </S.PostImages> 
        }
    </S.PostContainer>);
};

const Post = ({post}) => {
   return (
        <S.Post>
            <PostHeader postInfo={{title: post.title, username: post.username, date: post.createdAt}}/>
            <PostContainer post={{content: post.content, urlList: post.urlList}} />
        </S.Post>
    );
};

export default Post;
