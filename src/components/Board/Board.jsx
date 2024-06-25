import * as S from "./Board.style";
import { Link } from 'react-router-dom';

const Board = ({board}) => {
  return (
    <Link to="/boards" state={{ board }} style={{textDecoration: "none"}}>
      <S.Board key={board.id}>
        <S.Title> {board.title}</S.Title>
        <S.Content>{board.content}</S.Content>
        <S.Detail>
          <S.Username>{board.username}</S.Username>
          <S.Date>
            {"· "}
            {board.date}
          </S.Date>
        </S.Detail>
      </S.Board>
    </Link>
  );
};

export default Board;
