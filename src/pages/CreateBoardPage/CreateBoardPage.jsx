import * as S from "./CreateBoardPage.style";
import { Header, PageLayout } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";

const CreateBoardPage = () => {
  const createBoardAPI = (formData) => {
    const API = process.env.REACT_APP_API_URL + "/boards";

    axios
      .post(API, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        console.log("게시물 생성 성공");
      })
      .catch((error) => {
        console.log(error);
        console.log("게시물 생성 실패");
      });
  };

  const [boardInfo, setBoardInfo] = useState({
    title: "",
    content: "",
    file: "",
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
    console.log(e);

    const formData = new FormData();

    // const signup = {
    //   title,
    //   content,
    // };
    // signup.title = boardInfo.title;
    // signup.content = boardInfo.content;

    // formData.append(
    //   "signup",
    //   new Blob([JSON.stringify(signup)], { type: "application/json" })
    // );

    // let jsonData = JSON.stringify({
    //   title: boardInfo.title,
    //   content: boardInfo.content,
    // });
    // formData.append("jsonData", jsonData);
    formData.append("title", JSON.stringify(boardInfo.title));
    formData.append("content", JSON.stringify(boardInfo.content));
    formData.append("images", boardInfo.file);

    createBoardAPI(formData);
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
        <S.UploadFile
          name="file"
          type="file"
          accept="image/*"
          onClick={onChangeInfo}
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
