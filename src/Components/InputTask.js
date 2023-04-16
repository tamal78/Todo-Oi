const InputTask = ({ theme, input, handleInputChange, handleTodo }) => {
  return (
    <input
      placeholder="Enter a task.."
      type="text"
      value={input}
      onChange={handleInputChange}
      onKeyPress={handleTodo}
    />
  );
};

export default InputTask;
