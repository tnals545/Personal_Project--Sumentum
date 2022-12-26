import { useRef, useState } from "react";

import Clock from "components/main/Clock";
import GoogleSearch from "components/main/GoogleSearch";
import Title from "components/Title";
import Weather from "components/main/Weather";
import BackgroundImgInfo from "components/main/BackgroundImgInfo";
import Todos from "components/todo/Todos";
import Advice from "components/main/Advice";

import { Container } from "styles/Container";

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
          <p>Good evening, sumin.</p>
          <p>What is your main focus for today?</p>
          <div className="main-todayFocus">
            <form onSubmit={onSubmit}>
              {isEnter ? (
                <p>{todoText}</p>
              ) : (
                <input ref={inputRef} type="text" />
              )}
            </form>
          </div>
        </div>
        <div className="footer">
          <BackgroundImgInfo />
          <Advice />
          <p onClick={() => setTodoToggle((prev) => !prev)}>Todo</p>
          {todoToggle && <Todos />}
        </div>
      </Container>
    </>
  );
};

export default Main;
