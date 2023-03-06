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
        className={`${isInboxActive ? "border-2 border-graphite" : ""}`}
        onClick={handleInboxClick}
      >
        <h2>INBOX</h2>
      </div>
    </>
  );
}
