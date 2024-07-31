import axios from "axios";

const Logout = () => {
    const API = process.env.REACT_APP_API_URL + "/members/logout";
    
    axios
        .post(API, {}, {
        withCredentials: true,
        headers: {
            "Accept-Type": "application/json",
        },
    })
    .then((result) => {
        console.log(result);
        console.log("로그아웃에 성공하였습니다.");
    })
    .catch((error) => {
        console.log(error);
        console.log("로그아웃에 실패하였습니다.");
    })
};

export default Logout;
