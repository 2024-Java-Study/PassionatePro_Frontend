import * as S from "./LoginPage.style";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCookie, getCookie } from "../../cookie";

const LoginPage = () => {
  // const [cookies, setCookie] = cookies(["id"]);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginAPI(loginInfo.username, loginInfo.password);
    navigate("/");
  };

  const loginAPI = (username, password) => {
    const API = process.env.REACT_APP_API_URL + "/members/login";

    // setCookie("test", "test1234"); // 쿠키 저장
    axios
      .post(
        API,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            withCredentials: true,
          },
        }
      )
      .then((result) => {
        console.log(result);
        window.alert("로그인 성공");
        // cookies.setCookie("id", result.data.token); // 쿠키에 토큰 저장
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
