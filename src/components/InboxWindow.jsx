import React, { useState } from "react";
import uuid from "react-uuid";
import { useModalWindowState } from "../store";
import { useClickCoords } from "../store";

export default function InboxWindow() {
  const [inboxTodo, setInboxTodo] = useState("");
  const [inboxTodos, setInboxTodos] = useState([]);
  const { setIsModalActive } = useModalWindowState();
  const { setXpos, setYpos } = useClickCoords();

  function handlePressEnter(e) {
    if (e.key === "Enter" && inboxTodo !== "") {
      setInboxTodos([...inboxTodos, inboxTodo]);
      setInboxTodo("");
    }
  }

  function handleRightClick(e) {
    e.preventDefault();
    setIsModalActive(true);
    setXpos(e.pageX);
    setYpos(e.pageY);
  }

  return (
    <>
      <input
        className="whitespace-normal"
        type="text"
        name="todo"
        value={inboxTodo}
        placeholder="type something"
        onChange={(e) => setInboxTodo(e.target.value)}
        onKeyDown={handlePressEnter}
      />

      <ul>
        {inboxTodos.map((todo) => (
          <div
            key={uuid()}
            className="flex items-start justify-between border-2"
            onContextMenu={handleRightClick}
          >
            <li>{todo}</li>
            <button>···</button>
          </div>
        ))}
      </ul>
    </>
  );
}
