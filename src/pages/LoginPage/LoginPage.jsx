import * as S from "./LoginPage.style";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
  });

  const onChangeInfo = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = (e) => {
    setLoginInfo({
      id: "",
      password: "",
    });
  };

  const navigate = useNavigate();
  const navigateToSignUpPage = () => {
    navigate("/members/signup");
  };

  return (
    <S.LoginPage>
      <S.Title>Passionate-Pro</S.Title>
      <S.LoginContent>
        <S.Input
          name="id"
          onChange={onChangeInfo}
          value={loginInfo.id}
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
        <S.LoginButton onClick={onReset}>로그인</S.LoginButton>
        <br />
        <S.SignUpButton onClick={navigateToSignUpPage}>회원가입</S.SignUpButton>
      </S.LoginContent>
    </S.LoginPage>
  );
};

export default LoginPage;
