import React, { useState } from "react";
import uuid from "react-uuid";
import { useModalWindowState } from "../store";
import { useClickCoords } from "../store";

export default function InboxWindow() {
<<<<<<< Updated upstream:src/components/InboxWindow.jsx
  const [inboxTodo, setInboxTodo] = useState("");
  const [inboxTodos, setInboxTodos] = useState([]);
  const { setIsModalActive } = useModalWindowState();
=======
  const { inboxTodo, setInboxTodo, inboxTodos, setInboxTodos, setInboxIndex } =
    useTodosState();
  const { setIsModalActive, modalHeight, setModalHeight } =
    useModalWindowState();
>>>>>>> Stashed changes:src/components/viewers/InboxWindow.jsx
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
    if (e.pageY > window.innerHeight - modalHeight) {
      setXpos(e.pageX);
      setYpos(e.pageY - modalHeight);
    } else {
      setXpos(e.pageX);
      setYpos(e.pageY);
    }
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
