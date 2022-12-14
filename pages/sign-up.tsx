import Signup from "components/Signup";
import Title from "components/Title";
import { Container } from "styles/Container";

const SignupPage = () => {
  return (
    <Container>
      <Title title="Sign Up" />
      <Signup />
    </Container>
  );
};

export default SignupPage;
