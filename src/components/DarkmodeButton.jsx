import React, { useEffect } from "react";
import { useDarkMode } from "../store";

export default function DarkmodeButton() {
  const { darkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.remove("dark");
        setDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("color-theme", "dark");
        setDarkMode(true);
      } else {
        localStorage.setItem("color-theme", "light");
        setDarkMode(false);
      }
    }
  }, [darkMode, setDarkMode]);

  function handleDarkMode() {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setDarkMode(true);
    }
  }
  return (
    <button className="menu-btn" onClick={handleDarkMode}>
      {darkMode ? "Light mode" : "Dark mode"}
    </button>
  );
}
