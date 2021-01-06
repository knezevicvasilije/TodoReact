import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    //  console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };
  return (
    <form>
      <div className="inputText">
        <input
          value={inputText}
          className="line"
          type="text"
          placeholder="Add your task:  "
          onChange={inputTextHandler}
        ></input>
        <button
          onClick={submitTodoHandler}
          className="btn waves-effect waves-light"
          type="submit"
        >
          add
        </button>
      </div>
    </form>
  );
};

export default Form;
