// components/FieldToolbar.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const toolbarStyle = {
  position: "absolute",
  background: "white",
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "6px 10px",
  display: "flex",
  gap: "10px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
  zIndex: 9999,
};

const FieldToolbar = ({ targetRef, onAdd, onDelete }) => {
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (!targetRef?.current) return;
      const rect = targetRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY + rect.height + 5,
        left: rect.left + rect.width - 120,
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

  const applyStyle = (command) => document.execCommand(command, false, null);
  const insertLink = () => {
    const url = prompt("Enter URL:");
    if (url) document.execCommand("createLink", false, url);
  };

  return (
    <motion.div
      style={{ ...toolbarStyle, top: coords.top, left: coords.left }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button onClick={() => applyStyle("bold")}>B</button>
      <button onClick={() => applyStyle("italic")}>I</button>
      <button onClick={insertLink}>🔗</button>
      <button onClick={onAdd}>➕</button>
      <button onClick={onDelete}>🗑️</button>
    </motion.div>
  );
};

export default FieldToolbar;
