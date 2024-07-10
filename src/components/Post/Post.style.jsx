import styled from "@emotion/styled";

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
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 40px 0 40px 0;
`;
export const PostImage = styled.img`
    flex: 1;
    margin: 0 10px 0 10px;
    width: 30%;
    height: 30%;
`;