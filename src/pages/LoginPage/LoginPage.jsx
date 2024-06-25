import * as S from "./LoginPage.style";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

// const loginAPI = async (username, password) => {
//   // const [cookies, setCookie] = useCookies(["id"]);
//   const API = process.env.REACT_APP_API_URL + "/members/login";
//   try {
//     const result = await axios.post(
//       API,
//       {
//         username: username,
//         password: password,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(result);
//     window.alert("로그인 성공");
//     console.log(result.data.token);
//     // setCookie("id", result.data.token); // 쿠키에 토큰 저장
//   } catch (error) {
//     window.alert("로그인 실패");
//     console.log(username);
//     console.log(password);
//     console.log(error);
//   }
// };

const LoginPage = () => {
  // const formRef = useRef();
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

    // setCookie("id", process.env.REACT_APP_COOKIE);
    // const token = cookies.id;
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
            // withCredentials: true,
            // token: token,
          },
        }
      )
      .then((result) => {
        console.log(result);
        console.log(username);
        console.log(password);
        window.alert("로그인 성공");
        console.log(result.data.token);
        // setCookie("id", result.data.token); // 쿠키에 토큰 저장
      })
      .catch((error) => {
        console.log(username);
        console.log(password);
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
