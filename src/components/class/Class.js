import React, { Component } from "react";
import TodoListTemplate from "./TodoListTemplate";
import Form from "./Form";
import TodoItemList from "./TodoItemList";

const init = () => {
  if (!localStorage.getItem("classTodos")) {
    localStorage.setItem("classTodos", "[]");
  }
  return localStorage.getItem("classTodos");
};

class Class extends Component {
  // state = {
  //   input: '',
  //   todos: [
  //     { 'id': 0, 'text': ' 리액트 소개', 'checked': false },
  //     { id: 1, text: 'JSX 사용해보기', checked: true },
  //     { id: 2, text: '라이프 사이클 이해하기', checked: false },
  //   ]
  // }
  state = {
    input: "",
    classTodos: JSON.parse(init()),
  };

  loadTodos = () => {
    const classTodos = JSON.parse(localStorage.getItem("classTodos"));
    this.setState({ classTodos });
  };

  createItem = () => {
    let classTodos = JSON.parse(localStorage.getItem("classTodos"));
    if (classTodos.length === 0) {
      classTodos.push({
        id: 0,
        text: this.state.input,
        checked: false,
        status: "text",
      });
    } else {
      classTodos.push({
        id: classTodos[classTodos.length - 1].id + 1,
        text: this.state.input,
        checked: false,
        status: "text",
      });
    }

    classTodos = JSON.stringify(classTodos);
    localStorage.setItem("classTodos", classTodos);
    this.setState({ input: "" });
    this.loadTodos();
  };

  onEnter = (e) => {
    if (e.key === "Enter") {
      this.createItem();
    }
  };

  changeInput = (e) => {
    this.setState({ input: e.target.value });
  };

  deleteItem = (id) => {
    let classTodos = JSON.parse(localStorage.getItem("classTodos"));
    classTodos = classTodos.filter((classTodo) => classTodo.id !== id);
    this.setState({ classTodos });
    classTodos = JSON.stringify(classTodos);
    localStorage.setItem("classTodos", classTodos);
    this.loadTodos();
  };

  checkItem = (id) => {
    let classTodos = JSON.parse(localStorage.getItem("classTodos"));
    classTodos = classTodos.map((classTodo) => {
      if (classTodo.id === id && classTodo.status === "text") {
        classTodo.checked = !classTodo.checked;
        return classTodo;
      } else {
        return classTodo;
      }
    });

    this.setState({ classTodos });
    classTodos = JSON.stringify(classTodos);
    localStorage.setItem("classTodos", classTodos);
    this.loadTodos();
  };

  toggleItemStatus = (id) => {
    let classTodos = JSON.parse(localStorage.getItem("classTodos"));
    classTodos = classTodos.map((classTodo) => {
      if (classTodo.id === id) {
        if (classTodo.status === "text") {
        }
        classTodo.status = classTodo.status === "text" ? "update" : "text";
        return classTodo;
      } else {
        return classTodo;
      }
    });
    this.setState({ classTodos });
    classTodos = JSON.stringify(classTodos);
    localStorage.setItem("classTodos", classTodos);
    this.loadTodos();
  };

  updateItem = (id, text) => {
    this.toggleItemStatus(id);
    let classTodos = JSON.parse(localStorage.getItem("classTodos"));
    classTodos = classTodos.map((classTodo) => {
      if (classTodo.id === id) {
        classTodo.text = text;
        return classTodo;
      } else {
        return classTodo;
      }
    });
    classTodos = JSON.stringify(classTodos);

    this.setState({ classTodos });
    localStorage.setItem("classTodos", classTodos);
    this.loadTodos();
  };

  render() {
    const { classTodos } = this.state;
    const {
      createItem,
      onEnter,
      changeInput,
      deleteItem,
      checkItem,
      toggleItemStatus,
      updateItem,
    } = this;
    return (
      <TodoListTemplate
        form={
          <Form
            createItem={createItem}
            onEnter={onEnter}
            changeInput={changeInput}
            text={this.state.input}
          />
        }
      >
        <TodoItemList
          todos={classTodos}
          deleteItem={deleteItem}
          checkItem={checkItem}
          toggleItemStatus={toggleItemStatus}
          updateItem={updateItem}
        />
      </TodoListTemplate>
    );
  }
}

export default Class;
