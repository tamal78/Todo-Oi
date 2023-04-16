import Todo from "./Todo";

const TodoList = ({
  filter,
  handleFilter,
  handleCompletedTask,
  handleDeleteTodo
}) => {
  return (
    <div className="todo-lists">
      {handleFilter().length > 0
        ? handleFilter().map((todo, index) => (
            <Todo
              filter={filter}
              key={todo.id}
              index={index}
              todo={todo}
              handleCompletedTask={handleCompletedTask}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))
        : filter !== "All" && (
            <div className="not-found">{filter} tasks not found!</div>
          )}
    </div>
  );
};

export default TodoList;
