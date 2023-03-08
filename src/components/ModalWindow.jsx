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
        className={`modal-window`}
        style={{ top: `${yPos}px`, left: `${xPos}px` }}
      >
        <ul>
          <li key={uuid()} onClick={handleTodoClick} className="modal-item">
            move to todo
          </li>
          <li key={uuid()} className="modal-item">
            add to calendar
          </li>
          <li key={uuid()} className="modal-item">
            move to waitlist
          </li>
          <li key={uuid()} className="modal-item">
            move to projects
          </li>
          <li key={uuid()} className="modal-item">
            move to notes
          </li>
          <li key={uuid()} className="modal-item" onClick={handleDeleteClick}>
            delete
          </li>
        </ul>
      </div>
    </>
  );
}
