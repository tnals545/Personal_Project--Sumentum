import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

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
