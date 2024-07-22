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

const urlList = [
    "https://passionate-pro-bucket.s3.ap-northeast-2.amazonaws.com/test/445f45fe-6ed1-436a-beea-5ad5e3fe986f.png",
    "https://passionate-pro-bucket.s3.ap-northeast-2.amazonaws.com/test/f3b9911c-9e39-40f0-af7b-7343b7e9a5a1.png",
    "https://passionate-pro-bucket.s3.ap-northeast-2.amazonaws.com/test/979c6e01-b102-49ec-bdaf-85b43d0dd9ac.png"
];

const PostContainer = ({post}) => {
    return (<S.PostContainer>
        <S.PostContent>{post.content}</S.PostContent>
        <S.PostImages>
            {post.urlList.map((url) => (
                <S.PostImage src={url}></S.PostImage>
            ))}
        </S.PostImages>
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
