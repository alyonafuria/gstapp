import React from "react";
import { useTodosState } from "../store";
import uuid from "react-uuid";

export default function ProjectsWindow() {
  const { projectsTodos } = useTodosState();

  let projectsList;
  if (projectsTodos.length === 0) {
    projectsList = <p>Empty</p>;
  } else {
    projectsList = (
      <ul>
        {projectsTodos.map((todo) => (
          <li key={uuid()}>{todo}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div>{projectsList}</div>
    </>
  );
}
