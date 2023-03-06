import React from "react";
import uuid from "react-uuid";
import { useModalWindowState } from "../store";
import { useClickCoords } from "../store";
import { useTodosState } from "../store";

export default function InboxWindow() {
  const { inboxTodo, setInboxTodo, inboxTodos, setInboxTodos, setInboxIndex } =
    useTodosState();
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
        className="container p-2 sticky top-0 whitespace-normal bg-platinum border-b-2 border-b-graphite placeholder-lightgray
        dark:bg-jet dark:border-b-dogwood focus:bg-ashgray dark:focus:bg-onyx outline-graphite dark:outline-dogwood dark:placeholder-cinerous"
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
            className="p-2 w-full border-b-2 border-graphite dark:border-dogwood hover:bg-platinum cursor-default dark:hover:bg-jet"
            onContextMenu={handleRightClick}
          >
            <li>{todo}</li>
          </div>
        ))}
      </ul>
    </>
  );
}
