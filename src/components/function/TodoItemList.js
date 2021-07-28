import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos } = this.props;

    const todoList = todos.map(({ text, checked }) => (
      <TodoItem text={text} checked={checked} />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
