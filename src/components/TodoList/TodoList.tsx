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
      <div className="todos__active">
        <span className="todos__heading">Active Tasks</span>
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
      <div className="todos__remove">
        <span className="todos__heading">Competed Tasks</span>
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
    </div>
  );
};

export default TodoList;
