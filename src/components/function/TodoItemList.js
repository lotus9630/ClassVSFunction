import React, { Component } from "react";
import TodoItem from "./TodoItem";

function TodoItemList({
  removeItem,
  checkItem,
  todos,
  changeStatus,
  updateItem,
}) {
  const todoList = todos.map(({ id, text, checked, status }) => (
    <TodoItem
      text={text}
      checked={checked}
      key={id}
      id={id}
      removeItem={removeItem}
      checkItem={checkItem}
      status={status}
      changeStatus={changeStatus}
      updateItem={updateItem}
    />
  ));

  return <div>{todoList}</div>;
}

export default TodoItemList;
