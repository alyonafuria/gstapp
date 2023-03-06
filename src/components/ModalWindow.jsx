import React from "react";
import uuid from "react-uuid";
import { useClickCoords } from "../store";
import { useTodosState } from "../store";

export default function ModalWindow() {
  const { xPos, yPos } = useClickCoords();
  const { setTodos, inboxTodos, inboxIndex } = useTodosState();

  function handleTodoClick() {
    const movedTodo = inboxTodos.splice(inboxIndex, 1).join(", ");
    setTodos(movedTodo);
  }

  function handleDeleteClick() {
    inboxTodos.splice(inboxIndex, 1);
  }

  return (
    <>
      <div
        className={`absolute h-300 w-400 border-2 z-10 bg-alabaster dark:bg-eerieblack`}
        style={{ top: `${yPos}px`, left: `${xPos}px` }}
      >
        <ul>
          <li
            key={uuid()}
            onClick={handleTodoClick}
            className="hover:bg-platinum hover:border-b-2  hover:border-graphite cursor-default focus:bg-onyx dark:hover:bg-jet dark:hover:border-dogwood dark:focus:bg-cinerous"
          >
            move to todo
          </li>
          <li
            key={uuid()}
            className="hover:bg-platinum hover:border-b-2 hover:border-t-2 hover:border-graphite cursor-default focus:bg-onyx dark:hover:bg-jet dark:hover:border-dogwood dark:focus:bg-cinerous"
          >
            add to calendar
          </li>
          <li
            key={uuid()}
            className="hover:bg-platinum hover:border-b-2 hover:border-t-2 hover:border-graphite cursor-default focus:bg-onyx dark:hover:bg-jet dark:hover:border-dogwood dark:focus:bg-cinerous"
          >
            move to waitlist
          </li>
          <li
            key={uuid()}
            className="hover:bg-platinum hover:border-b-2 hover:border-t-2 hover:border-graphite cursor-default focus:bg-onyx dark:hover:bg-jet dark:hover:border-dogwood dark:focus:bg-cinerous"
          >
            move to projects
          </li>
          <li
            key={uuid()}
            className="hover:bg-platinum hover:border-b-2 hover:border-t-2 hover:border-graphite cursor-default focus:bg-onyx dark:hover:bg-jet dark:hover:border-dogwood dark:focus:bg-cinerous"
          >
            move to notes
          </li>
          <li
            key={uuid()}
            className="hover:bg-platinum hover:border-t-2 hover:border-graphite cursor-default focus:bg-onyx dark:hover:bg-jet dark:hover:border-dogwood dark:focus:bg-cinerous"
            onClick={handleDeleteClick}
          >
            delete
          </li>
        </ul>
      </div>
    </>
  );
}
