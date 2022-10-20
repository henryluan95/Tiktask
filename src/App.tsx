import "./App.scss";
import { useEffect, useState } from "react";
import InputField from "./components/InputField/InputField";
import { Todo } from "./components/Model/model";
import TodoList from "./components/TodoList/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    //Check if local data is exist, if it is, parse and return. If not, return an empty array
    const storedTasks = localStorage.getItem("todos");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [completedTodos, setCompletedTodos] = useState<Todo[]>(() => {
    const storedCompletedTasks = localStorage.getItem("completedTodos");
    return storedCompletedTasks ? JSON.parse(storedCompletedTasks) : [];
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    //If there is something in the input field, set it to the todo list
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }

    //empty the input filed
    setTodo("");
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    //If drag to un-droppable places, do nothing
    if (!destination) return;

    //If drag and drop at the same place, do nothing
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    let draggingTask;
    let activeTasks = todos;
    let completedTasks = completedTodos;

    //Taking the task out of the table
    if (source.droppableId === "TodosList") {
      //Get the task from active tasks using its id in the source
      draggingTask = activeTasks[source.index];
      //Splice it out the the active task array
      activeTasks.splice(source.index, 1);
    } else {
      //Get the task from completed tasks using its id in the source
      draggingTask = completedTasks[source.index];
      //Splice it out the the completed task array
      completedTasks.splice(source.index, 1);
    }

    //Adding the task into the table
    if (destination.droppableId === "TodosList") {
      //Add it to the table
      activeTasks.splice(destination.index, 0, draggingTask);
    } else {
      //Add it to the table
      completedTasks.splice(destination.index, 0, draggingTask);
    }

    setTodos(activeTasks);
    setCompletedTodos(completedTasks);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="home">
        <div className="home__stars">
          <div className="home__star1"></div>
          <div className="home__star2"></div>
          <div className="home__star3"></div>
        </div>
        <span className="home__heading">Tik Task</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
