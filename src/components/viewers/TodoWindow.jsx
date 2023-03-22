import React, { useState } from "react";
import uuid from "react-uuid";
import { useTodosState } from "../../store";

export default function TodoWindow() {
  const { todos, setDoneTodos, deleteTodo } = useTodosState();
  const [waitingClick, setWaitingClick] = useState(null);
  const [lastClick, setLastClick] = useState(0);

  function handleDoubleClick(e) {
    //Manual double click detection
    if (lastClick && e.timeStamp - lastClick < 250 && waitingClick) {
      setLastClick(0);
      clearTimeout(waitingClick);
      setWaitingClick(null);
      setTimeout(() => {
        const doneTodo = todos.find((todo) => todo.id === e.target.id);
        setDoneTodos(doneTodo);
        deleteTodo(doneTodo.id);
      }, 100);
    } else {
      setLastClick(e.timeStamp);
      setWaitingClick(
        setTimeout(() => {
          setWaitingClick(null);
        }, 251)
      );
    }
  }

  return (
    <>
      <h2>TODO</h2>
      {todos.map((todo) => (
        <li
          key={uuid()}
          id={todo.id}
          onClick={(e) => handleDoubleClick(e)}
          className="select-none hover:cursor-default hover:bg-platinum dark:hover:bg-jet pl-2"
        >
          {todo.text}
        </li>
      ))}
    </>
  );
}
