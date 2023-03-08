import React from "react";
import TodoWindow from "./viewers/TodoWindow";

export default function Right() {
  return (
    <>
      <div className="p-2 min-h-full w-full border-2 border-graphite dark:border-dogwood">
        <TodoWindow />
      </div>
    </>
  );
}
