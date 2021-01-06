import { useState } from "react";
import DesktopHeader from "../DesktopHeader";
import MobileHeader from "../MobileHeader";

export default function Header() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return windowSize > 800 ? <DesktopHeader /> : <MobileHeader />;
}
