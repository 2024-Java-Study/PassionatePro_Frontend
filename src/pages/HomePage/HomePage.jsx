import { useState } from "react";
import { Board, Header, PageLayout } from "../../components";
import dummy from "../../components/Board/dummy.json";
import * as S from "./HomePage.style";
import axios from "axios";
import { useEffect } from "react";

const findAllBoardAPI = async () => {
  const API = process.env.REACT_APP_API_URL + "/boards";
  // try {
  //   const result = await axios.get(API);
  //   console.log(result);
  //   window.alert("전체 게시물 조회");
  //   // setCookie("id", result.data.token); // 쿠키에 토큰 저장
  //   return result;
  // } catch (error) {
  //   window.alert("전체 게시물 조회 실패");
  //   console.log(error);
  // }
};

const HomePage = () => {
  const result = "";
  const [searchInfo, setSearchInfo] = useState("");
  const onChangeSearchInfo = (e) => {
    setSearchInfo(e.target.value);
  };

  useEffect(() => {
    findAllBoardAPI();
  }, []);

  return (
    <S.HomePage>
      <PageLayout header={<Header />}></PageLayout>
      <S.Line></S.Line>
      <S.Content>
        <S.ContentHeader>
          <S.CountBoardList>전체 글 {dummy.boardList.length}</S.CountBoardList>
          {/* <S.CountBoardList>전체 글 {result.response.total}</S.CountBoardList> */}
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
          {/* {result.response.boards.map((board) => (
            <Board key={board.id} board={board}></Board>
          ))} */}
        </S.BoardList>
      </S.Content>
    </S.HomePage>
  );
};

export default HomePage;
