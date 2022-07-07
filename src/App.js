import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.scss";

import ColorBox from "./components/ColorBox";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love you!" },
    { id: 2, title: "I love you!hihi" },
    { id: 3, title: "I love you!hehe" },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
