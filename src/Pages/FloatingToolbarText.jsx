

// FloatingToolbarText.jsx
import { useEffect, useRef, useState } from "react";

const toolbarStyle = {
  position: "absolute",
  background: "white",
  padding: "8px 10px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  display: "flex",
  gap: "10px",
  zIndex: 999999,
  border: "1px solid #ddd",
  fontSize: "18px",
  transform: "translateX(-50%)",
  pointerEvents: "auto",
};

const buttonStyle = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "18px",
};

export default function FloatingToolbarText({ targetRef }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const toolbarRef = useRef();

  useEffect(() => {
    const updateToolbar = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        setVisible(false);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      const startContainer = range.startContainer;
      const endContainer = range.endContainer;

      const isInside =
        targetRef?.isConnected &&
        targetRef.contains(startContainer) &&
        targetRef.contains(endContainer);

      if (!isInside) {
        setVisible(false);
        return;
      }

      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollX = window.scrollX || document.documentElement.scrollLeft;

      setPosition({
        top: rect.top + scrollY - 45, // appear just above the selection
        left: rect.left + scrollX + rect.width / 2,
      });

      setVisible(true);
    };

    document.addEventListener("mouseup", updateToolbar);
    document.addEventListener("keyup", updateToolbar);

    return () => {
      document.removeEventListener("mouseup", updateToolbar);
      document.removeEventListener("keyup", updateToolbar);
    };
  }, [targetRef]);

  const exec = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  if (!visible) return null;

  return (
    <div
      ref={toolbarRef}
      style={{
        ...toolbarStyle,
      
      }}
    >
      <button style={buttonStyle} onClick={() => exec("bold")} title="Bold">
        <b>B</b>
      </button>
      <button
        style={buttonStyle}
        onClick={() => exec("italic")}
        title="Italic"
      >
        <i>I</i>
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          const url = prompt("Enter URL");
          if (url) exec("createLink", url);
        }}
        title="Add Link"
      >
        🔗
      </button>
    </div>
  );
}

// // FloatingToolbarText.jsx
// import { useEffect, useRef, useState } from "react";

// const toolbarStyle = {
//  position: "absolute",
//   background: "white",
//   padding: "8px 10px",
//   borderRadius: "12px",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//   display: "flex",
//   gap: "10px",
//   zIndex: 999999, // BOOSTED
//   border: "1px solid #ddd",
//   fontSize: "18px",
//   transform: "translateX(-50%)",
//   pointerEvents: "auto",
// };

// const buttonStyle = {
//   border: "none",
//   background: "transparent",
//   cursor: "pointer",
//   fontSize: "18px",
// };

// export default function FloatingToolbarText({ targetRef }) {
//   const [visible, setVisible] = useState(false);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const toolbarRef = useRef();

//   useEffect(() => {
//     const updateToolbar = () => {
//       const selection = window.getSelection();
//       if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
//         setVisible(false);
//         return;
//       }

//       const range = selection.getRangeAt(0);
//       const rect = range.getBoundingClientRect();

//       const startContainer = range.startContainer;
//       const endContainer = range.endContainer;

//       const isInside =
//         targetRef?.isConnected &&
//         targetRef.contains(startContainer) &&
//         targetRef.contains(endContainer);

//       if (!isInside) {
//         setVisible(false);
//         return;
//       }

//       // setPosition({
//       //   top: rect.top + window.scrollY - 40, // just above selection
//       //   left: rect.left + rect.width / 2 + window.scrollX,
//       // });
//       setPosition({
//   top: window.scrollY + rect.top - 50, // push a bit above selection
//   left: window.scrollX + rect.left + rect.width / 2,
// });


//       setVisible(true);
//     };

//     document.addEventListener("mouseup", updateToolbar);
//     document.addEventListener("keyup", updateToolbar);

//     return () => {
//       document.removeEventListener("mouseup", updateToolbar);
//       document.removeEventListener("keyup", updateToolbar);
//     };
//   }, [targetRef]);

//   const exec = (command, value = null) => {
//     document.execCommand(command, false, value);
//   };

//   if (!visible) return null;

//   return (
//     <div
//       ref={toolbarRef}
//       style={{
//         ...toolbarStyle,
//         top: position.top,
//         left: position.left,
//       }}
//     >
//       <button style={buttonStyle} onClick={() => exec("bold")} title="Bold">
//         <b>B</b>
//       </button>
//       <button
//         style={buttonStyle}
//         onClick={() => exec("italic")}
//         title="Italic"
//       >
//         <i>I</i>
//       </button>
//       <button
//         style={buttonStyle}
//         onClick={() => {
//           const url = prompt("Enter URL");
//           if (url) exec("createLink", url);
//         }}
//         title="Add Link"
//       >
//         🔗
//       </button>
//     </div>
//   );
// }


// import { useEffect, useRef, useState } from "react";

// const toolbarStyle = {
//   position: "absolute",
//   background: "white",
//   padding: "8px 10px",
//   borderRadius: "12px",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//   display: "flex",
//   gap: "10px",
//   zIndex: 9999,
//   border: "1px solid #ddd",
//   fontSize: "18px",
//   transform: "translateX(-50%)", // 🟢 center horizontally
// };

// const buttonStyle = {
//   border: "none",
//   background: "transparent",
//   cursor: "pointer",
//   fontSize: "18px",
// };

// export default function FloatingToolbarText({ targetRef }) {
//   const [visible, setVisible] = useState(false);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const toolbarRef = useRef();

//   useEffect(() => {
//     const handleSelection = () => {
//       const selection = window.getSelection();
//       const range = selection?.rangeCount ? selection.getRangeAt(0) : null;

//       if (!selection || selection.isCollapsed || !range) {
//         setVisible(false);
//         return;
//       }

//       const startContainer = range.startContainer;
//       const endContainer = range.endContainer;

//       const isInside =
//         targetRef?.isConnected &&
//         targetRef.contains(startContainer) &&
//         targetRef.contains(endContainer);

//       if (!isInside) {
//         setVisible(false);
//         return;
//       }

//       const rect = range.getBoundingClientRect();
//       setPosition({
//         top: rect.top + window.scrollY - 45, // ⬆ above selected text
//         left: rect.left + rect.width / 2 + window.scrollX, // ⬅ center
//       });
//       setVisible(true);
//     };

//     document.addEventListener("mouseup", handleSelection);
//     document.addEventListener("keyup", handleSelection);

//     return () => {
//       document.removeEventListener("mouseup", handleSelection);
//       document.removeEventListener("keyup", handleSelection);
//     };
//   }, [targetRef]);

//   const exec = (command, value = null) => {
//     document.execCommand(command, false, value);
//   };

//   if (!visible) return null;

//   return (
//     <div
//       ref={toolbarRef}
//       style={{
//         ...toolbarStyle,
//         top: position.top,
//         left: position.left,
//       }}
//     >
//       <button style={buttonStyle} onClick={() => exec("bold")} title="Bold">
//         <b>B</b>
//       </button>
//       <button style={buttonStyle} onClick={() => exec("italic")} title="Italic">
//         <i>I</i>
//       </button>
//       <button
//         style={buttonStyle}
//         onClick={() => {
//           const url = prompt("Enter URL");
//           if (url) exec("createLink", url);
//         }}
//         title="Add Link"
//       >
//         🔗
//       </button>
//     </div>
//   );
// }
// import { useEffect, useRef, useState } from "react";

// const toolbarStyle = {
//   position: "absolute",
//   background: "white",
//   padding: "8px 10px",
//   borderRadius: "12px",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//   display: "flex",
//   gap: "10px",
//   zIndex: 9999,
//   border: "1px solid #ddd",
//   fontSize: "18px",
//   transform: "translateY(-100%)",
// };

// const buttonStyle = {
//   border: "none",
//   background: "transparent",
//   cursor: "pointer",
//   fontSize: "18px",
// };

// export default function FloatingToolbarText({ targetRef }) {
//   const [visible, setVisible] = useState(false);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const toolbarRef = useRef();

//   useEffect(() => {
//     const handleSelection = () => {
//       const selection = window.getSelection();
//       const range = selection?.rangeCount ? selection.getRangeAt(0) : null;

//       if (!selection || selection.isCollapsed || !range) {
//         setVisible(false);
//         return;
//       }

//       const startContainer = range.startContainer;
//       const endContainer = range.endContainer;

//       const isInside =
//         targetRef?.isConnected &&
//         targetRef.contains(startContainer) &&
//         targetRef.contains(endContainer);

//       if (!isInside) {
//         setVisible(false);
//         return;
//       }

//       const rect = range.getBoundingClientRect();
//       setPosition({
//         top: rect.top + window.scrollY - 12,
//         left: rect.left + rect.width / 2 + window.scrollX,
//       });
//       setVisible(true);
//     };

//     document.addEventListener("mouseup", handleSelection);
//     document.addEventListener("keyup", handleSelection);

//     return () => {
//       document.removeEventListener("mouseup", handleSelection);
//       document.removeEventListener("keyup", handleSelection);
//     };
//   }, [targetRef]);

//   const exec = (command, value = null) => {
//     document.execCommand(command, false, value);
//   };

//   if (!visible) return null;

//   return (
//     <div
//       ref={toolbarRef}
//       style={{
//         ...toolbarStyle,
//         top: position.top,
//         left: position.left,
//       }}
//     >
//       <button style={buttonStyle} onClick={() => exec("bold")} title="Bold">
//         <b>B</b>
//       </button>
//       <button style={buttonStyle} onClick={() => exec("italic")} title="Italic">
//         <i>I</i>
//       </button>
//       <button
//         style={buttonStyle}
//         onClick={() => {
//           const url = prompt("Enter URL");
//           if (url) exec("createLink", url);
//         }}
//         title="Add Link"
//       >
//         🔗
//       </button>
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from "react";

// const toolbarStyle = {
//   position: "absolute",
//   background: "white",
//   padding: "8px 10px",
//   borderRadius: "12px",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//   display: "flex",
//   gap: "10px",
//   zIndex: 9999,
//   border: "1px solid #ddd",
//   fontSize: "18px",
//   transform: "translateY(-100%)",
// };

// const buttonStyle = {
//   border: "none",
//   background: "transparent",
//   cursor: "pointer",
//   fontSize: "18px",
// };

// export default function FloatingToolbarText({ targetRef }) {
//   const [visible, setVisible] = useState(false);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const toolbarRef = useRef();

//   useEffect(() => {
//     const handleSelection = () => {
//       const selection = window.getSelection();
//       const range = selection?.rangeCount ? selection.getRangeAt(0) : null;

//       const isInside =
//         range &&
//         targetRef &&
//         targetRef.contains(range.startContainer) &&
//         targetRef.contains(range.endContainer);

//       if (!selection || selection.isCollapsed || !range || !isInside) {
//         setVisible(false);
//         return;
//       }

//       const rect = range.getBoundingClientRect();
//       setPosition({
//         top: rect.top + window.scrollY - 10,
//         left: rect.left + rect.width / 2 + window.scrollX,
//       });
//       setVisible(true);
//     };

//     document.addEventListener("mouseup", handleSelection);
//     document.addEventListener("keyup", handleSelection);

//     return () => {
//       document.removeEventListener("mouseup", handleSelection);
//       document.removeEventListener("keyup", handleSelection);
//     };
//   }, [targetRef]);

//   const exec = (command, value = null) => {
//     document.execCommand(command, false, value);
//   };

//   if (!visible) return null;

//   return (
//     <div
//       ref={toolbarRef}
//       style={{
//         ...toolbarStyle,
//         top: position.top,
//         left: position.left,
//       }}
//     >
//       <button style={buttonStyle} onClick={() => exec("bold")} title="Bold">
//         <b>B</b>
//       </button>
//       <button style={buttonStyle} onClick={() => exec("italic")} title="Italic">
//         <i>I</i>
//       </button>
//       <button
//         style={buttonStyle}
//         onClick={() => {
//           const url = prompt("Enter URL");
//           if (url) exec("createLink", url);
//         }}
//         title="Add Link"
//       >
//         🔗
//       </button>
//     </div>
//   );
// }

// // src/components/FloatingToolbarText.jsx
// import { useEffect, useRef, useState } from "react";

// const toolbarStyle = {
//   position: "absolute",
//   background: "white",
//   padding: "8px 10px",
//   borderRadius: "12px",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//   display: "flex",
//   gap: "10px",
//   zIndex: 9999,
//   border: "1px solid #ddd",
//   fontSize: "18px",
//   transform: "translateY(-100%)",
// };

// const buttonStyle = {
//   border: "none",
//   background: "transparent",
//   cursor: "pointer",
//   fontSize: "18px",
// };

// export default function FloatingToolbarText({ targetRef }) {
//   const [visible, setVisible] = useState(false);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const toolbarRef = useRef();

//   useEffect(() => {
//     const handleSelection = () => {
//       const selection = window.getSelection();
//       const range = selection?.rangeCount ? selection.getRangeAt(0) : null;

//       if (
//         !selection ||
//         selection.isCollapsed ||
//         !range ||
//         !targetRef.current?.contains(range.commonAncestorContainer)
//       ) {
//         setVisible(false);
//         return;
//       }

//       const rect = range.getBoundingClientRect();
//       setPosition({
//         top: rect.top + window.scrollY - 12,
//         left: rect.left + rect.width / 2 + window.scrollX,
//       });
//       setVisible(true);
//     };

//     document.addEventListener("mouseup", handleSelection);
//     document.addEventListener("keyup", handleSelection);

//     return () => {
//       document.removeEventListener("mouseup", handleSelection);
//       document.removeEventListener("keyup", handleSelection);
//     };
//   }, [targetRef]);

//   const exec = (command, value = null) => {
//     document.execCommand(command, false, value);
//   };

//   if (!visible) return null;

//   return (
//     <div
//       ref={toolbarRef}
//       style={{ ...toolbarStyle, top: position.top, left: position.left }}
//     >
//       <button style={buttonStyle} onClick={() => exec("bold")} title="Bold">
//         <b>B</b>
//       </button>
//       <button style={buttonStyle} onClick={() => exec("italic")} title="Italic">
//         <i>I</i>
//       </button>
//       <button
//         style={buttonStyle}
//         onClick={() => {
//           const url = prompt("Enter URL");
//           if (url) exec("createLink", url);
//         }}
//         title="Add Link"
//       >
//         🔗
//       </button>
//     </div>
//   );
// }



// //FloatingToolbarPro:
// import { useResume } from "../context/ResumeContext";
// import { motion } from "framer-motion";
// import mockUserData from "../data/mockUserData";
// import { v4 as uuidv4 } from "uuid";

// const icons = {
//     add: "➕",
//     remove: "➖",
//     addBullet: "📌➕",
//     removeBullet: "📌➖",
// };

// const defaultTemplates = {
//     experience: { ...mockUserData.experience?.[0] },
//     skills: "skill",
//     education: {
//         ...mockUserData.education[0],
//         Description: Array.isArray(mockUserData.education[0].Description)
//             ? [...mockUserData.education[0].Description]
//             : [{ id: uuidv4(), text: mockUserData.education[0].Description }]
//     },
//     projects: {
//         ...mockUserData.projects?.[0],
//         Description: Array.isArray(mockUserData.projects?.[0]?.Description)
//             ? [...mockUserData.projects[0].Description]
//             : [mockUserData.projects[0].Description]
//     },
//     achievements: { ...mockUserData.achievements?.[0] },
//     certifications: { ...mockUserData.certifications?.[0] },
    
// };

// const tooltipStyle = {
//     position: "absolute",
//     bottom: "-22px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     fontSize: "12px",
//     color: "#fff",
//     background: "#333",
//     padding: "3px 8px",
//     borderRadius: "4px",
//     whiteSpace: "nowrap",
// };

// export default function FloatingToolbarPro({ sectionKey, position = {} }) {
//     const { data, updateField, selectedSection, editMode } = useResume();

//     if (selectedSection !== sectionKey || !editMode) return null;

//     const sectionData = data?.[sectionKey] || [];

//     // ✳ Add experience field
//     const handleAdd = () => {
//         const template = defaultTemplates[sectionKey];

//         if (template !== undefined) {
//             const newItem = typeof template === "object" && !Array.isArray(template)
//                 ? { ...template }
//                 : template;
//             updateField(sectionKey, null, [...sectionData, newItem]);
//         } else {
//             updateField(sectionKey, null, [...sectionData, typeof sectionData[0] === "string" ? "" : {}]);
//         }
//     };

//     // ❌ Remove last entry in section (e.g., last job)
//     const handleDelete = () => {
//         updateField(sectionKey, null, sectionData.slice(0, -1));
//     };

//     // ➕ Add a bullet to Description array inside last experience
//     const handleAddBullet = () => {
//         const updated = [...sectionData];
//         const last = updated[updated.length - 1];
//         if (!last) return;

//         const updatedDesc = [...(last.Description || [])];
//         updatedDesc.push({ id: uuidv4(), text: "New bullet point" });

//         updated[updated.length - 1] = {
//             ...last,
//             Description: updatedDesc,
//         };

//         updateField(sectionKey, null, updated);
//     };

//     // ➖ Remove last bullet from Description array inside last experience
//     const handleRemoveBullet = () => {
//         const updated = [...sectionData];
//         const last = updated[updated.length - 1];
//         if (!last || !last.Description?.length) return;

//         const updatedDesc = [...last.Description];
//         updatedDesc.pop();

//         updated[updated.length - 1] = {
//             ...last,
//             Description: updatedDesc,
//         };

//         updateField(sectionKey, null, updated);
//     };

//     const style = {
//         position: "absolute",
//         top: position?.top || "-25px",
//         left: position?.left || "unset",
//         right: position?.right || "-50px",
//         width: "300px",
//         height: "60px",
//         display: "flex",
//         gap: "12px",
//         background: "rgba(255, 255, 255, 0.8)",
//         backdropFilter: "blur(12px)",
//         border: "1px solid #ddd",
//         padding: "8px 14px",
//         borderRadius: "14px",
//         boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
//         zIndex: 9999,
//     };

//     const buttonStyle = {
//         position: "relative",
//         padding: "8px",
//         fontSize: "18px",
//         background: "linear-gradient(to right, #fef6ff, #fff3f3)",
//         border: "1px solid #e6cfff",
//         borderRadius: "10px",
//         cursor: "pointer",
//         transition: "transform 0.2s ease",
//     };

//     const actions = [
//         { icon: icons.add, action: handleAdd, label: "Add Field" },
//         { icon: icons.remove, action: handleDelete, label: "Delete Last" },
//         { icon: icons.addBullet, action: handleAddBullet, label: "Add Bullet" },
//         { icon: icons.removeBullet, action: handleRemoveBullet, label: "Remove Bullet" },
//     ];

//     return (
//         <motion.div
//             style={style}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ type: "spring", stiffness: 260, damping: 20 }}
//         >
//             {actions.map(({ icon, action, label }, i) => (
//                 <div key={i} style={{ position: "relative" }}>
//                     <button
//                         style={buttonStyle}
//                         onClick={action}
//                         onMouseEnter={(e) => {
//                             const tooltip = document.createElement("div");
//                             tooltip.innerText = label;
//                             Object.assign(tooltip.style, tooltipStyle);
//                             e.currentTarget.appendChild(tooltip);
//                         }}
//                         onMouseLeave={(e) => {
//                             const tooltip = e.currentTarget.querySelector("div");
//                             if (tooltip) tooltip.remove();
//                         }}
//                     >
//                         {icon}
//                     </button>
//                 </div>
//             ))}
//         </motion.div>
//     );
// }





// // import { useEffect, useRef, useState } from "react";

// // const toolbarStyle = {
// //   position: "absolute",
// //   background: "white",
// //   padding: "8px 10px",
// //   borderRadius: "12px",
// //   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// //   display: "flex",
// //   gap: "10px",
// //   zIndex: 9999,
// //   border: "1px solid #ddd",
// //   fontSize: "18px",
// //   transform: "translateY(-100%)",
// // };

// // const buttonStyle = {
// //   border: "none",
// //   background: "transparent",
// //   cursor: "pointer",
// //   fontSize: "18px",
// // };

// // export default function FloatingToolbarText() {
// //   const [visible, setVisible] = useState(false);
// //   const [position, setPosition] = useState({ top: 0, left: 0 });
// //   const toolbarRef = useRef();

// //   useEffect(() => {
// //     const handleSelection = () => {
// //       const selection = window.getSelection();
// //       const range = selection?.rangeCount ? selection.getRangeAt(0) : null;

// //       if (!selection || selection.isCollapsed || !range) {
// //         setVisible(false);
// //         return;
// //       }

// //       const rect = range.getBoundingClientRect();
// //       setPosition({
// //         top: rect.top + window.scrollY - 10,
// //         left: rect.left + rect.width / 2 + window.scrollX,
// //       });
// //       setVisible(true);
// //     };

// //     document.addEventListener("mouseup", handleSelection);
// //     document.addEventListener("keyup", handleSelection);

// //     return () => {
// //       document.removeEventListener("mouseup", handleSelection);
// //       document.removeEventListener("keyup", handleSelection);
// //     };
// //   }, []);

// //   const exec = (command, value = null) => {
// //     document.execCommand(command, false, value);
// //   };

// //   if (!visible) return null;

// //   return (
// //     <div
// //       ref={toolbarRef}
// //       style={{
// //         ...toolbarStyle,
// //         top: position.top,
// //         left: position.left,
// //       }}
// //     >
// //       <button style={buttonStyle} onClick={() => exec("bold")} title="Bold">
// //         <b>B</b>
// //       </button>
// //       <button style={buttonStyle} onClick={() => exec("italic")} title="Italic">
// //         <i>I</i>
// //       </button>
// //       <button
// //         style={buttonStyle}
// //         onClick={() => {
// //           const url = prompt("Enter URL");
// //           if (url) exec("createLink", url);
// //         }}
// //         title="Add Link"
// //       >
// //         🔗
// //       </button>
// //     </div>
// //   );
// // }
