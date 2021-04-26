import React from "react";
import { Navbar } from "./components/Navbar";
import { ToDoForm } from "./components/TodoForm";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <ToDoForm />
      </div>
    </>
  );
};

export default App;
