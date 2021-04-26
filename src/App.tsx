import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ToDoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <ToDoForm onAdd={addHandler} />

        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
