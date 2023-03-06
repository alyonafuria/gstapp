import React from "react";
import { useTabsState } from "../store";

export default function ProjectsTab() {
  const {
    setInboxActive,
    setWaitlistActive,
    isProjectsActive,
    setProjectsActive,
    setBucketlistActive,
    setNotesActive,
    setDoneActive,
  } = useTabsState();

  function handleProjectsClick() {
    if (!isProjectsActive) {
      setProjectsActive(true);
      setInboxActive(false);
      setWaitlistActive(false);
      setBucketlistActive(false);
      setNotesActive(false);
      setDoneActive(false);
    }
  }

  return (
    <>
      <div
        className={`${
          isProjectsActive
            ? "box-content p-2 bg-ashgray border-t-2 border-b-2 border-graphite dark:bg-onyx dark:border-dogwood hover:cursor-default"
            : "box-content p-2 hover:bg-platinum cursor-default dark:hover:bg-jet"
        }`}
        onClick={handleProjectsClick}
      >
        <h2>Projects</h2>
      </div>
    </>
  );
}
