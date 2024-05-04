import * as S from "./UpdateBoardPage.style";
import { Header, PageLayout } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dummy from "../../components/Board/dummy.json";

const UpdateBoardPage = () => {
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
  const navigateToDetailBoardPage = () => {
    navigate("/board/{boardId}");
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
          placeholder="제목을 입력하세요 ..."
        />
        <br />
        <S.InputContent
          name="content"
          content={dummy.boardList.length}
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
        <S.CompleteButton onClick={navigateToDetailBoardPage}>
          작성
        </S.CompleteButton>
      </S.UpdateBoardContent>
    </S.UpdateBoardPage>
  );
};

export default UpdateBoardPage;
