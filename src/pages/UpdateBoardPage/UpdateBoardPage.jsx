import * as S from "./UpdateBoardPage.style";
import { Header, PageLayout } from "../../components";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import axios from "../../customAxios"
import UpdatePost from "../../components/UpdatePost/UpdatePost";


const DeleteImage = (url, urlList, setBoardInfo) => {
  const newUrlList = urlList.filter((item) => item !== url);
  setBoardInfo((prevBoardInfo) => ({
    ...prevBoardInfo,
    urlList: newUrlList,
  }));
  console.log(url);
}


const PostContainer = ({urlList, file, setBoardInfo}) => {
  const containFiles = urlList.length > 0;
  return (<S.PostContainer>
      { containFiles && 
      <S.PostImages>
          {urlList.map((url) => (
            <S.PostImageWithIcon>
              <S.PostImage src={url}></S.PostImage>
              <S.DeleteImageButton onClick={() => DeleteImage(url, urlList, setBoardInfo)}/>
            </S.PostImageWithIcon>
           ))}
           {file && (
            <S.PostImageWithIcon>
              <S.PostImage src={file} alt="preview" />
              <S.DeleteImageButton onClick={() => DeleteImage(urlList, setBoardInfo)}/>
            </S.PostImageWithIcon>
          )}
      </S.PostImages>
      }
  </S.PostContainer>);
};

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

  const [file, setFile] = useState([]);

  // const onChangeFile = (e) => {
  //   const selectedFiles = e.target.files; // 선택된 파일들의 FileList 객체
  
  //   for (const selectedFile of selectedFiles) { // `for...of` 루프를 사용하여 파일을 순회
  //     if (selectedFile) { // 파일이 유효한지 확인
  //       const reader = new FileReader(); // FileReader 객체 생성
  //       reader.readAsDataURL(selectedFile); // 파일을 Data URL로 읽기 시작
  
  //       reader.onloadend = () => {
  //         setFile((prevFiles) => [...prevFiles, reader.result]); // 이전 파일 목록에 새로운 파일 추가
  //       };
  //     }
  //   }
  // };

  const onChangeFile = (e) => {
    const selectedFile = e.target.files[0];
  
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);

      reader.onloadend = () => {
        setFile(reader.result);
      };
    }
  };
  

  useEffect(() => {
    GetBoardInfo();
  }, []);

  const GetBoardInfo = () => {
    const postId = localStorage.getItem("postId");
    const API = process.env.REACT_APP_API_URL + `/boards/${postId}`;
    axios
      .get(API, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result);
        console.log("게시물 수정 데이터 불러오기");
        setBoardInfo({
          title: result.data.response.title,
          content: result.data.response.content,
          urlList: result.data.response.urlList,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("게시물 수정 데이터 불러오기 실패");
      });
  }

  const [boardInfo, setBoardInfo] = useState({
    title: "",
    content: "",
    urlList: [],
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

    if (file) {
      formData.append("images", file[0]);
    }
    formData.append("imageUrls", boardInfo.urlList);
    console.log(formData.get("images"));
    UpdatePost(formData);
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
          placeholder="내용을 입력하세요 ..."
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

        <S.FileView>
          <PostContainer urlList={boardInfo.urlList} file={file} setBoardInfo={setBoardInfo} />
        </S.FileView>

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
        <S.CompleteButton onClick={handleUpdateBoardPage}>
          수정
        </S.CompleteButton>
      </S.UpdateBoardContent>
    </S.UpdateBoardPage>
  );
};

export default UpdateBoardPage;
