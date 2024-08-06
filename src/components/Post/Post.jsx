import DeletePost from "../DeletePost/DeletePost";
import * as S from "./Post.style";

const DeletePostButton = ( id ) => {
    console.log("키 값");
    console.log(id);
    // DeletePost(id);
}

const PostHeader = ({id, postInfo}) => {
    return (
        <S.PostHeader>
            <S.TitileAndButton>
                <S.PostTitle>{postInfo.title}</S.PostTitle>
                <S.Buttons>
                    <S.UpdateButton />
                    <S.DeleteButton onClick={DeletePostButton(id)}/>
                </S.Buttons>
            </S.TitileAndButton>
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

const Post = ({id, post}) => {
   return (
        <S.Post>
            <PostHeader id={id} postInfo={{ title: post.title, username: post.username, date: post.createdAt}} />
            <PostContainer post={{content: post.content, urlList: post.urlList}} />
        </S.Post>
    );
};

export default Post;
