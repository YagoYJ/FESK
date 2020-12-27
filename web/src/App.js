import { useState } from "react";
import DesktopHeader from "./components/DesktopHeader";
import MobileHeader from "./components/MobileHeader";
import "./global.css";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="App">
      {windowSize > 800 ? <DesktopHeader /> : <MobileHeader />}
    </div>
  );
}

export default App;
