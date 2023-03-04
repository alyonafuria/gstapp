import React from "react";
import InboxTab from "./InboxTab";
import DoneTab from "./DoneTab";
import WaitlistTab from "./WaitlistTab";
import ProjectsTab from "./ProjectsTab";
import BucketlistTab from "./BucketlistTab";
import NotesTab from "./NotesTab";

export default function MainList() {
  return (
    <>
      <ul>
        <InboxTab />
        <WaitlistTab />
        <ProjectsTab />
        <BucketlistTab />
        <NotesTab />
        <DoneTab />
      </ul>
    </>
  );
}
