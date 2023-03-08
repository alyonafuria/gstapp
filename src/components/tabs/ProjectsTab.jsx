import React from "react";
import { useTabsState } from "../../store";

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
        className={`${isProjectsActive ? "tab-active" : "tab-inactive"}`}
        onClick={handleProjectsClick}
      >
        <h2>Projects</h2>
      </div>
    </>
  );
}
