import styled from "@emotion/styled";
import profileImage from "../../assets/images/default_profile.png"

export const MyPage = styled.div`
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 20px 20px 20px;
`;

export const HeaderLine = styled.div`
  border: 1px solid black;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Tr = styled.tr`
  border: 1px solid gray;
`;

export const Td = styled.td`
  border: 1px solid gray;
  background-color: lightGray;
  padding: 15px;
`;

export const Tbody = styled.tbody`
  padding-top: 40px;
`;

export const TdVal = styled.td`
  padding: 15px;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

export const Button = styled.button`
  margin: 5px;
`;

export const ProfileImage = styled.div`

  // background-image: url(${profileImage});
  width: 70px;
  height: 70px;
  background-size: cover;
  background-image: no-repeat;
`;
