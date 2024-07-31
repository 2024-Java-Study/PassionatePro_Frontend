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

    const Comments = ({comments}) =>  ( 
        <S.Comments>
        { comments.map((comment) => (
            <S.CommentWithReplies> 
                <Comment key={comment.commentId} comment={comment} stage={0}></Comment>
                <Replies replies={comment.replies}></Replies>
            </S.CommentWithReplies>
        ))}
        </S.Comments>
    );

    const Replies = ({replies}) => (
        <S.Replies>
            { replies.map((reply) => (
                <Comment key={reply.replyId} comment={reply} stage={1}></Comment>
            ))}
        </S.Replies>
    );

    return (
        <S.PostPage>
            <PageLayout header={<Header />}></PageLayout>
            <S.HeaderLine></S.HeaderLine>
            { data && 
            <S.PageBox>
                <Post key={post.id} post={ data.response }></Post>
                <S.Line></S.Line>
                <S.CommentBox>
                    <Comments comments={data.response.comments}></Comments>
                    <CommentInput></CommentInput>
                </S.CommentBox>
            </S.PageBox>
            }
        </S.PostPage>
    );
};

export default PostPage;