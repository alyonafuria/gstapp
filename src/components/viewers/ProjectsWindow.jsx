import React, { useState, useRef, useEffect } from "react";
import { useTodosState } from "../../store";
import { useProjectsState } from "../../store";
import uuid from "react-uuid";

export default function ProjectsWindow(props) {
  const { projectsTodos } = useTodosState();
  const { projects, setProjects, filterProjects, updateProjects } =
    useProjectsState();
  const [isEdited, setIsEdited] = useState(false);
  const [projectID, setProjectID] = useState();
  const [projectName, setProjectName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdited]);

  function handleNewProject() {
    setProjects({ id: uuid(), name: "Project", projectTodos: [] });
  }

  function handleDeleteProject(id) {
    filterProjects(projects.filter((project) => project.id !== id));
  }

  function handleDoubleClick(id) {
    setProjectID(id);
    setIsEdited(true);
  }

  function handlePressEnter(e, name, id) {
    if (e.key === "Enter" && projectName !== "") {
      projects.find((x) => x.id === id).name = projectName;
      updateProjects();
      setIsEdited(false);
      setProjectName("");
    }
  }
  return (
    <>
      <div className="p-2">
        {projectsTodos.length === 0 ? (
          <p className="text-empty">Empty</p>
        ) : (
          <ul>
            {projectsTodos.map((todo) => (
              <li
                key={todo.id}
                className="selection-none hover:cursor-default container"
              >
                {todo.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleNewProject} className="newProjectButton">
        New Project
      </button>
      {projects.map((project) => (
        <div key={project.id} className="newProject">
          <div className="border-b border-graphite dark:border-dogwood flex justify-between">
            {project.id === projectID && isEdited ? (
              <input
                type="text"
                ref={inputRef}
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                onKeyDown={(e) => handlePressEnter(e, project.name, project.id)}
              />
            ) : (
              <h2 onDoubleClick={() => handleDoubleClick(project.id)}>
                {project.name}
              </h2>
            )}

            <button onClick={() => handleDeleteProject(project.id)}>X</button>
          </div>
          <div>
            <ul className="project-todos">
              {project.projectTodos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
