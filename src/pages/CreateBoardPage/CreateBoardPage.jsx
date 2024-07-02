import * as S from "./CreateBoardPage.style";
import { Header, PageLayout } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import { setCookie, getCookie } from "../../cookie";

const CreateBoardPage = () => {
  const createBoardAPI = (title, content) => {
    const API = process.env.REACT_APP_API_URL + "/boards";

    axios.post(
      API,
      {
        title: title,
        content: content,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          withCredentials: true,
          RefreshToken: `Bearer ${getCookie("id")}`,
        },
      }
    );
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
  const handleCreateBoardPage = (e) => {
    e.preventDefault();
    createBoardAPI(boardInfo.title, boardInfo.content);
    navigate("/");
  };

  return (
    <S.CreateBoardPage>
      <PageLayout header={<Header />}></PageLayout>
      <S.Line></S.Line>
      <S.CreateBoardContent>
        <S.InputTitle
          name="title"
          onChange={onChangeInfo}
          value={boardInfo.title}
          placeholder="제목을 입력하세요 ..."
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
          placeholder="내용을 입력하세요 ..."
          minRows={10}
        />
        <br />
        <br />
        <S.CompleteButton onClick={handleCreateBoardPage}>
          작성
        </S.CompleteButton>
      </S.CreateBoardContent>
    </S.CreateBoardPage>
  );
};

export default CreateBoardPage;
