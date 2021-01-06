import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
  };
  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed
          };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`collection-item ${todo.completed ? "completed" : ""}`}>
        <div>
          {text}
          <button onClick={completeHandler} className="secondary-content">
            <i className="material-icons">done</i>
          </button>
          <button onClick={deleteHandler} className="secondary-content">
            <i className="material-icons">delete_forever</i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
