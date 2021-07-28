import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({ form, children }) => {
  return (
    <div class="container">
      <main className="todo-list-template">
        <div className="title">오늘 할 일</div>
        <section className="form-wrapper">{form}</section>
        <section className="todos-wrapper">{children}</section>
      </main>
    </div>
  );
};

export default TodoListTemplate;
