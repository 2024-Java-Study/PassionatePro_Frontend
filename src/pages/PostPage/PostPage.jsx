import * as S from "./PostPage.style";
import { Header, PageLayout, Post, Comment, CommentInput } from "../../components";
import dummy from "../../components/Comment/dummy.json";
import { useLocation } from "react-router-dom";

const PostPage = () => {
    const location = useLocation();
    const post = location.state?.board;
    return (
        <S.PostPage>
            <PageLayout header={<Header />}></PageLayout>
            <S.HeaderLine></S.HeaderLine>
            <S.PageBox>
                <Post post={ post }></Post>
                <S.Line></S.Line>
                <S.CommentBox>
                <S.Comments>
                    {dummy.comments.map((comment) => (
                        <Comment comment={comment}></Comment>
                    ))}
                </S.Comments>
                <CommentInput></CommentInput>
                </S.CommentBox>
            </S.PageBox>
        </S.PostPage>
    );
};

export default PostPage;