import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  const navigate = useNavigate();

  const handleNavBarClick = (path) => {
    navigate(path);
  };

  const location = useLocation();
  const [isActive, setIsActive] = useState({
    home: true,
    boards: false,
  });

  useEffect(() => {
    const path = location.pathname;
    setIsActive({
      home: path === "/",
      boards: path === "/boards",
    });
  }, [location]);

  return (
    <S.Header>
      <S.LeftSection>
        <S.LeftSectionLogo>
          <S.Logo>PP</S.Logo>
        </S.LeftSectionLogo>
        <S.RightSectionNav>
          <S.Navbar
            onClick={() => handleNavBarClick("/")}
            style={{ color: isActive.home ? "black" : "gray" }}
          >
            홈
          </S.Navbar>
          <S.Navbar
            onClick={() => handleNavBarClick("/boards")}
            style={{ color: isActive.boards ? "black" : "gray" }}
          >
            글 쓰기
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
