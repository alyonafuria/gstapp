import React, { useState } from "react";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import { useModalWindowState } from "./store";
import ModalWindow from "./components/ModalWindow";
import DarkmodeButton from "./components/DarkmodeButton";

function App() {
  const [login, setLogin] = useState(false);

  const { isModalActive, setIsModalActive } = useModalWindowState();

  function handleLeftClick() {
    setIsModalActive(false);
  }

  if (login) {
    return (
      <>
        <div
          className="bg-color text-color grid h-screen w-screen grid-cols-3"
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
        <div className="bg-color text-color h-screen w-screen">
          <h2>Login with MetaMask</h2>
          <button
            className="p-1 border-2 border-graphite dark:border-dogwood hover:bg-platinum dark:hover:bg-jet"
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <DarkmodeButton />
        </div>
      </>
    );
  }
}

export default App;
