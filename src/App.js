import React, { useState } from "react";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import { useModalWindowState } from "./store";
import { useDarkMode } from "./store";
import ModalWindow from "./components/ModalWindow";

function App() {
  const [login, setLogin] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const { isModalActive, setIsModalActive } = useModalWindowState();

  function handleLeftClick() {
    setIsModalActive(false);
  }

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
  }

  if (login) {
    return (
      <>
        <div
          className="bg-alabaster grid h-screen w-screen grid-cols-3 text-graphite dark:bg-eerieblack dark:text-dogwood"
          onClick={handleLeftClick}
        >
          <Left setLogin={setLogin} />
          <Center />
          <Right />
          {isModalActive && <ModalWindow />}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="bg-alabaster text-graphite h-screen w-screen dark:bg-eerieblack dark:text-dogwood">
          <h2>Login with MetaMask</h2>
          <button
            className="p-1 border-2 border-graphite dark:border-dogwood hover:bg-platinum dark:hover:bg-jet"
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          {darkMode === false && (
            <button
              className="p-1 border-2 border-graphite hover:bg-platinum"
              onClick={handleDarkMode}
            >
              Dark mode
            </button>
          )}
          {darkMode === true && (
            <button
              className="p-1 border-2 border-graphite dark:border-dogwood dark:hover:bg-jet"
              onClick={handleDarkMode}
            >
              Light mode
            </button>
          )}
        </div>
      </>
    );
  }
}

export default App;
