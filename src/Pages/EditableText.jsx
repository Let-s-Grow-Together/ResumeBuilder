import { useState, useRef, useEffect } from "react";
import FloatingToolbarText from "./FloatingToolbarText";

export default function EditableText({
  value,
  onSave,
  onDelete,
  onDuplicate,
  editMode = true,
  style = {},
}) {
  const [text, setText] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef(null);
  const editableRef = useRef(null);

  const handleInput = (e) => setText(e.target.innerHTML);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setIsFocused(false);
        onSave(text);
      }
    };

    if (editMode && isFocused) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFocused, editMode, text]);

  return (
    <div ref={wrapperRef} style={{ position: "relative" }}>
      <div
        ref={editableRef}
        contentEditable={editMode}
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: text }}
        onInput={handleInput}
        onFocus={() => setIsFocused(true)}
        style={{
          padding: "6px",
          borderRadius: "6px",
          border: editMode ? "1px dashed #ccc" : "none",
          minHeight: "24px",
          cursor: editMode ? "text" : "default",
          ...style,
        }}
      />

      {editMode && editableRef.current && (
        <FloatingToolbarText targetRef={editableRef.current} />
      )}
    </div>
  );
}

