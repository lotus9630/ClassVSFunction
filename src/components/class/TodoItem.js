import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { text, checked, deleteItem, id, checkItem } = this.props;

    return (
      <div className="todo-item">
        <div
          className="remove"
          onClick={() => {
            deleteItem(id);
          }}
        >
          &times;
        </div>
        <div
          className={`todo-text ${checked && "checked"}`}
          onClick={() => {
            checkItem(id);
          }}
        >
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">&#x2713;</div>}
      </div>
    );
  }
}

export default TodoItem;
