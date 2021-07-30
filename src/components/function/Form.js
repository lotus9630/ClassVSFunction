import React from "react";
import "./Form.css";

function Form({ createItem, changeInput, input }) {
  const onEnter = (e) => {
    if (e.key === "Enter") {
      createItem();
    }
  };

  return (
    <div className="form">
      <input onChange={changeInput} value={input} onKeyDown={onEnter} />
      <div className="create-button" onClick={createItem}>
        추가
      </div>
    </div>
  );
}

export default Form;
