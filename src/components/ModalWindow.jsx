import React from "react";
import uuid from "react-uuid";
import { useClickCoords } from "../store";

export default function ModalWindow() {
  const { xPos, yPos } = useClickCoords();
  return (
    <>
      <div
        className={`absolute h-300 w-400 border-2`}
        style={{ top: `${yPos}px`, left: `${xPos}px` }}
      >
        <ul>
          <li key={uuid()}>move to todo</li>
          <li key={uuid()}>add to calendar</li>
          <li key={uuid()}>move to waitlist</li>
          <li key={uuid()}>move to projects</li>
          <li key={uuid()}>move to notes</li>
          <li key={uuid()}>move to trash bin</li>
        </ul>
      </div>
    </>
  );
}
