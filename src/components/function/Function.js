import React, { Component } from "react";
import TodoListTemplate from "./TodoListTemplate";
import Form from "./Form";
import TodoItemList from "./TodoItemList";

class Function extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: "",
    todos: [
      { id: 0, text: " 리액트 소개", checked: false },
      { id: 1, text: "JSX 사용해보기", checked: true },
      { id: 2, text: "라이프 사이클 이해하기", checked: false },
    ],
  };
  render() {
    const { todos } = this.state;

    return (
      <TodoListTemplate form={<Form />}>
        <TodoItemList todos={todos} />
      </TodoListTemplate>
    );
  }
}

export default Function;
