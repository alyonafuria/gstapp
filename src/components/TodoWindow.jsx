import React, { useState } from "react";
import uuid from "react-uuid";

export default function TodoWindow() {
  const [todos] = useState([]);

  return (
    <>
      <h2>TODO</h2>
      {todos.map((todo) => (
        <li key={uuid()}>{todo}</li>
      ))}
    </>
  );
}
