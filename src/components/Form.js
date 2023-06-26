import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import axios from "axios";

const Form = ({ todos, setTodos, editTodo, setEditTodo }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const updatedTodo = (title, id, completed, userId) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          title,
          id,
          completed,
          userId,
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

    const todoData = {
      id: editTodo ? editTodo.id : uuidv4(),
      title: input,
      completed: editTodo ? editTodo.completed : false,
      userId: 1,
    };

    if (editTodo) {
      axios
        .put(
          `https://jsonplaceholder.typicode.com/todos/${editTodo.id}`,
          todoData
        )
        .then((response) => {
          // console.log("Edit response data", response);

          updatedTodo(
            response.data.title,
            response.data.id,
            response.data.completed,
            response.data.userId
          );
          toast.success("Task has been updated successfully ✌️✌️");
        })
        .catch((error) => {
          console.log("Edit request error", error);
        });
    } else {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", todoData)
        .then((response) => {
          // console.log("Post request resposnse", response.data);
          setTodos([response.data, ...todos]);
          toast.success("Task added successfully 😍😍");
        })
        .catch((error) => {
          console.log("Post request error", error);
        });
    }

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
