import React from "react";
import { useTodosState } from "../store";
import uuid from "react-uuid";

export default function WaitlistWindow() {
  const { waitlistTodos } = useTodosState();

  let waitList;
  if (waitlistTodos.length === 0) {
    waitList = <p className="text-lightgray dark:text-cinerous">Empty</p>;
  } else {
    waitList = (
      <ul>
        {waitlistTodos.map((todo) => (
          <li key={uuid()}>{todo}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="p-2">{waitList}</div>
    </>
  );
}
