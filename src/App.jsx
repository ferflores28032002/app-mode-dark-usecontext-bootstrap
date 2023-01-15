import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";

const App = () => {
  const { mode, setMode } = useContext(ModeContext);

  return (
    <div
      className={`${
        mode ? "bg-light" : "bg-dark"
      }  d-flex justify-content-center align-items-center`}
      style={{ minHeight: "100vh" }}
    >
      <div className="form-check form-switch">
        <input
          className="form-check-input "
          style={{ width: "60px", height: "30px" }}
          type="checkbox"
          value={mode}
          onChange={() => setMode(!mode)}
        />
      </div>
    </div>
  );
};

export default App;
