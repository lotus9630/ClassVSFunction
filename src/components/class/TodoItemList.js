import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, deleteItem, checkItem } = this.props;
    if (todos.length === 0) {
      return <div></div>;
    }
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        text={text}
        checked={checked}
        key={id}
        deleteItem={deleteItem}
        id={id}
        checkItem={checkItem}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
