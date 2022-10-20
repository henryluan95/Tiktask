import React from "react";
import "./TodoList.scss";
import { Todo } from "../Model/model";
import TodoCard from "../TodoCard/TodoCard";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="todos">
      <Droppable droppableId="TodosList">
        {(provided) => {
          return (
            <div
              className="todos__active"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos__heading">Active Tasks</span>
              <span className="todos__number">
                Number of Tasks: {todos.length}
              </span>
              {todos.map((todo, index) => {
                return (
                  <TodoCard
                    index={index}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => {
          return (
            <div
              className="todos__remove"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos__heading">Competed Tasks</span>
              <span className="todos__number">
                Number of Tasks: {completedTodos.length}
              </span>
              {completedTodos.map((todo, index) => {
                return (
                  <TodoCard
                    index={index}
                    todos={completedTodos}
                    todo={todo}
                    key={todo.id}
                    setTodos={setCompletedTodos}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default TodoList;
