import React from "react";
import InboxTab from "./tabs/InboxTab";
import DoneTab from "./tabs/DoneTab";
import WaitlistTab from "./tabs/WaitlistTab";
import ProjectsTab from "./tabs/ProjectsTab";
import BucketlistTab from "./tabs/BucketlistTab";
import NotesTab from "./tabs/NotesTab";
import SettingsTab from "./tabs/SettingsTab";

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
        <SettingsTab />
      </ul>
    </>
  );
}
