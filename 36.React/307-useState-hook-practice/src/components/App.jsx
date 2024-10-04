import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(0);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  function updateTimeEverySecond() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTimeEverySecond, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
