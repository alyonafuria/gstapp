import React from "react";
import uuid from "react-uuid";
import InboxTab from "./InboxTab";
import TrashBinTab from "./TrashBinTab";

export default function MainList() {
  const mainListTabNames = [
    "wait list",
    "projects",
    "bucket list",
    "notes",
    "done",
  ];

  return (
    <>
      <ul>
        <InboxTab />
        {mainListTabNames.map((tabname) => (
          <li key={uuid()}>{tabname}</li>
        ))}
        <TrashBinTab />
      </ul>
    </>
  );
}
