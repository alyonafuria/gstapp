import React, { useRef, useEffect } from "react";
import uuid from "react-uuid";
import { useClickCoords } from "../store";
import { useTodosState } from "../store";
import { useModalWindowState } from "../store";

export default function ModalWindow() {
  const { xPos, yPos } = useClickCoords();
  const {
    setTodos,
    setWaitlistTodos,
    setProjectsTodos,
    setBucketlistTodos,
    setNotesTodos,
    inboxTodos,
    inboxIndex,
  } = useTodosState();
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

  function handleCalendarClick() {
    window.open("https://calendar.google.com/");
  }

  function handleWaitlistClick() {
    const movedTodo = inboxTodos.splice(inboxIndex, 1).join(", ");
    setWaitlistTodos(movedTodo);
  }

  function handleProjectsClick() {
    const movedTodo = inboxTodos.splice(inboxIndex, 1).join(", ");
    setProjectsTodos(movedTodo);
  }

  function handleBucketlistClick() {
    const movedTodo = inboxTodos.splice(inboxIndex, 1).join(", ");
    setBucketlistTodos(movedTodo);
  }

  function handleNotesClick() {
    const movedTodo = inboxTodos.splice(inboxIndex, 1).join(", ");
    setNotesTodos(movedTodo);
  }

  function handleDeleteClick() {
    inboxTodos.splice(inboxIndex, 1);
  }

  return (
    <>
      <div
        ref={heightRef}
        className={`modal-window`}
        style={{ top: `${yPos}px`, left: `${xPos}px` }}
      >
        <ul>
          <li key={uuid()} onClick={handleTodoClick} className="modal-item">
            move to To Do
          </li>
          <li key={uuid()} onClick={handleCalendarClick} className="modal-item">
            add to Calendar
          </li>
          <li key={uuid()} onClick={handleWaitlistClick} className="modal-item">
            move to Waitlist
          </li>
          <li key={uuid()} onClick={handleProjectsClick} className="modal-item">
            move to Projects
          </li>
          <li
            key={uuid()}
            onClick={handleBucketlistClick}
            className="modal-item"
          >
            move to Bucket List
          </li>
          <li key={uuid()} onClick={handleNotesClick} className="modal-item">
            move to Notes
          </li>
          <li key={uuid()} className="modal-item" onClick={handleDeleteClick}>
            Delete
          </li>
        </ul>
      </div>
    </>
  );
}
