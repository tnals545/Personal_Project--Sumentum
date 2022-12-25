import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <div className="footer-todos">
      <span>Todo List</span>
      <TodoInsert />
      <TodoList />
    </div>
  );
};

export default Todos;
