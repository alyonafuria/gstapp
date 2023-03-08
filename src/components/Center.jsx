import React from "react";
import { useTabsState } from "../store";
import InboxWindow from "./viewers/InboxWindow";
import WaitlistWindow from "./viewers/WaitlistWindow";
import ProjectsWindow from "./viewers/ProjectsWindow";
import BucketlistWindow from "./viewers/BucketlistWindow";
import NotesWindow from "./viewers/NotesWindow";
import DoneWindow from "./viewers/DoneWindow";

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
      <div className="min-h-full w-full border-t-2 border-b-2 border-graphite dark:border-dogwood overflow-y-auto">
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
