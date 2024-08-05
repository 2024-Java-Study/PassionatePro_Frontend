import * as S from "./LoginPage.style";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginAPI(loginInfo.username, loginInfo.password);
    localStorage.setItem("username", loginInfo.username);

    navigate("/");
  };

  const loginAPI = (username, password) => {
    const API = process.env.REACT_APP_API_URL + "/members/login";
    axios
      .post(
        API,
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((result) => {
        console.log(result);
        window.alert("로그인 성공");
        window.location.reload();
        
      })
      .catch((error) => {
        window.alert("로그인 실패");
        console.log(error);
      });
  };

  const onChangeInfo = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const navigateToSignUpPage = () => {
    navigate("/members/signup");
  };

  return (
    <S.LoginPage>
      <S.Title>
        <strong>Passionate-Pro</strong>
      </S.Title>
      <S.LoginContent>
        <S.Input
          name="username"
          onChange={onChangeInfo}
          value={loginInfo.username}
          placeholder="ID"
        />
        <br />
        <S.Input
          name="password"
          onChange={onChangeInfo}
          value={loginInfo.password}
          placeholder="Password"
        />
        <br />
        <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
        <br />
        <S.SignUpButton onClick={navigateToSignUpPage}>회원가입</S.SignUpButton>
      </S.LoginContent>
    </S.LoginPage>
  );
};

export default LoginPage;
