import styled from "@emotion/styled";
import searchIcon from "../../assets/images/glass_icon.png";

export const HomePage = styled.div``;

export const Line = styled.div`
  border: 1px solid black;
  width: 100%;
`;

export const Content = styled.div``;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5%;
  padding-bottom: 2%;
`;

export const CountBoardList = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
`;

export const SearchSection = styled.div``;

export const SearchSectionContent = styled.div``;
export const InputSection = styled.input`
  outline: none;
  font-size: 20px;
  padding-bottom: 10px;
  border: none;
`;
export const SearchIcon = styled.button`
  background-image: url(${searchIcon});
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const SearchLine = styled.div`
  border: 1px solid black;
  width: 100%;
`;

export const BoardList = styled.div`
  margin: 0 10% 0 10%;
`;
