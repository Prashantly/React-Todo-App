import React from "react";
import { toast } from "react-toastify";

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (todo) => {
    const newTodos = todos.filter((item) => item !== todo);
    toast.success("Task has been deleted Sucessfully ✌️✌️");
    setTodos(newTodos);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <input type="text" value={todo.title} className="list" />
          <div>
            <button className="button-complete task-button">
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button">
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
