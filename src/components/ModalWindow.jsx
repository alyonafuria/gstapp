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
    inboxId,
    setInboxId,
    deleteInboxTodo,
  } = useTodosState();
  const { setModalHeight } = useModalWindowState();

  const heightRef = useRef(null);

  useEffect(() => {
    const divHeight = heightRef.current.clientHeight;
    setModalHeight(divHeight);
  }, [setModalHeight]);

  function handleTodoClick() {
    const movedTodo = inboxTodos.find((todo) => todo.id === inboxId);
    setTodos(movedTodo);
    deleteInboxTodo(inboxId);
  }

  function handleCalendarClick() {
    window.open("https://calendar.google.com/");
    deleteInboxTodo(inboxId);
  }

  function handleWaitlistClick() {
    const movedTodo = inboxTodos.find((todo) => todo.id === inboxId);
    setWaitlistTodos(movedTodo);
    deleteInboxTodo(inboxId);
  }

  function handleProjectsClick() {
    const movedTodo = inboxTodos.find((todo) => todo.id === inboxId);
    setProjectsTodos(movedTodo);
    deleteInboxTodo(inboxId);
    setInboxId("");
  }

  function handleBucketlistClick() {
    const movedTodo = inboxTodos.find((todo) => todo.id === inboxId);
    setBucketlistTodos(movedTodo);
    deleteInboxTodo(inboxId);
  }

  function handleNotesClick() {
    const movedTodo = inboxTodos.find((todo) => todo.id === inboxId);
    setNotesTodos(movedTodo);
    deleteInboxTodo(inboxId);
  }

  function handleDeleteClick() {
    deleteInboxTodo(inboxId);
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
