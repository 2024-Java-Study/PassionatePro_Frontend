import * as S from "./CreateBoardPage.style";
import { Header, PageLayout } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBoardPage = () => {
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
  const navigateToHomePage = () => {
    navigate("/");
  };

  // const handleSetTab = (e) => {
  //   if (e.keyCode === 9) {
  //     e.preventDefault();
  //     let val = e.target.value;
  //     let start = e.target.selectionStart;
  //     let end = e.target.selectionEnd;
  //     e.target.value = val.substring(0, start) + "\t" + val.substring(end);
  //     e.target.selectionStart = e.target.selectionEnd = start + 1;
  //     onChangeInfo(e);
  //     return false; //  prevent focus
  //   }
  // };

  // // 텍스트 줄바꿈 크기 조절 함수
  // const [textareaHeight, setTextareaHeight] = useState({
  //   row: 10,
  //   lineBreak: {},
  // });

  // const resizeTextarea = (e) => {
  //   const { scrollHeight, clientHeight, value } = e.target;

  //   // 줄바꿈이 일어날 때
  //   if (scrollHeight > clientHeight) {
  //     setTextareaHeight((prev) => ({
  //       row: prev.row > 10 ? prev.row + 1 : prev.row,
  //       lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
  //     }));
  //   }

  //   // 텍스트 지워서 줄바꿈 지점에 도달했을 때
  //   if (textareaHeight.lineBreak[value.length]) {
  //     setTextareaHeight((prev) => ({
  //       row: prev.row > 10 ? prev.row - 1 : prev.row,
  //       lineBreak: { ...prev.lineBreak, [value.length]: false },
  //     }));
  //   }
  // };

  // // 엔터 키 처리 함수
  // const onKeyEnter = (e) => {
  //   if (e.code === "Enter") {
  //     setTextareaHeight((prev) => ({
  //       row: prev.row > 10 ? prev.row + 1 : prev.row,
  //       lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
  //     }));
  //   }
  // };

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
        <S.InputContent
          name="content"
          onChange={onChangeInfo}
          // onKeyDown={(e) => handleSetTab(e)}
          // onInput={onInput}
          // onKeyDown={onKeyEnter}
          // row={textareaHeight.row}
          value={boardInfo.content}
          placeholder="내용을 입력하세요 ..."
          rows={10}
        />
        <br />
        <br />
        <S.CompleteButton onClick={navigateToHomePage}>작성</S.CompleteButton>
      </S.CreateBoardContent>
    </S.CreateBoardPage>
  );
};

export default CreateBoardPage;
