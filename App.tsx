import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState<string | undefined>("on");
  const [time, setTime] = useState<number>(30);
  const [progress, setProgress] = useState<number>(0);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (time > 0 && hasRun) {
      setTimeout(() => setTime((t) => t - 1), 1000);
      setProgress((p) => p + 1);
    }
  }, [time, hasRun]);

  function handleTimer() {
    setHasRun(true);
  }

  function handleReset() {
    setTime(30);
    setHasRun(false);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input
              type="checkbox"
              id="themeToggle"
              value={isDark}
              onChange={() => setIsDark(isDark === "on" ? "off" : "on")}
            />
            <span className="slider"></span>
          </label>
          <span>Light Mode</span>
        </div>
      </div>

      <div className="timer-section">
        <div className="progress-bar">
          <div className={`progress w-[50%]`} id="progress"></div>
        </div>
        <div className="timer" id="timerDisplay">
          {time}s
        </div>
        <div className="btn-group">
          <button id="startButton" onClick={handleTimer}>
            Start Timer
          </button>
          <button id="resetButton" onClick={handleReset}>
            Reset Timer
          </button>
        </div>
        <div className="message" id="messageArea"></div>
      </div>
    </div>
  );
}

export default App;
