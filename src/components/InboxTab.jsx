import React from "react";
import { useTabsState } from "../store";

export default function InboxTab() {
  const {
    isInboxActive,
    setInboxActive,
    setWaitlistActive,
    setProjectsActive,
    setBucketlistActive,
    setNotesActive,
    setDoneActive,
  } = useTabsState();

  function handleInboxClick() {
    if (!isInboxActive) {
      setInboxActive(true);
      setWaitlistActive(false);
      setProjectsActive(false);
      setBucketlistActive(false);
      setNotesActive(false);
      setDoneActive(false);
    }
  }

  return (
    <>
      <div
        className={`${
          isInboxActive
            ? "box-content p-2 bg-ashgray border-b-2 border-graphite dark:bg-onyx dark:border-dogwood hover:cursor-default"
            : "box-content p-2 hover:bg-platinum cursor-default dark:hover:bg-jet"
        }`}
        onClick={handleInboxClick}
      >
        <h2>INBOX</h2>
      </div>
    </>
  );
}
