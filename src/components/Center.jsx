import React from "react";
import { useTabsState } from "../store";
import InboxWindow from "./InboxWindow";
import WaitlistWindow from "./WaitlistWindow";
import ProjectsWindow from "./ProjectsWindow";
import BucketlistWindow from "./BucketlistWindow";
import NotesWindow from "./NotesWindow";
import DoneWindow from "./DoneWindow";

export default function Center() {
  const {
    isInboxActive,
    isWaitlistActive,
    isProjectsActive,
    isBucketlistActive,
    isNotesActive,
    isDoneActive,
  } = useTabsState();

  return (
    <>
      <div className="min-h-full w-full border-2 border-black overflow-y-auto">
        {isInboxActive && <InboxWindow />}
        {isWaitlistActive && <WaitlistWindow />}
        {isProjectsActive && <ProjectsWindow />}
        {isBucketlistActive && <BucketlistWindow />}
        {isNotesActive && <NotesWindow />}
        {isDoneActive && <DoneWindow />}
      </div>
    </>
  );
}
