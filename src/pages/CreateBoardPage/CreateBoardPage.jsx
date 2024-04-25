import * as S from "./CreateBoardPage.style";
import { Header, PageLayout } from "../../components";

const CreateBoardPage = () => {
  return (
    <S.CreateBoardPage>
      <PageLayout header={<Header />}></PageLayout>
      <S.Line></S.Line>
    </S.CreateBoardPage>
  );
};

export default CreateBoardPage;
