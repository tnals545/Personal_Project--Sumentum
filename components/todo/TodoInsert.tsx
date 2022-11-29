import { useRef, useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { addTodo } from "redux/slice/todoListSlice";

const TodoInsert = () => {
  const todoId = useRef(0);
  const textRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();

  const changeInput = (e: any) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!text) return; //text에 아무것도 없을 때 - 공백 입력 방지

    dispatch(
      addTodo({
        id: todoId.current++,
        text: text,
        done: false,
        edit: false,
      })
    );

    setText("");
    textRef.current?.focus(); // 내용 입력 후에도 input창에 focus를 두게 함.
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
    </form>
  );
};

export default TodoInsert;
