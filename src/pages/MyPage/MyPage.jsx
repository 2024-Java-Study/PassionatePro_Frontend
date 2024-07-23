import * as S from "./MyPage.style";
import { Header, PageLayout } from "../../components";


const MyPage = () => {
    return (
        // username, nickname, profile, email
        <S.MyPage>
            <PageLayout header={<Header />}></PageLayout>
            <S.HeaderLine></S.HeaderLine>
            <S.Content>
                <S.ProfileImage></S.ProfileImage>
                <S.Table>
                    <S.Tbody>
                        <S.Tr>
                            <S.Td>username</S.Td>
                            <S.TdVal>ajung7038</S.TdVal>
                        </S.Tr>
                        <S.Tr>
                            <S.Td>nickname</S.Td>
                            <S.TdVal>아정</S.TdVal>
                        </S.Tr>
                        <S.Tr>
                            <S.Td>email</S.Td>
                            <S.TdVal>ajung7038@naver.com</S.TdVal>
                        </S.Tr>
                    </S.Tbody>
                </S.Table>
                <S.ButtonSection>
                    <S.Button>프로필 수정</S.Button>
                    <S.Button>탈퇴하기</S.Button>
                </S.ButtonSection>
            </S.Content>
        </S.MyPage>
    );
};

export default MyPage;