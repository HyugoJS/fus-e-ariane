const Switch = ({ state, setState }) => {
  return (
    <div>
      <button className={state ? "active" : ""} onClick={() => setState(true)}>
        On
      </button>
      <button
        className={!state ? "active" : ""}
        onClick={() => setState(false)}
      >
        Off
      </button>
    </div>
  );
};
export default Switch;
