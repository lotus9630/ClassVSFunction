import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({ form, children }) => {
  return (
    <div className="container">
      <main className="todo-list-template">
        <div className="title">Class Component</div>
        <section className="form-wrapper">{form}</section>
        <section className="todos-wrapper">{children}</section>
      </main>
    </div>
  );
};

export default TodoListTemplate;
