import React from "react";
import { useTodosState } from "../store";
import uuid from "react-uuid";

export default function TrashBin() {
  const { doneTodos } = useTodosState();

  let doneList;
  if (doneTodos.length === 0) {
    doneList = <p className="text-lightgray">Empty</p>;
  } else {
    doneList = (
      <ul>
        {doneTodos.map((todo) => (
          <li key={uuid()}>{todo}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div>{doneList}</div>
    </>
  );
}
