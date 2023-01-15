import { useState } from "react";
import { ModeContext } from "./ModeContext";

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};
