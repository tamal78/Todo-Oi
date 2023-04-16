import "./styles.css";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import TodoList from "./Components/TodoList";
import InputTask from "./Components/InputTask";

export default function App() {
  const [input, SetInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = () => {
    const newTodos = localStorage.getItem("todoList");
    newTodos && setTodos(JSON.parse(newTodos));
  };

  const handleInputChange = (e) => {
    SetInput(e.target.value);
  };

  const handleTodo = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newTodos = [
        {
          task: input,
          id: Date.now().toString(),
          isCompleted: false
        },
        ...todos
      ];
      setTodos(newTodos);
      localStorage.setItem("todoList", JSON.stringify(newTodos));
      SetInput("");
    }
  };

  const handleDeleteTodo = (deletedTodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== deletedTodoId);
    localStorage.setItem("todoList", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const handleCompletedTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    localStorage.setItem("todoList", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const handleFilter = () => {
    if (filter === "Active") {
      return todos.filter((todo) => todo.isCompleted === false);
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.isCompleted === true);
    }
    return todos;
  };

  const clearCompletedTodos = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
  };

  const getActiveTodosSize = () => {
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    return activeTodos.length;
  };

  return (
    <div className={` ${theme === "light" ? "light" : "dark"}`}>
      <div className="container">
        <div className="header">
          <h2>TODO APP</h2>
          {theme === "light" ? (
            <BsMoonFill
              size="25"
              className="moon-icon"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <BsSun
              className="sun-icon"
              size="25"
              onClick={() => setTheme("light")}
            />
          )}
        </div>
        <div>
          <InputTask
            theme={theme}
            input={input}
            handleInputChange={handleInputChange}
            handleTodo={handleTodo}
          />
          <TodoList
            filter={filter}
            theme={theme}
            handleFilter={handleFilter}
            handleCompletedTask={handleCompletedTask}
            handleDeleteTodo={handleDeleteTodo}
          />

          <Footer
            filter={filter}
            theme={theme}
            todos={todos}
            setFilter={setFilter}
            getActiveTodosSize={getActiveTodosSize}
            clearCompletedTodos={clearCompletedTodos}
          />
        </div>
      </div>
    </div>
  );
}
