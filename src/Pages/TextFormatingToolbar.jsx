// Pages/TextFormattingToolbar.jsx
import { useEffect, useState } from "react";

export default function TextFormattingToolbar() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        setVisible(false);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setPosition({
        top: rect.top + window.scrollY - 45,
        left: rect.left + rect.width / 2,
      });

      setVisible(true);
    };

    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("keyup", handleSelection);

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("keyup", handleSelection);
    };
  }, []);

  const exec = (command) => {
    document.execCommand(command);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -100%)",
        display: "flex",
        gap: "10px",
        padding: "8px",
        borderRadius: "8px",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: 9999,
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <button onClick={() => exec("bold")}><b>B</b></button>
      <button onClick={() => exec("italic")}><i>I</i></button>
      <button onClick={() => exec("underline")}><u>U</u></button>
      <button onClick={() => {
        const url = prompt("Enter URL:");
        if (url) exec("createLink", url);
      }}>🔗</button>
    </div>
  );
}
