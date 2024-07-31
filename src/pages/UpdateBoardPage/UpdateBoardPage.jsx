import * as S from "./UpdateBoardPage.style";
import { Header, PageLayout } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";

const UpdateBoardPage = () => {
  const UpdateBoardAPI = (formData) => {
    const API = process.env.REACT_APP_API_URL + "/boards";

    axios
      .put(API, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        console.log("게시물 수정 성공");
      })
      .catch((error) => {
        console.log(error);
        console.log("게시물 수정 실패");
      });
  };

  const [boardInfo, setBoardInfo] = useState({
    title: "",
    content: "",
  });

  const onChangeInfo = (e) => {
    setBoardInfo({
      ...boardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const handleUpdateBoardPage = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", boardInfo.title);
    formData.append("content", boardInfo.content);

    UpdateBoardAPI(formData);
    navigate("/");
  };

  return (
    <S.UpdateBoardPage>
      <PageLayout header={<Header />}></PageLayout>
      <S.Line></S.Line>
      <S.UpdateBoardContent>
        <S.InputTitle
          name="title"
          onChange={onChangeInfo}
          value={boardInfo.title}
          placeholder="제목을 입력하세요 ..." // 기존 내용 불러오기
        />
        <br />
        <TextareaAutosize
          style={{
            resize: "none",
            width: "70%",
            padding: "15px",
            border: "1px solid #d9d9d9",
          }}
          name="content"
          onChange={onChangeInfo}
          value={boardInfo.content}
          placeholder="내용을 입력하세요 ..." // 기존 내용 불러오기
          minRows={10}
        />
        <br />
        <br />
        <S.CompleteButton onClick={handleUpdateBoardPage}>
          수정
        </S.CompleteButton>
      </S.UpdateBoardContent>
    </S.UpdateBoardPage>
  );
};

export default UpdateBoardPage;
