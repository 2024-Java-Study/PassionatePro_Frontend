import * as S from "./PostPage.style";
import { Header, PageLayout, Post, Comment, CommentInput } from "../../components";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const PostPage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const location = useLocation();
    const post = location.state?.board;
    useEffect(() => {
        try {
            setData(null);
            setError(null);
            const PostReadAPI = async () => {
                const API = process.env.REACT_APP_API_URL + "/boards/" + post.id;
                const result = await axios.get(
                    API, 
                    { 
                        headers: { "Content-Type": "application/json"}, 
                        withCredentials: true
                    }
                );
                setData(result.data);
                // console.log(result.data.response);
            };
            PostReadAPI(post);
        } catch (e) {
            setError(e);
            console.log(error);
        }
    }, []);

    return (
        <S.PostPage>
            <PageLayout header={<Header />}></PageLayout>
            <S.HeaderLine></S.HeaderLine>
            {data  && 
            <S.PageBox>
                <Post post={ data.response }></Post>
                <S.Line></S.Line>
                <S.CommentBox>
                    <S.Comments>
                         {data.response.comments.map((comment) => (
                            <Comment comment={comment}></Comment>
                        ))}
                    </S.Comments>
                    <CommentInput></CommentInput>
                </S.CommentBox>
            </S.PageBox>
        }
        </S.PostPage>
    );
};

export default PostPage;