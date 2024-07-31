import * as S from "./MyPage.style";
import { Header, PageLayout, ProfileImage } from "../../components";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import profileImageAssets from "../../assets/images/default_profile.png";

const MyPage = () => {

    const isDisableAPI = useRef(false);

    const [result, setResult] = useState();
    const [profile, setProfile] = useState(profileImageAssets);

    const inputEl = useRef(null);
    const [fileName, setFileName] = useState("");
    const fileInputHandler = useCallback((event) => {
        const files = event.target && event.target.files;
        if (files && files[0]) {
        setFileName(event.target.files[0].name);
        }
    }, []);

    useEffect(() => {
        if (inputEl.current !== null) {
          inputEl.current.addEventListener("input", fileInputHandler);
        }
        return () => {
          inputEl.current && inputEl.current.removeEventListener("input", fileInputHandler);
        };
      }, [inputEl, fileInputHandler]);

      const [file, setFile] = useState(null);

      const onChangeFile = (e) => {
        setFile(e.target.files);
      };

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

    const handleProfileImage = (e) => {
        e.preventDefault();

        if (!file) return;
        ProfileImage(file[0]);
      };

    useEffect(() => {
        getMyProfile();
    }, [])

    useEffect(() => {
        if (result && result.data.response.profile != null) {
            setProfile(result.data.response.profile);
            isDisableAPI.current = true;
        }
        }, [result])

    return (
        // username, nickname, profile, email
        <S.MyPage>
            <PageLayout header={<Header />}></PageLayout>
            <S.HeaderLine></S.HeaderLine>
            <S.Content>
                <S.ProfileImage style={{ backgroundImage: `url(${result? profile : null})`}}></S.ProfileImage>
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
                    <label for="file">
                        <S.StyledFileInput>
                            <S.AttachmentButton>수정하기</S.AttachmentButton>
                        </S.StyledFileInput>
                    </label>
                    <S.ProfileButton 
                        name="file"
                        type="file"
                        accept="image/*"
                        id = "file"
                        ref={inputEl}
                        onChange={onChangeFile}
                    /> {fileName?
                        <S.AttachedFile className="file-name">{fileName}</S.AttachedFile> : ""}                
                    <S.Button>탈퇴하기</S.Button>
                    <S.Button onClick={handleProfileImage}>완료</S.Button>
                </S.ButtonSection>
            </S.Content>
        </S.MyPage>
    );
};

export default MyPage;