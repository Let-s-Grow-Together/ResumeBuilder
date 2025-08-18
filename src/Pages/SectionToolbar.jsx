



// ✅ Step 1: SectionToolbar.jsx
import React, { useEffect, useState } from "react";

export default function SectionToolbar({ targetRef, onAdd, onDelete }) {
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (!targetRef?.current) return;
      const rect = targetRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY - 40,
        left: rect.left + rect.width - 80,
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

  const preventBlur = (e) => e.preventDefault();

  return (
    <div
      className="section-toolbar"
      style={{
        position: "absolute",
        top: `${coords.top}px`,
        left: `${coords.left}px`,
        background: "#fff",
        padding: "4px 8px",
        borderRadius: "6px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        display: "flex",
        gap: "8px",
        zIndex: 9999,
      }}
      onMouseDown={preventBlur}
    >
      <button onClick={onAdd}>➕ Entry</button>
      <button onClick={onDelete}>🗑️ Section</button>
    </div>
  );
}

// import { useEffect, useState } from "react";

// export default function SectionToolbar({ targetRef, onAdd, onDelete }) {
//   const [coords, setCoords] = useState({ top: 0, left: 0 });

//   useEffect(() => {
//     const updatePosition = () => {
//       if (!targetRef.current) return;
//       const rect = targetRef.current.getBoundingClientRect();
//       setCoords({
//         top: rect.top + window.scrollY - 40,
//         left: rect.left + rect.width - 60,
//       });
//     };

//     updatePosition(); // run immediately
//     window.addEventListener("scroll", updatePosition);
//     window.addEventListener("resize", updatePosition);
//     return () => {
//       window.removeEventListener("scroll", updatePosition);
//       window.removeEventListener("resize", updatePosition);
//     };
//   }, [targetRef]);

//   return (
//     <div
//       className="section-toolbar"
//       style={{
//         position: "absolute",
//         top: `${coords.top}px`,
//         left: `${coords.left}px`,
//         background: "#fff",
//         padding: "4px 8px",
//         borderRadius: "6px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
//         display: "flex",
//         gap: "8px",
//         zIndex: 9999,
//       }}
//     >
//       <button onMouseDown={(e) => { e.preventDefault(); onAdd(); }}>➕</button>
//       <button onMouseDown={(e) => { e.preventDefault(); onDelete(); }}>🗑️</button>
//     </div>
//   );
// }



// // SectionToolbar.jsx
// import React, { useEffect, useState } from "react";

// export default function SectionToolbar({ targetRef, onAdd, onDelete }) {
//   const [coords, setCoords] = useState({ top: 0, left: 0 });

//   useEffect(() => {
//     const updatePosition = () => {
//       if (!targetRef.current) return;
//       const rect = targetRef.current.getBoundingClientRect();
//       setCoords({
//         top: rect.top + window.scrollY - 40,
//         left: rect.left + rect.width - 60,
//       });
//     };

//     updatePosition();
//     window.addEventListener("resize", updatePosition);
//     window.addEventListener("scroll", updatePosition);
//     return () => {
//       window.removeEventListener("resize", updatePosition);
//       window.removeEventListener("scroll", updatePosition);
//     };
//   }, [targetRef]);

//   const preventBlur = (e) => e.preventDefault();

//   return (
//     <div
//       className="section-toolbar"
//       style={{
//         position: "absolute",
//         top: `${coords.top}px`,
//         left: `${coords.left}px`,
//         background: "#fff",
//         padding: "4px 8px",
//         borderRadius: "6px",
//         boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
//         display: "flex",
//         gap: "6px",
//         zIndex: 9999,
//         pointerEvents: "auto",
//       }}
//       onMouseDown={preventBlur}
//     >
//       <button onMouseDown={preventBlur} onClick={onAdd}>➕</button>
//       <button onMouseDown={preventBlur} onClick={onDelete}>🗑️</button>
//     </div>
//   );
// }
