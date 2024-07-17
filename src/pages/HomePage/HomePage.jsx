import { useState } from "react";
import { Board, Header, PageLayout } from "../../components";
import * as S from "./HomePage.style";
import axios from "axios";
import { useEffect } from "react";

const HomePage = () => {
  const findAllBoardAPI = async () => {
    const API = process.env.REACT_APP_API_URL + "/boards";

    await axios
      .get(API, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(result);
        setResult(result);
        console.log("성공");
      })
      .catch((error) => {
        console.log(error);
        console.log("실패");
      });
  };

  const [result, setResult] = useState();
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
          <S.CountBoardList>
            전체 글 {result ? result.data.response.total : 0}
          </S.CountBoardList>
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
          {result
            ? result.data.response.boards.map((board) => (
                <Board key={board.id} board={board}></Board>
              ))
            : []}
        </S.BoardList>
      </S.Content>
    </S.HomePage>
  );
};

export default HomePage;
