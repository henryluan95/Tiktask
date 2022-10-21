import { Todo } from "../Model/model";
import { BiEdit } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { IoArrowUndoOutline } from "react-icons/io5";
import "./TodoCard.scss";
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  todo: Todo;
  todos: Todo[];
  completedTodos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
  isActiveCard?: boolean;
}

const TodoCard: React.FC<Props> = ({
  todo,
  todos,
  setTodos,
  index,
  completedTodos,
  setCompletedTodos,
  isActiveCard,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(todo.todo);

  //Create Ref
  const inputRef = useRef<HTMLInputElement>(null);

  //Create a function to cross of tasks that are done
  const handleDone = (id: number) => {
    const allTasks = todos.concat(completedTodos);
    //On click, change isDone to the opposite
    const newArray = allTasks.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodos(newArray.filter((todo) => todo.isDone === false));
    setCompletedTodos(newArray.filter((todo) => todo.isDone === true));
  };

  //Create a function to delete a task
  const handleDelete = (id: number) => {
    if (isActiveCard) {
      setTodos(todos.filter((todo) => todo.id !== id));
    } else {
      setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
    }
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
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => {
        return (
          <form
            className="todo"
            onSubmit={(e) => handleEdit(e, todo.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {edit ? (
              <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="todo__text"
                ref={inputRef}
              />
            ) : isActiveCard ? (
              <span className="todo__text">{todo.todo}</span>
            ) : (
              <s className="todo__text">{todo.todo}</s>
            )}

            <div className="todo__icons">
              {/* Only display edit button when tasks are still active */}
              {!todo.isDone && (
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
              )}
              <span
                className="todo__icon"
                onClick={() => handleDelete(todo.id)}
              >
                <AiOutlineDelete />
              </span>
              {/* display check when task is active, display undo when task is completed */}
              {!todo.isDone ? (
                <span
                  className="todo__icon"
                  onClick={() => handleDone(todo.id)}
                >
                  <MdDone />
                </span>
              ) : (
                <span
                  className="todo__icon"
                  onClick={() => handleDone(todo.id)}
                >
                  <IoArrowUndoOutline />
                </span>
              )}
            </div>
          </form>
        );
      }}
    </Draggable>
  );
};

export default TodoCard;
