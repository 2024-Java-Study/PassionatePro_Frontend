import axios from "axios";

const Quit = () => {
    const API = process.env.REACT_APP_API_URL + "/members";

    axios
        .delete(API, {
        withCredentials: true,
        headers: {
            "Accept-Type": "application/json",
        },
    })
    .then((result) => {
        console.log(result);
        console.log("회원 탈퇴에 성공하였습니다.");
    })
    .catch((error) => {
        console.log(error);
        console.log("회원 탈퇴에 실패하였습니다.");
    })
};

export default Quit;