import React, { Component } from "react";
import { AiFillDelete, AiFillCheckCircle, AiFillSave } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastText: "",
      newText: "",
    };
  }

  saveText = (text) => {
    this.setState({ pastText: text, newText: text });
  };

  changeInput = (e) => {
    this.setState({ newText: e.target.value });
  };

  render() {
    const {
      id,
      text,
      checked,
      status,
      deleteItem,
      checkItem,
      toggleItemStatus,
      updateItem,
    } = this.props;
    let option;
    if (status === "text") {
      if (checked) {
        option = <AiFillCheckCircle className="check-mark" />;
      } else {
        option = (
          <GrUpdate
            className="update"
            onClick={() => {
              toggleItemStatus(id);
              this.saveText(text);
            }}
          />
        );
      }
    } else {
      option = [
        <AiFillSave
          key={1}
          onClick={() => {
            updateItem(id, this.state.newText);
          }}
        />,
        <GiCancel
          key={2}
          onClick={() => {
            updateItem(id, this.state.pastText);
          }}
        />,
      ];
    }
    return (
      <div className="todo-item">
        <AiFillDelete
          className="remove"
          onClick={() => {
            deleteItem(id);
          }}
        />
        <div
          className={`todo-text ${checked && "checked"}`}
          onClick={() => {
            checkItem(id);
          }}
        >
          <div>
            {status === "text" ? (
              text
            ) : (
              <input value={this.state.newText} onChange={this.changeInput} />
            )}
          </div>
        </div>
        {option}
      </div>
    );
  }
}

export default TodoItem;
