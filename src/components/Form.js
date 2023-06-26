import React from "react";

const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Enter a Todo..." className="task-input" />
      <button type="submit" className="button-add ">
        Add
      </button>
    </form>
  );
};

export default Form;
