import styled from "@emotion/styled";

export const ReplyToggleContainer = styled.div``;

export const InputToggle = styled.div``;

export const Comment = styled.div`
    border: 1px solid #ced4da;
    padding: 20px 0 20px 20px;
    background-color: white;
    margin: 5px 5px 0 0;
    // 답글은 좌측 margin(4번째 값)으로 조절
`;

export const CommentHeader = styled.div`
    display: flex;
    margin: 0 5px 10px 5px;
`;

export const WriterInfo = styled.div`
    flex: none;
    display: flex;
`;

export const WriterProfile = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;
export const WriterName = styled.div`
    margin-left: 10px;
`;

export const KebabButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 10px;
`;

export const KebabButtonIcon = styled.img`
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-left: auto;
`;

export const Menu = styled.div`
    margin-left: auto;
    margin-right: 10px;
    height: 15px;
`;

export const KebabMenu = styled.ul`
    list-style: none;
`;

export const KebabList = styled.li`
    border: 1px solid gray;
    background-color: white;
    font-size: small;
    padding: 5px;
    cursor: pointer;
`;

export const CommentContent = styled.div`
    margin: 5px;
`;
export const CommentDate = styled.div`
    color: gray;
    margin: 5px;
`;