import React from "react";
import { useTabsState } from "../../store";

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
        className={`${isNotesActive ? "tab-active" : "tab-inactive"}`}
        onClick={handleNotesClick}
      >
        <h2>Notes</h2>
      </div>
    </>
  );
}
