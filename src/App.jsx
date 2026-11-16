
import React, { useState } from "react";
import "./App.css";

function App() {

  // Counter State
  const [count, setCount] = useState(0);

  // Information State
  const [showInfo, setShowInfo] = useState(false);

  // Theme State
  const [darkMode, setDarkMode] = useState(false);

  // Increase Counter
  const increase = () => {
    setCount(count + 1);
  };

  // Decrease Counter
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset Counter
  const reset = () => {
    setCount(0);
  };

  // Toggle Information
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  // Toggle Theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <div className="container">

        <h1>React Counter App</h1>

        <p className="subtitle">
          Manage your counter with simple settings
        </p>

        {/* Counter Display */}
        <div className="counter-box">

          <h2>Current Count</h2>

          <h1 className="count">{count}</h1>

          <div className="buttons">

            <button className="increase" onClick={increase}>
              Increase +
            </button>

            <button className="decrease" onClick={decrease}>
              Decrease -
            </button>

            <button className="reset" onClick={reset}>
              Reset
            </button>

          </div>

        </div>

        {/* Settings Panel */}
        <div className="settings">

          <h2>Settings Panel</h2>

          <button onClick={toggleInfo}>
            {showInfo ? "Hide Information" : "Show Information"}
          </button>

          <button onClick={toggleTheme}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Conditional Rendering */}
          {showInfo && (
            <div className="info">
              <h3>Counter Information</h3>
              <p>Current Value: {count}</p>
              <p>You can increase or decrease the counter.</p>
              <p>The counter cannot go below zero.</p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default App;
