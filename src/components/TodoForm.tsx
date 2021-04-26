import React, { useState } from "react";

export const ToDoForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }; 

  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={changeHandler}
        type="text"
        id="title"
        placeholder="Enter title"
      />
      <label htmlFor="title" className="active">
        Enter title
      </label>
    </div>
  );
};
