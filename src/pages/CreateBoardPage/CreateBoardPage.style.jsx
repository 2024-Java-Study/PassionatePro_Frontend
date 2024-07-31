import styled from "@emotion/styled";

export const CreateBoardPage = styled.div``;

export const Line = styled.div`
  border: 1px solid black;
  width: 100%;
`;

export const CreateBoardContent = styled.div`
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

export const CompleteButton = styled.button`
  width: 70%;
  padding: 10px;
  background-color: #7e7e7e;
  color: white;
  border: none;
  cursor: pointer;
`;



export const UploadFile = styled.input`
display: none;
`;

export const StyledFileInput = styled.div`
  margin-top: 10px;
`;

export const AttachmentButton = styled.div`
  padding: 6px;
  background-color: lightGray;
  color: #7e7e7e;
  font-weight: bold;
  cursor: pointer;
  font-size: 13px;
`;

export const AttachedFile = styled.p`
  font-size: 9x;
  font-weight: bold;
  color: #999;
`;