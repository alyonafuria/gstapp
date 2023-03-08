import React from "react";
import { useTodosState } from "../../store";
import uuid from "react-uuid";

export default function BucketlistWindow() {
  const { bucketlistTodos } = useTodosState();

  let bucketList;
  if (bucketlistTodos.length === 0) {
    bucketList = <p className="text-empty">Empty</p>;
  } else {
    bucketList = (
      <ul>
        {bucketlistTodos.map((todo) => (
          <li key={uuid()}>{todo}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="p-2">{bucketList}</div>
    </>
  );
}
