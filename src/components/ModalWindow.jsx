import React, { useRef, useEffect } from "react";
import uuid from "react-uuid";
import { useClickCoords } from "../store";
<<<<<<< Updated upstream

export default function ModalWindow() {
  const { xPos, yPos } = useClickCoords();
  return (
    <>
      <div
        className={`absolute h-300 w-400 border-2`}
=======
import { useTodosState } from "../store";
import { useModalWindowState } from "../store";

export default function ModalWindow() {
  const { xPos, yPos } = useClickCoords();
  const { setTodos, inboxTodos, inboxIndex } = useTodosState();
  const { setModalHeight } = useModalWindowState();

  const heightRef = useRef(null);

  useEffect(() => {
    const divHeight = heightRef.current.clientHeight;
    setModalHeight(divHeight);
  }, [setModalHeight]);

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
        ref={heightRef}
        className={`modal-window`}
>>>>>>> Stashed changes
        style={{ top: `${yPos}px`, left: `${xPos}px` }}
      >
        <ul>
          <li key={uuid()}>move to todo</li>
          <li key={uuid()}>add to calendar</li>
          <li key={uuid()}>move to waitlist</li>
          <li key={uuid()}>move to projects</li>
          <li key={uuid()}>move to notes</li>
          <li key={uuid()}>move to trash bin</li>
        </ul>
      </div>
    </>
  );
}
