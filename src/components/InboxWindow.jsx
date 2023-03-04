import React from "react";
import uuid from "react-uuid";
import { useModalWindowState } from "../store";
import { useClickCoords } from "../store";
import { useInboxTodosState } from "../store";

export default function InboxWindow() {
  const { inboxTodo, setInboxTodo, inboxTodos, setInboxTodos, setInboxIndex } =
    useInboxTodosState();
  const { setIsModalActive } = useModalWindowState();
  const { setXpos, setYpos } = useClickCoords();

  function handlePressEnter(e) {
    if (e.key === "Enter" && inboxTodo !== "") {
      setInboxTodos(inboxTodo);
      setInboxTodo("");
    }
  }

  function handleRightClick(e) {
    e.preventDefault();
    setInboxIndex(inboxTodos.indexOf(e.target.textContent));
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
            className="w-full border border-black
            flex items-start justify-between"
            onContextMenu={handleRightClick}
          >
            <li>{todo}</li>
          </div>
        ))}
      </ul>
    </>
  );
}
