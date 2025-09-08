import React from "react";
import MainList from "./MainList";

export default function Left(props) {
  return (
    <>
      <div className="min-h-full w-full border-2 flex flex-col justify-between border-graphite dark:border-dogwood">
        <MainList />
      </div>
    </>
  );
}
