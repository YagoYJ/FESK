import { useState } from "react";
import DesktopHeader from "./components/DesktopHeader";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
import "./global.css";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="App">
      {windowSize > 800 ? <DesktopHeader /> : <MobileHeader />}
      <Footer />
    </div>
  );
}

export default App;
