import axios from "axios";

axios.interceptors.response.use(config => {
    // console.log("응답");
    return config;
  }, error => {
    console.log("응답");
    console.log(error.response.status);
    
    if (error.response.status === 401) {
      console.log("401 에러");
      window.alert("다시 로그인 해 주세요.");
      localStorage.removeItem("username");
      window.location.reload();
    }

    return Promise.reject(error);
  });

  export default axios;