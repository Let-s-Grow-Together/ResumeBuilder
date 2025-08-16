import { useEffect, useState } from "react";

export default function LineToolbar({ targetRef, onDelete, onDuplicate }) {
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (!targetRef.current) return;
      const rect = targetRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY - 40,
        left: rect.left + rect.width / 2 - 100,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [targetRef]);

  const exec = (command) => {
    document.execCommand("styleWithCSS", false, true);
    document.execCommand(command, false, null);
  };

  const preventBlur = (e) => e.preventDefault();

  return (
    <div
      className="line-toolbar"
      style={{
        position: "absolute",
        top: `${coords.top}px`,
        left: `${coords.left}px`,
        background: "#fff",
        padding: "6px 12px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        display: "flex",
        gap: "8px",
        zIndex: 9999,
        pointerEvents: "auto",
      }}
      onMouseDown={preventBlur}
    >
      <button onMouseDown={preventBlur} onClick={() => exec("bold")}>B</button>
      <button onMouseDown={preventBlur} onClick={() => exec("italic")}>I</button>
      <button onMouseDown={preventBlur} onClick={() => exec("underline")}>U</button>
      <button onMouseDown={preventBlur} onClick={onDuplicate}>📄</button>
      <button onMouseDown={preventBlur} onClick={onDelete}>🗑️</button>
    </div>
  );
}
