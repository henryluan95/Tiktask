import { Todo } from "../Model/model";
import { BiEdit } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import "./TodoCard.scss";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todo">
      <span className="todo__text">{todo.todo}</span>
      <div>
        <span className="todo__icon">
          <BiEdit />
        </span>
        <span className="todo__icon">
          <AiOutlineDelete />
        </span>
        <span className="todo__icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
