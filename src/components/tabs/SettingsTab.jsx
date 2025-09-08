import { useTabsState } from "../../store";

export default function SettingsTab() {
  const {
    setInboxActive,
    setWaitlistActive,
    setProjectsActive,
    setBucketlistActive,
    setNotesActive,
    isDoneActive,
    setDoneActive,
    isSettingsActive,
    setSettingsActive,
  } = useTabsState();

  function handleSettingsClick() {
    if (!isSettingsActive) {
      setSettingsActive(true);
      setInboxActive(false);
      setWaitlistActive(false);
      setProjectsActive(false);
      setBucketlistActive(false);
      setNotesActive(false);
      setDoneActive(false);
    }
  }
  return (
    <>
      <div
        className={`${isSettingsActive ? "tab-active" : "tab-inactive"}`}
        onClick={handleSettingsClick}
      >
        <h2>Settings</h2>
      </div>
    </>
  );
}
