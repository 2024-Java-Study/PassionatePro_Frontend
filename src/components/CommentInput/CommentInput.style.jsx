import styled from "@emotion/styled";
import triangle from "../../assets/images/triangle.png";

export const CommentInput = styled.div`
    display: flex;
    margin: 5px;
    padding: 5px 0 5px 0;
    border: 1px solid #ced4da;
    background-color: #ced4da;
`;
export const Text = styled.div`
    margin: 0 20px 0 20px;
    padding: 10px 10px 10px 10px;
    font-weight: bold;
    width: 30px;
`;
export const InputBox = styled.input`
    margin: 5px 0 5px 0;
    border: none;
    flex-grow: 1;
`;
export const Button = styled.button`
    background-image: url(${triangle});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    background-color: #ced4da;
    margin: 5px 20px 5px 30px;
    width: 25px;
`;