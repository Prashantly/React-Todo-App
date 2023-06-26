import { useState, useEffect } from "react";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    function fetchTodos() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          const data = response.data.slice(0, 10);
          setTodos(data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
