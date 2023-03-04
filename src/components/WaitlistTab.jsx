import React from "react";
import { useTabsState } from "../store";

export default function WaitlistTab() {
  const {
    setInboxActive,
    isWaitlistActive,
    setWaitlistActive,
    setProjectsActive,
    setBucketlistActive,
    setNotesActive,
    setDoneActive,
  } = useTabsState();

  function handleWaitlistClick() {
    if (!isWaitlistActive) {
      setWaitlistActive(true);
      setInboxActive(false);
      setProjectsActive(false);
      setBucketlistActive(false);
      setNotesActive(false);
      setDoneActive(false);
    }
  }
  return (
    <>
      <div
        className={`${isWaitlistActive ? "border-2 border-black" : ""}`}
        onClick={handleWaitlistClick}
      >
        <h2>Waitlist</h2>
      </div>
    </>
  );
}
