
import { useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  const startProgress = () => {
    if (progress >= 100) return;

    setCompleted(false);

    let current = progress;

    const timer = setInterval(() => {
      current = Math.min(current + 5, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
        setCompleted(true);
      }
    }, 200);
  };

  const resetProgress = () => {
    setProgress(0);
    setCompleted(false);
  };

  return (
    <div className="progress-container">
      <h2>Progress Bar</h2>

      <div className="progress-info">
        <span>{completed ? "Completed!" : "Loading..."}</span>
        <span>{progress}%</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button onClick={startProgress} disabled={progress >= 100}>
        {completed ? "Completed" : "Start Progress"}
      </button>

      <button onClick={resetProgress}>
        Reset
      </button>
    </div>
  );
}

export default ProgressBar;
