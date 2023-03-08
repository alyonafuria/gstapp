import React from "react";
import MainList from "./MainList";
import DarkmodeButton from "./DarkmodeButton";

export default function Left(props) {
  return (
    <>
      <div className="min-h-full w-full border-2 flex flex-col justify-between border-graphite dark:border-dogwood">
        <MainList />
        <div>
          <button className="menu-btn" onClick={() => props.setLogin(false)}>
            Logout
          </button>
          <DarkmodeButton />
          <button className="menu-btn">Settings</button>
        </div>
      </div>
    </>
  );
}
