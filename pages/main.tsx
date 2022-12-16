import { useRef, useState } from "react";
import { Container } from "styles/Container";
import Clock from "components/main/Clock";
import GoogleSearch from "components/main/GoogleSearch";
import Title from "components/Title";

interface TodoFocus {
  todoText: string;
  isEnter: boolean;
}

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todoFocus, setTodoFocus] = useState<TodoFocus>({
    todoText: "",
    isEnter: false,
  });

  const { todoText, isEnter } = todoFocus;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const { value } = inputRef.current;
      setTodoFocus({ todoText: value, isEnter: true });
    }
  };

  return (
    <>
      <Container>
        <Title title="Main" />
        <GoogleSearch />
        <Clock />
        <div className="main-text">
          <span>Good evening, sumin.</span>
          <span>What is your main focus for today?</span>
        </div>
        <div className="main-input">
          <form onSubmit={onSubmit}>
            {isEnter ? (
              <span>{todoText}</span>
            ) : (
              <input ref={inputRef} type="text" />
            )}
          </form>
        </div>
      </Container>
    </>
  );
};

export default Main;
