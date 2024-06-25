import * as S from "./SignUpPage.style";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const signupAPI = async (prop) => {
  const API = process.env.REACT_APP_API_URL + "/members/signup";
  try {
    const result = await axios.post(
      API,
      {
        username: prop.username,
        password: prop.password,
        nickname: prop.nickname,
        email: prop.email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(result);
    window.alert("회원가입이 되었습니다! 로그인 해주세요.");
  } catch (error) {
    window.alert("회원가입이 정상적으로 되지 않았습니다.");
    console.log(error);
  }
};

// const APITest = () => {
//   const API = process.env.REACT_APP_API_URL + "/api/test";
//   axios
//     .get(API)
//     .then((result) => {
//       console.log(result);
//       window.alert("API 테스트");
//       // history.replace(process.env.REACT_APP_API_URL + "/members/login");
//     })
//     .catch((error) => {
//       window.alert("API 테스트 연결 에러");
//       console.log(error);
//     });
// };

const SignUpPage = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    nickname: "",
    email: "",
  });

  const onChangeInfo = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    signupAPI(loginInfo);
    navigate("/members/login");
  };

  return (
    <S.SignUpPage>
      <S.Title>
        <strong>Passionate-Pro</strong>
      </S.Title>
      <S.SignUpContent>
        <S.Input
          name="username"
          onChange={onChangeInfo}
          value={loginInfo.username}
          placeholder="Username"
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
          name="nickname"
          onChange={onChangeInfo}
          value={loginInfo.nickname}
          placeholder="Nickname"
        />
        <br />
        <S.Input
          name="email"
          onChange={onChangeInfo}
          value={loginInfo.email}
          placeholder="Email"
        />
        <br />
        <S.SignUpButton onClick={handleSignup}>회원가입</S.SignUpButton>
        <br />
        <S.LoginButton>로그인</S.LoginButton>
      </S.SignUpContent>
    </S.SignUpPage>
  );
};

export default SignUpPage;
