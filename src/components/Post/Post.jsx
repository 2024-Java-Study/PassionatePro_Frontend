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
};

const PostImages = ({images}) => {
    this.images.map(image => {
        return <S.PostImage src={image.url}/>
    });
};

const PostContainer = ({post}) => {
    return (
        <S.PostContainer>
            <S.PostContent>{post.content}</S.PostContent>
            {/* <PostImages/> */}
        </S.PostContainer>
    );
};

const Post = ({post}) => {
   return (
        <S.Post>
            <PostHeader postInfo={{title: post.title, username: post.username, date: post.date}}/>
            <PostContainer post={{content: post.content}} />
        </S.Post>
    );
};

export default Post
