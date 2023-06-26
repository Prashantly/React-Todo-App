import React from "react";

const TodoList = () => {
  return (
    <div>
      <li className="list-item">
        <input type="text" value="Todo 1" className="list" />
        <div>
          <button className="button-complete task-button">
            <i className="fa fa-check-circle"></i>
          </button>
          <button className="button-edit task-button">
            <i className="fa fa-edit"></i>
          </button>
          <button className="button-delete task-button">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoList;
