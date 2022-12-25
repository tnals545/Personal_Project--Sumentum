import { useRef, useState } from "react";
import { Container } from "styles/Container";
import Clock from "components/main/Clock";
import GoogleSearch from "components/main/GoogleSearch";
import Title from "components/Title";
import Weather from "components/main/Weather";
import BackgroundImgInfo from "components/main/BackgroundImgInfo";
import Todos from "components/todo/Todos";
import Advice from "components/main/Advice";

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
  const [todoToggle, setTodoToggle] = useState<boolean>(false);

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
        <div className="header">
          <Weather />
        </div>
        <div className="search">
          <GoogleSearch />
        </div>
        <div className="main">
          <Clock />
          <span>Good evening, sumin.</span>
          <span>What is your main focus for today?</span>
          <div className="main-todayFocus">
            <form onSubmit={onSubmit}>
              {isEnter ? (
                <span>{todoText}</span>
              ) : (
                <input ref={inputRef} type="text" />
              )}
            </form>
          </div>
        </div>
        <div className="footer">
          <BackgroundImgInfo />
          <Advice />
          <span onClick={() => setTodoToggle((prev) => !prev)}>Todo</span>
          {todoToggle && <Todos />}
        </div>
      </Container>
    </>
  );
};

export default Main;
