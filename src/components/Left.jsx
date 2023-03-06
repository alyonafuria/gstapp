import React from "react";
import MainList from "./MainList";
import { useDarkMode } from "../store";

export default function Left(props) {
  const { darkMode, setDarkMode } = useDarkMode();

  function handleDarkMode() {
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setDarkMode(false);
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setDarkMode(true);
      }
    }
    console.log(darkMode);
  }

  return (
    <>
      <div className="min-h-full w-full border-2 flex flex-col justify-between border-graphite">
        <MainList />
        <div>
          <button
            className="border-2 border-graphite hover:bg-platinum"
            onClick={() => props.setLogin(false)}
          >
            Logout
          </button>
          {darkMode === false && (
            <button
              className="border-2 border-graphite hover:bg-platinum"
              onClick={handleDarkMode}
            >
              Dark mode
            </button>
          )}
          {darkMode === true && (
            <button
              className="border-2 border-graphite"
              onClick={handleDarkMode}
            >
              Light mode
            </button>
          )}
          <button className="border-2 border-graphite hover:bg-platinum">
            Settings
          </button>
        </div>
      </div>
    </>
  );
}
