import styled from "@emotion/styled";
import updateIcon from "../../assets/images/update_icon.png";
import deleteIcon from "../../assets/images/delete_icon.png";


export const Post = styled.div`
    margin: 40px 10% 40px 10%;
    border: 2px solid #ced4da;
    width: 600px; // S.Comments와 동일하게
`;


export const PostHeader = styled.div`
    margin: 0 0 15px 15px; 
    padding: 0 20px 0 20px;
`;
export const PostTitle = styled.h1`
`;

export const PostInfo = styled.div`
  display: flex;
`;
export const PostWriterInfo = styled.span`
    margin: 0 5px 0 0;
    font-size: 15px;
    color: black;
`;
export const PostDate = styled.div`
    color: gray;
`;


export const PostContainer = styled.div`
    margin: 70px 15px 15px 15px; 
    padding: 0 20px 20px 20px;
`;
export const PostContent = styled.div`
    font-size: 18px;
    color: black;
`;
export const PostImages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    overflow: auto;
    width: auto;
    height: 10em;
    margin: 40px 0 40px 0;
`;
export const PostImage = styled.img`
    margin: 0 10px 0 10px;
    width: auto;
    height: 10em;
`;

export const UpdateButton = styled.button`

  margin-top: 20px;
  margin-right: 10px;

  background-image: url(${updateIcon});
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const DeleteButton = styled.button`

  margin-top: 20px;

  background-image: url(${deleteIcon});
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: white;
  cursor: pointer;
`;


export const TitileAndButton = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Buttons = styled.div`
    display: flex;
`;