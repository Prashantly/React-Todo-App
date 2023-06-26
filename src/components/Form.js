import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Form = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (input === "") {
      toast.error("Task input text cannot be empty 😭😭");
      return;
    }

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: input,
        completed: false,
      },
    ]);

    toast.success("Task added successfully 😍😍");

    setInput("");
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
          value={input}
          onChange={onInputChange}
        />
        <button type="submit" className="button-add ">
          Add
        </button>
      </form>
      <p className="task-count">Total tasks : {todos.length}</p>
    </>
  );
};

export default Form;
