import * as S from "./Board.style";

const Board = ({ board }) => {
  return (
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
  );
};

export default Board;
