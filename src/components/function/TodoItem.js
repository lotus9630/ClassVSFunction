import React, { useState } from "react";
import { AiFillDelete, AiFillCheckCircle, AiFillSave } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import "./TodoItem.css";

function TodoItem({
  text,
  checked,
  removeItem,
  checkItem,
  id,
  status,
  changeStatus,
  updateItem,
}) {
  const [newText, setNewText] = useState(text);
  let optionButton;
  if (checked) {
    optionButton = <AiFillCheckCircle className="check-mark" />;
  } else if (status == "text") {
    optionButton = (
      <GrUpdate
        className="update"
        onClick={() => {
          changeStatus(id);
        }}
      />
    );
  } else if (status == "update") {
    optionButton = [
      <AiFillSave
        key={1}
        onClick={() => {
          updateItem(id, newText);
          changeStatus(id);
        }}
      />,
      <GiCancel
        key={2}
        onClick={() => {
          changeStatus(id);
        }}
      />,
    ];
  }

  const changeInput = (e) => {
    setNewText(e.target.value);
  };
  return (
    <div className="todo-item">
      <AiFillDelete
        className="remove"
        onClick={() => {
          removeItem(id);
        }}
      />
      <div
        className={`todo-text ${checked && "checked"}`}
        onClick={() => {
          checkItem(id);
        }}
      >
        {status === "text" ? (
          text
        ) : (
          <input value={newText} onChange={changeInput} />
        )}
      </div>
      {optionButton}
    </div>
  );
}

export default TodoItem;
