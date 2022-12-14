import Findpassword from "components/account/Findpassword";
import Title from "components/Title";
import { Container } from "styles/Container";

const FindPasswordPage = () => {
  return (
    <Container>
      <Title title="Find Password" />
      <Findpassword />
    </Container>
  );
};

export default FindPasswordPage;
