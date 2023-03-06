import React, { useState } from "react";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import { useModalWindowState } from "./store";
import ModalWindow from "./components/ModalWindow";

function App() {
  const [login, setLogin] = useState(false);
  const { isModalActive, setIsModalActive } = useModalWindowState();

  function handleLeftClick(e) {
    setIsModalActive(false);
  }

  if (login) {
    return (
      <>
        <div
          className="bg-lightgreen grid h-screen w-screen grid-cols-3"
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
        <div>
          <h2>Login with MetaMask</h2>
          <button
            className="border-2 border-graphite"
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <button className="border-2 border-graphite">Light theme</button>
        </div>
      </>
    );
  }
}

export default App;
