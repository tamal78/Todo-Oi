const Footer = ({
  filter,
  todos,
  setFilter,
  getActiveTodosSize,
  clearCompletedTodos
}) => {
  return todos.length > 0 ? (
    <div className="footer">
      <p>{getActiveTodosSize()} Tasks Remaining</p>
      <button
        style={{ color: filter === "All" && "#3b82f6" }}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        style={{ color: filter === "Active" && "#3b82f6" }}
        onClick={() => setFilter("Active")}
      >
        Active
      </button>
      <button
        style={{ color: filter === "Completed" && "#3b82f6" }}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
      <button
        onClick={() => {
          setFilter("All");
          clearCompletedTodos();
        }}
      >
        Clear Completed
      </button>
    </div>
  ) : null;
};

export default Footer;
