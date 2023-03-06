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
            ? "box-content p-2 bg-ashgray border-t-2 border-b-2 border-graphite dark:bg-onyx dark:border-dogwood hover:cursor-default"
            : "box-content p-2 hover:bg-platinum cursor-default dark:hover:bg-jet"
        }`}
        onClick={handleBucketlistClick}
      >
        <h2>Bucket List</h2>
      </div>
    </>
  );
}
