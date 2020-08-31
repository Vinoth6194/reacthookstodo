import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div className="App">
      <header>
        <h1>Vinothkumar S' Todo's</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      ></Form>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
