import { Header, PageLayout } from "../../components";
import * as S from "./HomePage.style";

const HomePage = () => {
  return (
    <>
      <PageLayout header={<Header />}></PageLayout>
      <S.Container>내용</S.Container>
    </>
  );
};

export default HomePage;
