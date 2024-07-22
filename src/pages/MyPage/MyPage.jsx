import * as S from "./MyPage.style";
import { Header, PageLayout } from "../../components";


const MyPage = () => {
    return (
        <S.MyPage>
            <PageLayout header={<Header />}></PageLayout>
            <S.HeaderLine></S.HeaderLine>
        </S.MyPage>
    );
};

export default MyPage;