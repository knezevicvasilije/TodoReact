import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, searchTerm, setTodos }) => {
  return (
    <div className="container">
      <ul className="collection with-header">
        {todos
          .filter((todo) => {
            if (searchTerm === "") {
              return todo;
            } else if (
              todo.text.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return todo;
            }
          })
          .map((todo) => (
            <Todo
              setTodos={setTodos}
              todo={todo}
              key={todo.id}
              todos={todos}
              text={todo.text}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
