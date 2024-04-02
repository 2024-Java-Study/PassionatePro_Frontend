import { useState } from "react";
import { Board, Header, PageLayout } from "../../components";
import dummy from "../../components/Board/dummy.json";
import * as S from "./HomePage.style";

const HomePage = () => {
  const [searchInfo, setSearchInfo] = useState("");
  const onChangeSearchInfo = (e) => {
    setSearchInfo(e.target.value);
  };

  return (
    <S.HomePage>
      <PageLayout header={<Header />}></PageLayout>
      <S.Line></S.Line>
      <S.Content>
        <S.ContentHeader>
          <S.CountBoardList>전체 글 {dummy.boardList.length}</S.CountBoardList>
          <S.SearchSection>
            <S.SearchSectionContent>
              <S.InputSection
                name="search"
                onChange={onChangeSearchInfo}
                value={searchInfo}
                placeholder="search..."
              ></S.InputSection>
              <S.SearchIcon alt="search icon"></S.SearchIcon>
            </S.SearchSectionContent>
            <S.SearchLine></S.SearchLine>
          </S.SearchSection>
        </S.ContentHeader>
        <S.BoardList>
          {dummy.boardList.map((board) => (
            <Board key={board.id} board={board}></Board>
          ))}
        </S.BoardList>
      </S.Content>
    </S.HomePage>
  );
};

export default HomePage;
