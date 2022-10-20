import React from "react";
import "./TodoList.scss";
import { Todo } from "../Model/model";
import TodoCard from "../TodoCard/TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <TodoCard
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
