import React from "react";
import MainList from "./MainList";

export default function Left(props) {
  return (
    <>
      <div className="min-h-full w-full border-2 flex flex-col justify-between border-graphite">
        <MainList />
        <div>
          <button
            className="border-2 border-graphite"
            onClick={() => props.setLogin(false)}
          >
            Logout
          </button>
          <button className="border-2 border-graphite">Dark theme</button>
          <button className="border-2 border-graphite">Settings</button>
        </div>
      </div>
    </>
  );
}
