"use client";

export default function CommandLauncher({ command }: { command: string }) {
  function launch() {
    window.dispatchEvent(
      new CustomEvent("portfolio-command", { detail: { command } }),
    );
    document.getElementById("terminal")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <button
      className="lesson-command"
      type="button"
      onClick={launch}
      aria-label={`Run ${command} in the portfolio terminal`}
    >
      <span>$</span> {command}
      <i>run ↗</i>
    </button>
  );
}
