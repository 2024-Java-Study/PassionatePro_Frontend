import * as S from "./CreateBoardPage.style";
import { Header, PageLayout } from "../../components";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";

const CreateBoardPage = () => {

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
  });

  const [file, setFile] = useState(null);

  const onChangeInfo = (e) => {
    setBoardInfo({
      ...boardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeFile = (e) => {
    setFile(e.target.files);
  };

  const navigate = useNavigate();
  const handleCreateBoardPage = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", boardInfo.title);
    formData.append("content", boardInfo.content);
    formData.append("images", file[0]);

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
        <label for="file">
        <S.StyledFileInput>
          <S.AttachmentButton>Upload File</S.AttachmentButton>
        </S.StyledFileInput>
        </label>
        <S.UploadFile
          name="file"
          type="file"
          accept="image/*"
          onChange={onChangeFile}
          id="file"
          ref={inputEl}
        />

{fileName?
        <S.AttachedFile className="file-name">{fileName}</S.AttachedFile> : ""}
        
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
