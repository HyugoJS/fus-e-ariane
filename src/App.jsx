import { useState } from "react";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <div className="parent-div">
        <div className="on-off-div">
          <div>
            <button
              className={`on-button ${switch1 ? "active" : ""}`}
              onClick={() => setSwitch1(true)}
            >
              On
            </button>
            <button
              className={`off-button ${!switch1 ? "active" : ""}`}
              onClick={() => setSwitch1(false)}
            >
              Off
            </button>
          </div>
          <div>
            <button
              className={`on-button ${switch2 ? "active" : ""}`}
              onClick={() => setSwitch2(true)}
            >
              On
            </button>
            <button
              className={`off-button ${!switch2 ? "active" : ""}`}
              onClick={() => setSwitch2(false)}
            >
              Off
            </button>
          </div>
          <div>
            <button
              className={`on-button ${switch3 ? "active" : ""}`}
              onClick={() => setSwitch3(true)}
            >
              On
            </button>
            <button
              className={`off-button ${!switch3 ? "active" : ""}`}
              onClick={() => setSwitch3(false)}
            >
              Off
            </button>
          </div>
        </div>
        <p>No way !</p>
      </div>
    </>
  );
}

export default App;
