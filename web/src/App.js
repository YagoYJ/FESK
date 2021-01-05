import { useState } from "react";
import DesktopHeader from "./components/DesktopHeader";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
import "./global.css";
import Routes from "./routes";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="App">
      {windowSize > 800 ? <DesktopHeader /> : <MobileHeader />}
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
