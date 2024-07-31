import * as S from "./Board.style";
import { useNavigate } from "react-router-dom";

const Board = ({ board }) => {
  const navigate = useNavigate();
  
  localStorage.removeItem("postId");

  const moveToPostPage = () => {
    localStorage.setItem("postId", board.id);
    navigate("/boards");
  };

  return (
    <S.Board key={board.id} onClick={moveToPostPage}>
      <S.Title> {board.title}</S.Title>
      <S.Content>{board.content}</S.Content>
      <S.Detail>
        <S.Username>{board.username}</S.Username>         
        <S.Date>
          {"· "}
          {board.createdAt}
        </S.Date>
      </S.Detail>
    </S.Board>
  );
};

export default Board;
