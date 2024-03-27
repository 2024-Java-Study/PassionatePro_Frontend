import * as S from "./SignUpPage.style";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
    email: "",
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
      email: "",
    });
  };

  const navigate = useNavigate();
  const navigateToSignUpPage = () => {
    navigate("/members/login");
  };

  return (
    <S.SignUpPage>
      <S.Title>
        <strong>Passionate-Pro</strong>
      </S.Title>
      <S.SignUpContent>
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
        <S.Input
          name="email"
          onChange={onChangeInfo}
          value={loginInfo.email}
          placeholder="Email"
        />
        <br />
        <S.SignUpButton onClick={navigateToSignUpPage}>회원가입</S.SignUpButton>
        <br />
        <S.LoginButton>로그인</S.LoginButton>
      </S.SignUpContent>
    </S.SignUpPage>
  );
};

export default SignUpPage;
