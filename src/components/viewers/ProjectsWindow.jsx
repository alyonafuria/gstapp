import React, { useState } from "react";
import { useTodosState } from "../../store";
import uuid from "react-uuid";

export default function ProjectsWindow() {
  const { projectsTodos } = useTodosState();
  const [projects, setProjects] = useState(["Project"]);

  let projectsList;
  if (projectsTodos.length === 0) {
    projectsList = <p className="text-empty">Empty</p>;
  } else {
    projectsList = (
      <ul>
        {projectsTodos.map((todo) => (
          <li key={uuid()}>{todo}</li>
        ))}
      </ul>
    );
  }

  function handleNewProject() {
    setProjects([...projects, "Project"]);
  }

  return (
    <>
      <div className="p-2">{projectsList}</div>
      <button onClick={handleNewProject} className="newProjectButton">
        New Project
      </button>
      {projects.map(() => (
        <div key={uuid()} className="newProject"></div>
      ))}
    </>
  );
}
