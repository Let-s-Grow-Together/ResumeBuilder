
// import { useResume } from "../../context/ResumeContext";
// import JoditEditor from "jodit-react";
// import { useRef, useState } from "react";

// export default function Summary() {
//   const { data, updateField, style, editMode } = useResume();
//   const editorRef = useRef(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [tempContent, setTempContent] = useState(data.summary?.content || "");
//   const [editorPos, setEditorPos] = useState({ top: 0, left: 0 });

//   const handleClick = (e) => {
//     const rect = e.target.getBoundingClientRect();
//     setEditorPos({
//       top: rect.top + window.scrollY + rect.height + 8,
//       left: rect.left + rect.width / 2 - 200, // 200 is half editor width
//     });
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     updateField("summary", "content", tempContent);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setTempContent(data.summary?.content || "");
//     setIsEditing(false);
//   };

//   return (
//     <div className="summary" style={{ ...style?.summary?.box, position: "relative" }}>
//       <h2 style={style?.summary?.heading}>
//         {data.summary?.heading || "Summary"}
//       </h2>

//       <p
//         style={{
//           ...style?.summary?.content,
//           border: editMode ? "1px dashed #ccc" : "none",
//           borderRadius: "6px",
//           padding: "8px",
//           cursor: editMode ? "pointer" : "default",
//         }}
//         dangerouslySetInnerHTML={{ __html: data.summary?.content || "" }}
//         onClick={editMode ? handleClick : undefined}
//       />

//       {editMode && isEditing && (
//         <div
//           style={{
//             position: "absolute",
//             top: `${editorPos.top}px`,
//             left: `${editorPos.left}px`,
//             zIndex: 999,
//             background: "white",
//             boxShadow: "0 0 10px rgba(0,0,0,0.2)",
//             borderRadius: "10px",
//             width: "400px",
//             padding: "12px",
//           }}
//         >
//           <JoditEditor
//             ref={editorRef}
//             value={tempContent}
//             config={{
//               readonly: false,
//               height: 100,
//               toolbarSticky: false,
//               toolbarAdaptive: true,
//               showCharsCounter: false,
//               showWordsCounter: false,
//               buttons: [
//                 "bold", "italic", "underline", "ul", "ol", "link", "undo", "redo",
//               ],
//             }}
//             onChange={(newContent) => setTempContent(newContent)}
//           />

//           <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//             <button
//               onClick={handleSave}
//               style={{
//                 padding: "6px 14px",
//                 background: "#4CAF50",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "6px",
//                 cursor: "pointer",
//               }}
//             >
//               Save
//             </button>
//             <button
//               onClick={handleCancel}
//               style={{
//                 padding: "6px 14px",
//                 background: "#e0e0e0",
//                 border: "none",
//                 borderRadius: "6px",
//                 cursor: "pointer",
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useResume } from "../../context/ResumeContext";
// import JoditEditor from "jodit-react";
// import { useRef, useState } from "react";

// export default function Summary() {
//   const { data, style, updateField, editMode } = useResume();
//   const editor = useRef(null);

//   const [content, setContent] = useState(data.summary);

//   const handleBlur = (newContent) => {
//     updateField("summary", "content", newContent);
//   };

//   return (
//     <div className="summary" style={{ ...style?.summary?.box, position: "relative" }}>
//       <h2
//         contentEditable={editMode}
//         suppressContentEditableWarning={true}
//         onBlur={(e) => updateField("summary", "heading", e.target.innerText)}
//         style={style?.summary?.heading}
//       >
//         Summary
//       </h2>

//       {editMode ? (
//         <JoditEditor
//           ref={editor}
//           value={content}
//           config={{
//             readonly: false,
//             height: 250,
//             toolbarSticky: false,
//             toolbarAdaptive: true,
//             showCharsCounter: false,
//             showWordsCounter: false,
//             buttons: [
//               "bold", "italic", "underline", "ul", "ol", "link", "undo", "redo"
//             ],
//           }}
//           onBlur={(newContent) => handleBlur(newContent)}
//           onChange={(newContent) => setContent(newContent)}
//         />
//       ) : (
//         <p
//           style={style?.summary?.content}
//           dangerouslySetInnerHTML={{ __html: data.summary }}
//         />
//       )}
//     </div>
//   );
// }

import { useResume } from "../../context/ResumeContext"

export default function Summary() {
  const { data, style, updateField, editMode } = useResume();
  console.log('data', data);
  const handleBlur = (key, e) => {
    const newValue = e.target.innerHTML;
    updateField('summary', key, newValue);
  };


  return (
    <div className="summary" style={style?.summary?.box}>
      <h2 contentEditable={editMode}
        suppressContentEditableWarning={true}
        onBlur={(e) => handleBlur(index, e)} style={style?.summary?.heading}>Summary</h2>
      <p contentEditable={editMode}
        suppressContentEditableWarning={true}
        onBlur={(e) => handleBlur(index, e)} style={style?.summary?.content}
    dangerouslySetInnerHTML={{__html: data.summary}}        
        >
          
          </p>
    </div>
  )
}

