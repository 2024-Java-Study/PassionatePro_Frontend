import * as S from "./ProfileImage.style";
import { useEffect, useState, useRef } from "react";
import axios from "axios";





const ProfileImage = () => {
    console.log("di");

    const changeProfileImage = () => {

    const image = imgRef.current.files[0];
    
    const formData = new FormData();
    formData.append("images", image);
    const API = process.env.REACT_APP_API_URL + "/members/profiles";
    
    axios
        .put(API, formData, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    .then((result) => {
        console.log(result);
        console.log("프로필 사진 수정에 성공하였습니다.");
    })
    .catch((error) => {
        console.log(error);
        console.log("프로필 사진 수정에 실패하였습니다.");
    })
}

    const imgRef = useRef(null);

    return(<S.ProfileImage
        name="file"
        type="file"
        accept="image/*"
        id = "file"
        ref={imgRef}
        onChange={changeProfileImage}
        />)
};

export default ProfileImage;
