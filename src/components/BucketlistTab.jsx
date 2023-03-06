import React from "react";
import { useTabsState } from "../store";

export default function BucketlistTab() {
  const {
    setInboxActive,
    setWaitlistActive,
    setProjectsActive,
    isBucketlistActive,
    setBucketlistActive,
    setNotesActive,
    setDoneActive,
  } = useTabsState();

  function handleBucketlistClick() {
    if (!isBucketlistActive) {
      setBucketlistActive(true);
      setInboxActive(false);
      setWaitlistActive(false);
      setProjectsActive(false);
      setNotesActive(false);
      setDoneActive(false);
    }
  }
  return (
    <>
      <div
        className={`${
          isBucketlistActive
            ? "bg-ashgray border-2 border-graphite"
            : "hover:bg-platinum"
        }`}
        onClick={handleBucketlistClick}
      >
        <h2>Bucket List</h2>
      </div>
    </>
  );
}
