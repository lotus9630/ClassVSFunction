import React from "react";
import "./Form.css";

const Form = ({ createItem, onEnter, changeInput, text }) => {
  return (
    <div className="form">
      <input onChange={changeInput} onKeyDown={onEnter} value={text} />
      <div className="create-button" onClick={createItem}>
        추가
      </div>
    </div>
  );
};

export default Form;
