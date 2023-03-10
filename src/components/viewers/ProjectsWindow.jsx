import React, { useState } from "react";
import { useTodosState } from "../../store";
import uuid from "react-uuid";

export default function ProjectsWindow() {
  const { projectsTodos } = useTodosState();
  const [projects, setProjects] = useState([]);

  let projectsList;
  if (projectsTodos.length === 0) {
    projectsList = <p className="text-empty">Empty</p>;
  } else {
    projectsList = (
      <ul>
        {projectsTodos.map((todo) => (
          <li key={uuid()} className="selection-none hover:cursor-default">
            {todo}
          </li>
        ))}
      </ul>
    );
  }

  function handleNewProject() {
    setProjects([...projects, { id: uuid(), name: "Project" }]);
  }

  function handleDeleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  return (
    <>
      <div className="p-2">{projectsList}</div>
      <button onClick={handleNewProject} className="newProjectButton">
        New Project
      </button>
      {projects.map((project) => (
        <div key={project.id} className="newProject">
          <div className="border-b border-graphite dark:border-dogwood flex justify-between">
            <h2>{project.name}</h2>
            <button onClick={() => handleDeleteProject(project.id)}>X</button>
          </div>

          <div>
            <ul>{}</ul>
          </div>
        </div>
      ))}
    </>
  );
}
