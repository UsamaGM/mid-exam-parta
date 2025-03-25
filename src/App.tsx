function App() {
  return (
    <div className="bg-container-bg p-2 border-r-[15px] w-[90%] max-w-[400px]">
      <div className="flex justify-between items-center mb-1.5">
        <h1 className="text-[1.6rem] m-0">Countdown & Light Switch</h1>
        <div className="flex flex-col items-center text-[0.8rem]">
          <label className="relative inline-block w-[50px] h-[26px] mb-[4px]">
            <input
              type="checkbox"
              id="themeToggle"
              className="opacity-0 w-0 h-0"
            />
            <span className=""></span>
          </label>
          <span>Light Mode</span>
        </div>
      </div>

      <div className="timer-section">
        <div className="progress-bar">
          <div className="progress" id="progress"></div>
        </div>
        <div className="timer" id="timerDisplay">
          30s
        </div>
        <div className="btn-group">
          <button id="startButton">Start Timer</button>
          <button id="resetButton" style={{ display: "none" }}>
            Reset Timer
          </button>
        </div>
        <div className="message" id="messageArea"></div>
      </div>
    </div>
  );
}

export default App;
