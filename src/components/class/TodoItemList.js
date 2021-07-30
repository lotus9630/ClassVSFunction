import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, deleteItem, checkItem, toggleItemStatus, updateItem } =
      this.props;
    if (todos.length === 0) {
      return <div></div>;
    }
    const todoList = todos.map(({ id, text, checked, status }) => (
      <TodoItem
        id={id}
        key={id}
        text={text}
        checked={checked}
        status={status}
        deleteItem={deleteItem}
        checkItem={checkItem}
        toggleItemStatus={toggleItemStatus}
        updateItem={updateItem}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
