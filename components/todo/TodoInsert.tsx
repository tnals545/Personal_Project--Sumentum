import { useRef, useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { addTodo } from "redux/slice/todoListSlice";

const TodoInsert = () => {
  const todoId = useRef(0);
  const textRef = useRef<HTMLInputElement>(null);
  const [todoText, setTodoText] = useState<string>("");

  const dispatch = useAppDispatch();

  const changeInput = (e: any) => {
    const {
      target: { value },
    } = e;
    setTodoText(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!todoText) return;

    dispatch(
      addTodo({
        id: todoId.current++,
        text: todoText,
        done: false,
        edit: false,
      })
    );

    setTodoText("");
    textRef.current?.focus();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={changeInput}
        ref={textRef}
      />
    </form>
  );
};

export default TodoInsert;
