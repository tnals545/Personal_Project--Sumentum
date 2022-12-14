import { Container } from "styles/Container";
import Login from "components/account/Login";
import Title from "components/Title";

const Home = () => {
  return (
    <Container>
      <Title title="Log In" />
      <Login />
    </Container>
  );
};

export default Home;
