import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Form = ({ todos, setTodos, editTodo, setEditTodo }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const updatedTodo = (title, id, completed) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          title,
          id,
          completed,
        };
      }
      return item;
    });

    setTodos(newTodos);
    setEditTodo(null);
  };
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (input === "") {
      toast.error("Task input text cannot be empty 😭😭");
      return;
    }

    if (!editTodo) {
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
    } else {
      updatedTodo(input, editTodo.id, editTodo.completed);
      toast.success("Task has been updated successfully ✌️✌️");
    }
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
          {editTodo ? "OK" : "ADD"}
        </button>
      </form>
      <p className="task-count">
        Total tasks :{" "}
        <span
          style={{
            color: "#21f9fec9",
            fontWeight: "bold",
          }}
        >
          {todos.length}
        </span>
      </p>
    </>
  );
};

export default Form;
