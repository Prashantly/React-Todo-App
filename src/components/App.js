import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
