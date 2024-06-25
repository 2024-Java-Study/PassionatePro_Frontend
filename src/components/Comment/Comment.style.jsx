import styled from "@emotion/styled";

export const Comment = styled.div`
    border: 1px solid #ced4da;
    padding: 20px 0 20px 20px;
    background-color: white;
    margin: 5px 5px 0 0;
    // 답글은 좌측 margin(4번째 값)으로 조절
`;

export const CommentHeader = styled.div`
    display: flex;
    margin: 5px 5px 8px 5px;
`;
export const WriterProfile = styled.img`
    width: 30px;
    height: 30px;
`;
export const WriterName = styled.div`
`;

export const CommentContent = styled.div`
    margin: 5px;
`;
export const CommentDate = styled.div`
    color: gray;
    margin: 5px;
`;