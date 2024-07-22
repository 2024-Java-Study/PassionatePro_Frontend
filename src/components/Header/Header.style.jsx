import styled from "@emotion/styled";
import profileImage from "../../assets/images/profile_button.png"

export const Header = styled.div`
  display: flex;
  font-size: 25px;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
`;

export const LeftSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LeftSectionLogo = styled.div``;

export const Logo = styled.h1`
  font-family: "Inter-ExtraBold";
`;

export const RightSectionNav = styled.div`
  display: flex;
  justify-content: center;
  width: 30vw;
  padding-left: 10%;
`;

export const Navbar = styled.button`
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;

  font-size: 23px;
  font-family: "Inter-ExtraBold";
  font-weight: bold;
  padding: 0 00px 0 40px;
`;

export const ProfileButton = styled.button`
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;

  background-image: url(${profileImage});
  background-position: top center;
  background-size: cover;

  font-size: 23px;
  font-family: "Inter-ExtraBold";
  font-weight: bold;
  padding: 0 0px 0 40px;
  width: 40px;
  height: 40px;

  margin-top: 40px;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
`;
