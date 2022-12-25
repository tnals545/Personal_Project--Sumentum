import { useRef, useState, useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { editTodo, TodoState, toggleTodoEdit } from "redux/slice/todoListSlice";

interface Props {
  todo: TodoState;
}

const TodoEdit = ({ todo }: Props) => {
  const textRef = useRef<HTMLInputElement>(null);
  const [todoText, setTodoText] = useState<string>("");

  const { id, text } = todo;

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
      editTodo({
        ...todo,
        text: todoText,
      })
    );
    dispatch(toggleTodoEdit(id));
  };

  useEffect(() => {
    setTodoText(text);
    textRef.current?.focus();
  }, [text]);

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

export default TodoEdit;
