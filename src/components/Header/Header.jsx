import { useNavigate } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  const navigate = useNavigate();

  const handleNavBarClick = (path) => {
    navigate(path);
  };

  return (
    <S.Header>
      <S.LeftSection>
        <S.LeftSectionLogo>
          <S.Logo>PP</S.Logo>
        </S.LeftSectionLogo>
        <S.RightSectionNav>
          <S.Navbar
            onClick={() => handleNavBarClick("/")}
            // style={({ isActive }) => { return (isActive ? "black" : "gray", );}}
          >
            홈
          </S.Navbar>
          <S.Navbar onClick={() => handleNavBarClick("/boards")}>
            글쓰기
          </S.Navbar>
        </S.RightSectionNav>
      </S.LeftSection>
      <S.RightSection>
        <S.Navbar>로그아웃</S.Navbar>
      </S.RightSection>
    </S.Header>
  );
};

export default Header;
