import styled from "@emotion/styled";

export const UpdateBoardPage = styled.div``;

export const Line = styled.div`
  border: 1px solid black;
  width: 100%;
`;

export const UpdateBoardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const InputTitle = styled.input`
  font-size: 30px;
  font-weight: bold;
  width: 70%;
  padding: 15px;
  border: 1px solid #d9d9d9;
`;

export const InputContent = styled.textarea`
  width: 70%;
  padding: 15px;
  border: 1px solid #d9d9d9;

  resize: none;
`;

export const CompleteButton = styled.button`
  width: 70%;
  padding: 10px;
  background-color: #7e7e7e;
  color: white;
  border: none;
  cursor: pointer;
`;
