import "./App.scss";
import { useState } from "react";
import InputField from "./components/InputField/InputField";
import { Todo } from "./components/Model/model";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }

    setTodo("");
  };

  return (
    <div className="home">
      <span className="home__heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
