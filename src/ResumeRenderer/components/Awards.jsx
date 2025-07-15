



import { useResume } from "../../context/ResumeContext";
import EditableText from "../../Pages/EditableText";

export default function Awards() {
  const {
    data,
    style,
    editMode,
    updateField,
    selectedSection,
    setSelectedSection,
  } = useResume();

  if (!data?.awards) return null;

  return (
    <div
      className="awards resumeSection"
      style={{ ...style?.award?.box, position: "relative" }}
      onMouseDown={(e) => {
        e.stopPropagation(); // ✅ prevents blur/focus loss
        setSelectedSection("awards");
      }}
    >
      <h2
        contentEditable={editMode}
        suppressContentEditableWarning
        style={style?.award?.heading}
      >
        Honours & Awards
      </h2>

      <div style={style?.award?.innerBox}>
        {data.awards.map((awr, index) => (
          <div key={index} style={style?.award?.eachAward}>
            <EditableText
              value={awr.Title}
              onSave={(newValue) => {
                const updated = [...data.awards];
                updated[index].Title = newValue;
                updateField("awards", null, updated);
              }}
              onDelete={() => {
                const updated = data.awards.filter((_, i) => i !== index);
                updateField("awards", null, updated);
              }}
              onDuplicate={(text) => {
                const updated = [...data.awards];
                updated.splice(index + 1, 0, { ...awr, Title: text });
                updateField("awards", null, updated);
              }}
              style={style?.award?.title}
              editMode={editMode}
            />
            <EditableText
              value={awr.Date}
              onSave={(newValue) => {
                const updated = [...data.awards];
                updated[index].Date = newValue;
                updateField("awards", null, updated);
              }}
              onDelete={() => {
                const updated = data.awards.filter((_, i) => i !== index);
                updateField("awards", null, updated);
              }}
              onDuplicate={(text) => {
                const updated = [...data.awards];
                updated.splice(index + 1, 0, { ...awr, Date: text });
                updateField("awards", null, updated);
              }}
              style={style?.award?.date}
              editMode={editMode}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


// import { useResume } from "../../context/ResumeContext";
// import EditableText from "../../Pages/EditableText";

// export default function Awards() {
//   const {
//     data,
//     style,
//     editMode,
//     updateField,
//     selectedSection,
//     setSelectedSection,
//   } = useResume();

//   if (!data?.awards) return null;

//   return (
//     <div
//       className="awards resumeSection"
//       style={{ ...style?.award?.box, position: "relative" }}
//       onClick={() => setSelectedSection("awards")}
//     >
//       <h2
//         contentEditable={editMode}
//         suppressContentEditableWarning
//         style={style?.award?.heading}
//       >
//         Honours & Awards
//       </h2>

//       <div style={style?.award?.innerBox}>
//         {data.awards.map((awr, index) => (
//           <div key={index} style={style?.award?.eachAward}>
//             <EditableText
//               value={awr.Title}
//               onSave={(newValue) => {
//                 const updated = [...data.awards];
//                 updated[index].Title = newValue;
//                 updateField("awards", null, updated);
//               }}
//               onDelete={() => {
//                 const updated = data.awards.filter((_, i) => i !== index);
//                 updateField("awards", null, updated);
//               }}
//               onDuplicate={(text) => {
//                 const updated = [...data.awards];
//                 updated.splice(index + 1, 0, { ...awr, Title: text });
//                 updateField("awards", null, updated);
//               }}
//               style={style?.award?.title}
//               editMode={editMode}
//             />
//             <EditableText
//               value={awr.Date}
//               onSave={(newValue) => {
//                 const updated = [...data.awards];
//                 updated[index].Date = newValue;
//                 updateField("awards", null, updated);
//               }}
//               onDelete={() => {
//                 const updated = data.awards.filter((_, i) => i !== index);
//                 updateField("awards", null, updated);
//               }}
//               onDuplicate={(text) => {
//                 const updated = [...data.awards];
//                 updated.splice(index + 1, 0, { ...awr, Date: text });
//                 updateField("awards", null, updated);
//               }}
//               style={style?.award?.date}
//               editMode={editMode}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useResume } from "../../context/ResumeContext";
// import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

// export default function Awards() {
//     const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

//     if (!data?.awards) return null;

//     const handleBlur = (index, key, e) => {
//         const updated = [...data.awards];
//         updated[index][key] = e.target.innerHTML.trim();
//         updateField("awards", null, updated);
//     };

//     return (
//         <div
//             className="awards resumeSection"
//             style={{ ...style?.award?.box, position: "relative" }}
//             onClick={() => setSelectedSection("awards")}
//         >
//             <h2
//                 contentEditable={editMode}
//                 suppressContentEditableWarning
//                 style={style?.award?.heading}
//             >
//                 Honours & Awards
//             </h2>

//             {selectedSection === "awards" && editMode && (
//                 <FloatingToolbarSimple
//                     sectionKey="awards"
//                     position={{ top: "-45px", right: "20px" }}
//                 />
//             )}

//             <div style={style?.award?.innerBox}>
//                 {data.awards.map((awr, index) => (
//                     <div key={index} style={style?.award?.eachAward}>
//                         <p
//                             contentEditable={editMode}
//                             suppressContentEditableWarning
//                             onBlur={(e) => handleBlur(index, "Title", e)}
//                             style={style?.award?.title}
//                             dangerouslySetInnerHTML={{__html: awr.Title}}
//                         >
//                         </p>
//                         <p
//                             contentEditable={editMode}
//                             suppressContentEditableWarning
//                             onBlur={(e) => handleBlur(index, "Date", e)}
//                             style={style?.award?.date}
//                             dangerouslySetInnerHTML={{__html: awr.Date}}
//                         >
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
