import "./styles.css";
import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <header>
        <h1>To do list</h1>
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
      </header>
      <div className="main">
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}

export default App;
