import axios from "axios";


// 완료 버튼을 누르면 새 프로필 사진 리턴 (updateProfile API 호출)
const ProfileImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const API = process.env.REACT_APP_API_URL + "/members/profiles";
    
    await axios
        .put(API, formData, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    .then((result) => {
        console.log(result);
        console.log("프로필 사진 수정에 성공하였습니다.");
        window.location.reload();
    })
    .catch((error) => {
        console.log(error);
        console.log("프로필 사진 수정에 실패하였습니다.");
    })
};

export default ProfileImage;
