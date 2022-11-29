import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

export interface Object {
  id: number;
  text: string;
  done: boolean;
}

const Todos = () => {
  return (
    <div className="Todos">
      <h1>Todo List</h1>
      <TodoInsert />
      <TodoList />
    </div>
  );
};

export default Todos;
