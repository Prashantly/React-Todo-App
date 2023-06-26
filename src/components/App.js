import { useState, useEffect } from "react";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form todos={todos} setTodos={setTodos} />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
