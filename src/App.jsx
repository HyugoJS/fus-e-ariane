import { useState } from "react";

import "./App.css";
import Switch from "./components/Switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <div className="parent-div">
        <div className="on-off-div">
          <Switch state={switch1} setState={setSwitch1} />
          <Switch state={switch2} setState={setSwitch2} />
          <Switch state={switch3} setState={setSwitch3} />
          {/* <div>
            <button
              className={switch1 ? "active" : ""}
              onClick={() => setSwitch1(true)}
            >
              On
            </button>
            <button
              className={!switch1 ? "active" : ""}
              onClick={() => setSwitch1(false)}
            >
              Off
            </button>
          </div>
          <div>
            <button
              className={switch2 ? "active" : ""}
              onClick={() => setSwitch2(true)}
            >
              On
            </button>
            <button
              className={!switch2 ? "active" : ""}
              onClick={() => setSwitch2(false)}
            >
              Off
            </button>
          </div>
          <div>
            <button
              className={switch3 ? "active" : ""}
              onClick={() => setSwitch3(true)}
            >
              On
            </button>
            <button
              className={!switch3 ? "active" : ""}
              onClick={() => setSwitch3(false)}
            >
              Off
            </button>
          </div> */}
        </div>
        {switch1 && switch2 && switch3 ? (
          <p style={{ backgroundColor: "green" }}>GO!</p>
        ) : (
          <p>No way!</p>
        )}
      </div>
      <button
        onClick={() => {
          setSwitch1(false);
          setSwitch2(false);
          setSwitch3(false);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
