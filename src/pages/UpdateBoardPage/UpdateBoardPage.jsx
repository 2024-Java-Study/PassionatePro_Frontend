import * as S from "./UpdateBoardPage.style";
import { Header, PageLayout } from "../../components";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import axios from "../../customAxios"


const UpdateBoardPage = () => {
  
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

  // const [result, setResult] = useEffect();


  const UpdateBoardAPI = (formData) => {

    // useEffect(() => {
    //   setIsEditing({
    //     title: result.response.title,
    //     content: result.response.content,
    //     urlList: result.response.urlList,
    //   })
    // }, [result]);

    const postId = localStorage.getItem("postId");
    const API = process.env.REACT_APP_API_URL + `/boards/${postId}`;

    axios
      .get(API, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result);
        console.log("게시물 수정 데이터 불러오기");
        // setResult(result);
      })
      .catch((error) => {
        console.log(error);
        console.log("게시물 수정 데이터 불러오기 실패");
      })

    // axios
    //   .put(API, formData, {
    //     withCredentials: true,
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((result) => {
    //     console.log(result);
    //     console.log("게시물 수정 성공");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log("게시물 수정 실패");
    //   });
  };

  const [boardInfo, setBoardInfo] = useState({
    title: "",
    content: "",
  });

  // const [isEditing, setIsEditing] = useEffect({
  //   title: "",
  //   content: "",
  //   urlList: "",
  // });

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

    if (file) {
      formData.append("images", file[0]);
    }
    UpdateBoardAPI(formData);
    navigate("/");
  };

  // const handleBlur = (field) => {
  //   setIsEditing((prev) => ({
  //     ...prev,
  //     [field]: false,
  //   }));
  // };

  // const handleFocus = (field) => {
  //   setIsEditing((prev) => ({
  //     ...prev,
  //     [field]: true,
  //   }));
  // };

  return (
    <S.UpdateBoardPage>
      <PageLayout header={<Header />}></PageLayout>
      <S.Line></S.Line>
      <S.UpdateBoardContent>
        {/* <S.InputTitle
          name="title"
          onChange={onChangeInfo}
          value={isEditing.title ? isEditing.title : ''}
          placeholder={isEditing.title ? '' : isEditing.title}
          onBlur={() => handleBlur(isEditing.title)}
          onFocus={() => handleFocus(isEditing.title)}
          autoFocus={isEditing.title}
        /> */}
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
        {fileName? <S.AttachedFile className="file-name">{fileName}</S.AttachedFile> : ""}
        <br />
        <br />
        <S.CompleteButton onClick={UpdateBoardAPI}>
          수정
        </S.CompleteButton>
      </S.UpdateBoardContent>
    </S.UpdateBoardPage>
  );
};

export default UpdateBoardPage;
