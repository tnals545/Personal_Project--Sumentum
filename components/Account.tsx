import Link from "next/link";
import { useState, useRef } from "react";
import { Container } from "styles/Container";

interface Props {
  mode: string;
}

const Account = ({ mode }: Props) => {
  const [category, setCategory] = useState("name");
  const inputRef = useRef<HTMLInputElement>(null);

  const nameText = mode == "sign-up" ? "set" : "enter";
  const passwordText = mode == "sign-up" ? "set" : "reset";
  const completeText = mode == "sign-up" ? "created" : "reset";

  const onSubmit = () => {
    if (category == "name") {
      setCategory("password");
    } else {
      setCategory("complete");
    }
  };

  const Name = () => {
    return (
      <Container>
        {mode == "sign-up" && <p>Welcome!</p>}
        <p>
          Please {nameText} your {category}.
        </p>
        <form onSubmit={onSubmit}>
          <input ref={inputRef} type="text" />
        </form>
      </Container>
    );
  };
  const Password = () => {
    return (
      <Container>
        <p>
          Please {passwordText} your {category}.
        </p>
        <form onSubmit={onSubmit}>
          <input ref={inputRef} type="password" />
        </form>
      </Container>
    );
  };
  const Complete = () => {
    return (
      <Container>
        {mode == "sign-up" && <p>Congratulations!</p>}
        <p>Your account has been {completeText}.</p>
        <Link href="/">
          <p>Go to Login</p>
        </Link>
      </Container>
    );
  };

  if (category == "name") {
    return Name();
  } else if (category == "password") {
    return Password();
  } else {
    return Complete();
  }
};

export default Account;
