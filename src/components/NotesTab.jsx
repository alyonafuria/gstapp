import React from "react";
import { useTabsState } from "../store";

export default function NotesTab() {
  const {
    setInboxActive,
    setWaitlistActive,
    setProjectsActive,
    setBucketlistActive,
    isNotesActive,
    setNotesActive,
    setDoneActive,
  } = useTabsState();

  function handleNotesClick() {
    if (!isNotesActive) {
      setNotesActive(true);
      setInboxActive(false);
      setWaitlistActive(false);
      setProjectsActive(false);
      setBucketlistActive(false);
      setDoneActive(false);
    }
  }

  return (
    <>
      <div
        className={`${
          isNotesActive
            ? "box-content p-2 bg-ashgray border-t-2 border-b-2 border-graphite dark:bg-onyx dark:border-dogwood hover:cursor-default"
            : "box-content p-2 hover:bg-platinum cursor-default dark:hover:bg-jet"
        }`}
        onClick={handleNotesClick}
      >
        <h2>Notes</h2>
      </div>
    </>
  );
}
