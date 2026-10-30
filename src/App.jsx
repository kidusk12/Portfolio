import { useEffect, useState } from "react";
import Home from "./components/Home.jsx";
import Resume from "./pages/Resume.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  const isResume = window.location.pathname.replace(/\/$/, "") === "/resume";
  return isResume ? (
    <Resume />
  ) : (
    <Home theme={theme} toggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
  );
}
