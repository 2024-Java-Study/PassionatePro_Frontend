import * as S from "./PostPage.style";
import { Header, PageLayout, Post } from "../../components";
import { useLocation } from "react-router-dom";

const PostPage = () => {
    const location = useLocation();
    const post = location.state?.board;
    return (
        <S.PostPage>
           <PageLayout header={<Header />}></PageLayout>
            <S.Line></S.Line>
            <Post post={ post }></Post>
        </S.PostPage>
    );
};

export default PostPage