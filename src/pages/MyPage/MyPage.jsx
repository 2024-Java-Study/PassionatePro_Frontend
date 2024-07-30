import * as S from "./MyPage.style";
import { Header, PageLayout } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";

const MyPage = () => {

    const [result, setResult] = useState();
    const getMyProfile = async () => {
        const API = process.env.REACT_APP_API_URL + "/members/profiles";

        await axios
        .get(API, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((result) => {
            console.log(result);
            setResult(result);
        })
        .catch((error) => {
            console.log(error);
            console.log("사용자의 정보를 불러오는 데 실패하였습니다.")
        })
    }

    useEffect(() => {
        getMyProfile();
    }, [])

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
                            <S.TdVal>{result ? result.data.response.username : ""}</S.TdVal>
                        </S.Tr>
                        <S.Tr>
                            <S.Td>nickname</S.Td>
                            <S.TdVal>{result ? result.data.response.nickname : ""}</S.TdVal>
                        </S.Tr>
                        <S.Tr>
                            <S.Td>email</S.Td>
                            <S.TdVal>{result ? result.data.response.email : ""}</S.TdVal>
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