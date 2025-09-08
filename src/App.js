import React, { useState } from "react";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import { useModalWindowState } from "./store";
import ModalWindow from "./components/ModalWindow";
import DarkmodeButton from "./components/DarkmodeButton";
import MobileTabs from "./components/MobileTabs";
import LoginButton from "./components/LoginButton";
import { useLogin } from "./store";

function App() {
  const {isLogged, setLogged } = useLogin();
  const { isModalActive, setIsModalActive } = useModalWindowState();

  // Detect if screen is less than medium size
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleLeftClick() {
    setIsModalActive(false);
  }

  if (isLogged) {
    return (
      <>
        <div
          className="bg-color text-color grid h-screen w-screen grid-cols-3"
          onClick={handleLeftClick}
        >
          <Left setLogged={setLogged} />
          <Center />
          <Right />
          {isModalActive && <ModalWindow />}
        </div>
        {/* Show mobile tabs only on mobile */}
        <MobileTabs visible={isMobile} />
      </>
    );
  } else {
    return (
      <>
        <div className="bg-color text-color h-screen w-screen">
          <h2>Login with Wallet</h2>
          <LoginButton />
          <DarkmodeButton />
        </div>
      </>
    );
  }
}

export default App;
