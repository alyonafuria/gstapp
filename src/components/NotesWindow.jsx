import React from "react";
import { useTodosState } from "../store";
import uuid from "react-uuid";

export default function NotesWindow() {
  const { notesTodos } = useTodosState();

  let notesList;
  if (notesTodos.length === 0) {
    notesList = <p className="text-lightgray dark:text-cinerous">Empty</p>;
  } else {
    notesList = (
      <ul>
        {notesTodos.map((todo) => (
          <li key={uuid()}>{todo}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="p-2">{notesList}</div>
    </>
  );
}
