import axios from "../../customAxios"

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
        window.alert("로그아웃 성공");
        localStorage.removeItem('username')
        window.location.reload();
    })
    .catch((error) => {
        console.log(error);
        window.alert("로그아웃 실패");
    })
};

export default Logout;
