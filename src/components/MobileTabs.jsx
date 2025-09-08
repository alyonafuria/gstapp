import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import all tab components
import InboxTab from "./tabs/InboxTab";
// import TodoTab from "./tabs/TodoTab"; // create if needed
import ProjectsTab from "./tabs/ProjectsTab";
import WaitlistTab from "./tabs/WaitlistTab";
import NotesTab from "./tabs/NotesTab";
import BucketlistTab from "./tabs/BucketlistTab";
import DoneTab from "./tabs/DoneTab";
// import SettingsTab from "./tabs/SettingsTab"; // create if needed

// Placeholder components for missing tabs
const TodoTab = () => <div>To Do</div>;
const SettingsTab = () => <div>Settings</div>;
const EmptyTab = () => <div></div>;
const MoreLessTab = () => <div>More/Less</div>;

export default function MobileTabs({ visible }) {
  if (!visible) return null;
  return (
    <div className="mobile-tabs">
      <Tabs>
        <TabList>
          <Tab><InboxTab /></Tab>
          <Tab><TodoTab /></Tab>
          <Tab><ProjectsTab /></Tab>
          <Tab><MoreLessTab /></Tab>
          <Tab><WaitlistTab /></Tab>
          <Tab><NotesTab /></Tab>
          <Tab><BucketlistTab /></Tab>
          <Tab><DoneTab /></Tab>
          <Tab><SettingsTab /></Tab>
          <Tab><EmptyTab /></Tab>
        </TabList>
        {/* TabPanels can be filled as needed */}
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
}
