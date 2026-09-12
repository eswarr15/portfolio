"use client";

import { useEffect, useState } from "react";

type ViewMode = "full" | "recruiter" | "engineer";
type Theme = "dark" | "light";

export default function ModeControls() {
  const [view, setView] = useState<ViewMode>("full");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedView = localStorage.getItem("portfolio-view") as ViewMode | null;
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    if (savedView && ["full", "recruiter", "engineer"].includes(savedView)) setView(savedView);
    if (savedTheme && ["dark", "light"].includes(savedTheme)) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.view = view;
    document.body.dataset.theme = theme;
    localStorage.setItem("portfolio-view", view);
    localStorage.setItem("portfolio-theme", theme);
  }, [view, theme]);

  return (
    <div className="mode-dock section-wrap" aria-label="Portfolio view controls">
      <div className="mode-intro">
        <span className="live-dot" />
        <div><strong>Choose your path</strong><small>Focused content for every visitor</small></div>
      </div>
      <div className="segmented-control" aria-label="Portfolio mode">
        {(["full", "recruiter", "engineer"] as ViewMode[]).map((mode) => (
          <button
            type="button"
            key={mode}
            className={view === mode ? "active" : ""}
            onClick={() => setView(mode)}
            aria-pressed={view === mode}
          >
            {mode === "full" ? "Overview" : `${mode[0].toUpperCase()}${mode.slice(1)} view`}
          </button>
        ))}
      </div>
      <button
        className="theme-button"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? "☀ Light" : "● Dark"}
      </button>
    </div>
  );
}
