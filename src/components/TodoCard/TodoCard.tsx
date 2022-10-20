import { Todo } from "../Model/model";
import { BiEdit } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import "./TodoCard.scss";
import { useEffect, useRef, useState } from "react";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(todo.todo);

  //Create Ref
  const inputRef = useRef<HTMLInputElement>(null);

  //Create a function to cross of tasks that are done
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //Create a function to delete a task
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Create a function to edit a task
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: newTodo } : todo))
    );

    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo__text"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todo__text">{todo.todo}</s>
      ) : (
        <span className="todo__text">{todo.todo}</span>
      )}

      <div>
        <span
          className="todo__icon"
          onClick={() => {
            if (!todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <BiEdit />
        </span>
        <span className="todo__icon" onClick={() => handleDelete(todo.id)}>
          <AiOutlineDelete />
        </span>
        <span className="todo__icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
