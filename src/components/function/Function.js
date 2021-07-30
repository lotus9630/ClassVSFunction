import React, { useState } from "react";
import TodoListTemplate from "./TodoListTemplate";
import Form from "./Form";
import TodoItemList from "./TodoItemList";

const init = () => {
  if (!localStorage.getItem("functionTodos")) {
    localStorage.setItem("functionTodos", "[]");
  }
  return localStorage.getItem("functionTodos");
};

function Function() {
  const [todos, setTodos] = useState(JSON.parse(init()));
  const [input, setInput] = useState("");

  const loadLocalStorage = (todos) => {
    localStorage.setItem("functionTodos", JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem("functionTodos")));
  };

  const createItem = () => {
    const localTodos = JSON.parse(localStorage.getItem("functionTodos"));
    const newTodos = [
      ...todos,
      {
        id:
          localTodos.length === 0
            ? 0
            : localTodos[localTodos.length - 1].id + 1,
        text: input,
        checked: false,
        status: "text",
      },
    ];
    loadLocalStorage(newTodos);
    setInput("");
  };
  const changeInput = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  const removeItem = (id) => {
    const localTodos = JSON.parse(localStorage.getItem("functionTodos"));
    const newTodos = localTodos.filter((localTodo) => localTodo.id !== id);
    loadLocalStorage(newTodos);
  };

  const checkItem = (id) => {
    const localTodos = JSON.parse(localStorage.getItem("functionTodos"));
    const newTodos = localTodos.map((localTodo) => {
      if (localTodo.id === id && localTodo.status === "text") {
        localTodo.checked = !localTodo.checked;
      }
      return localTodo;
    });
    loadLocalStorage(newTodos);
  };

  const changeStatus = (id) => {
    const localTodos = JSON.parse(localStorage.getItem("functionTodos"));
    const newTodos = localTodos.map((localTodo) => {
      if (localTodo.id === id) {
        localTodo.status = localTodo.status === "text" ? "update" : "text";
      }
      return localTodo;
    });
    loadLocalStorage(newTodos);
  };

  const updateItem = (id, newText) => {
    const localTodos = JSON.parse(localStorage.getItem("functionTodos"));
    const newTodos = localTodos.map((localTodo) => {
      if (localTodo.id === id) {
        localTodo.text = newText;
      }
      return localTodo;
    });
    loadLocalStorage(newTodos);
  };
  return (
    <TodoListTemplate
      form={
        <Form createItem={createItem} changeInput={changeInput} input={input} />
      }
    >
      <TodoItemList
        todos={todos}
        removeItem={removeItem}
        checkItem={checkItem}
        changeStatus={changeStatus}
        updateItem={updateItem}
      />
    </TodoListTemplate>
  );
}

export default Function;
