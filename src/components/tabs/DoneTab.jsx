import React from "react";
import { useTabsState } from "../../store";

export default function DoneTab() {
  const {
    setInboxActive,
    setWaitlistActive,
    setProjectsActive,
    setBucketlistActive,
    setNotesActive,
    isDoneActive,
    setDoneActive,
    setSettingsActive,
  } = useTabsState();

  function handleDoneClick() {
    if (!isDoneActive) {
      setDoneActive(true);
      setInboxActive(false);
      setWaitlistActive(false);
      setProjectsActive(false);
      setBucketlistActive(false);
      setNotesActive(false);
      setSettingsActive(false);
    }
  }
  return (
    <>
      <div
        className={`${isDoneActive ? "tab-active" : "tab-inactive"}`}
        onClick={handleDoneClick}
      >
        <h2>Done</h2>
      </div>
    </>
  );
}
