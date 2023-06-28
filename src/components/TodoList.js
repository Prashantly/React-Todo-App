import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  //handle todo task edit
  const handleEditTodo = ({ id }) => {
    const findTodo = todos.find((item) => item.id === id);
    setEditTodo(findTodo);
  };

  //Handle todo Task completed
  const handleTaskCompletion = (todo) => {
    let updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setTodos(updatedTodos);
  };

  //Handle Delete todo
  const handleDelete = (todo) => {
    //make api request to delete todo
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
      .then((response) => {
        // console.log("Delete response", response.data);
        const newTodos = todos.filter((item) => item !== todo);
        setTodos(newTodos);
        toast.success("Task has been deleted Sucessfully ✌️✌️");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={() => {}}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleTaskCompletion(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEditTodo(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
