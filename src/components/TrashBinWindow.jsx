import React, { useState } from "react";
import { useDeletedTodosState } from "../store";
import uuid from "react-uuid";

export default function TrashBin() {
  const { deletedTodos } = useDeletedTodosState;

  let trashList;
  if (!deletedTodos) {
    trashList = <p>Empty</p>;
  } else {
    trashList = (
      <ul>
        {deletedTodos.map((todo) => (
          <li key={uuid()}>{todo}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div>{trashList}</div>
    </>
  );
}
