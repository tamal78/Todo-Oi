import { BsX } from "react-icons/bs";

const Todo = ({
  todo,
  filter,
  handleCompletedTask,
  handleDeleteTodo,
  index
}) => {
  return (
    <div className="todo-card">
      <div>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => handleCompletedTask(index)}
        />
        <span
          className={filter === "All" && todo.isCompleted ? "cross" : ""}
          key={todo.id}
        >
          {todo.task}
        </span>
      </div>
      <BsX className="cross-icon" onClick={() => handleDeleteTodo(todo.id)} />
    </div>
  );
};

export default Todo;
