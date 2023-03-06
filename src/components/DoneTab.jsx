import React from "react";
import { useTabsState } from "../store";

export default function DoneTab() {
  const {
    setInboxActive,
    setWaitlistActive,
    setProjectsActive,
    setBucketlistActive,
    setNotesActive,
    isDoneActive,
    setDoneActive,
  } = useTabsState();

  function handleDoneClick() {
    if (!isDoneActive) {
      setDoneActive(true);
      setInboxActive(false);
      setWaitlistActive(false);
      setProjectsActive(false);
      setBucketlistActive(false);
      setNotesActive(false);
    }
  }
  return (
    <>
      <div
        className={`${
          isDoneActive
            ? "box-content p-2 bg-ashgray border-t-2 border-b-2 border-graphite dark:bg-onyx dark:border-dogwood hover:cursor-default"
            : "box-content p-2 hover:bg-platinum cursor-default dark:hover:bg-jet"
        }`}
        onClick={handleDoneClick}
      >
        <h2>Done</h2>
      </div>
    </>
  );
}
