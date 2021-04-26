import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const ToDoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={changeHandler}
        type="text"
        id="title"
        placeholder="Enter title"
        onKeyPress={KeyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter title
      </label>
    </div>
  );
};
