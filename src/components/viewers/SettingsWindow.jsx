import DarkmodeButton from "../DarkmodeButton";
import LoginButton from "../LoginButton.jsx";

export default function Settings() {
  return (
        <>
          <div className="bg-color text-color h-screen w-screen">
            <LoginButton />
            <DarkmodeButton />
          </div>
        </>
      );
    }