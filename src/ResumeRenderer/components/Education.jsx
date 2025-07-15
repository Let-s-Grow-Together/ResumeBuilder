
// import { useRef } from "react";
// import { useResume } from "../../context/ResumeContext";
// import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";
// import EditableText from "../../Pages/EditableText";

// export default function Education() {
//   const sectionRef = useRef(null);
//   const {
//     data,
//     style,
//     editMode,
//     updateField,
//     selectedSection,
//     setSelectedSection,
//   } = useResume();

//   const handleSave = (index, key, value) => {
//     const updated = [...data.education];
//     updated[index][key] = value.trim();
//     updateField("education", null, updated);
//   };

//   const handleDescSave = (index, i, value) => {
//     const updated = [...data.education];
//     updated[index].Description[i].text = value.trim();
//     updateField("education", null, updated);
//   };

//   return (
//     <div
//       ref={sectionRef}
//       className="education resumeSection"
//       style={{ ...style?.education?.box, position: "relative" }}
//       onClick={() => setSelectedSection("education")}
//     >
      

//       <h2
//         contentEditable={editMode}
//         suppressContentEditableWarning
//         style={style?.education?.heading}
//       >
//         Education
//         {selectedSection === "education" && (
//           <FloatingToolbarSimple sectionKey="education" />
//         )}
//       </h2>

//       {data.education.map((edu, index) => (
//         <div key={index} style={style?.education?.eachSchool}>
//           <h3 style={style?.education?.name}>
//             <span>
//               <EditableText
//                 value={edu.Degree}
//                 onSave={(val) => handleSave(index, "Degree", val)}
//                 editMode={editMode}
//                 style={{ ...style?.education?.name, all: "unset" }}
//               />
//             </span>{" "}
//             -{" "}
//             <span>
//               <EditableText
//                 value={edu.School}
//                 onSave={(val) => handleSave(index, "School", val)}
//                 editMode={editMode}
//                 style={{ ...style?.education?.name, all: "unset" }}
//               />
//             </span>
//           </h3>

//           <p style={style?.education?.city}>
//             <span>
//               <EditableText
//                 value={edu.City}
//                 onSave={(val) => handleSave(index, "City", val)}
//                 editMode={editMode}
//                 style={{ ...style?.education?.city, all: "unset" }}
//               />
//             </span>{" "}
//             |{" "}
//             <span>
//               <EditableText
//                 value={edu["Start Date"]}
//                 onSave={(val) => handleSave(index, "Start Date", val)}
//                 editMode={editMode}
//                 style={{ ...style?.education?.city, all: "unset" }}
//               />
//             </span>{" "}
//             -{" "}
//             <span>
//               <EditableText
//                 value={edu["End Date"]}
//                 onSave={(val) => handleSave(index, "End Date", val)}
//                 editMode={editMode}
//                 style={{ ...style?.education?.city, all: "unset" }}
//               />
//             </span>
//           </p>

//           <ul style={style?.education?.list}>
//             {edu.Description?.map((point, i) => (
//               <li key={point.id} style={style?.education?.listItem}>
//                 <EditableText
//                   value={point.text}
//                   onSave={(val) => handleDescSave(index, i, val)}
//                   editMode={editMode}
//                   style={{ ...style?.education?.listItem, all: "unset" }}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";
import FloatingToolbarText from "../../Pages/FloatingToolbarText";

export default function Education() {
      const sectionRef = useRef(null);
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
    } = useResume();

    const handleBlur = (index, key, e) => {
        const updated = [...data.education];
        updated[index][key] = e.target.innerText.trim();
        updateField("education", null, updated);
    };

    const handleDescBlur = (index, i, e) => {
        const updated = [...data.education];
        updated[index].Description[i].text = e.target.innerHTML.trim();
        updateField("education", null, updated);
    };

    return (
        <div
           ref={sectionRef}
            className="education resumeSection"
            style={{ ...style?.education?.box, position: "relative" }}
            onClick={() => setSelectedSection("education")}
        >
              {editMode && selectedSection === "education" && sectionRef.current && (
        <FloatingToolbarText targetRef={sectionRef.current} />
      )}

            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.education?.heading}
            >
                Education
                {selectedSection === "education" && (
                    <FloatingToolbarSimple sectionKey="education" />
                )}
            </h2>

            {data.education.map((edu, index) => (
                <div key={index} style={style?.education?.eachSchool}>
                    <h3 style={style?.education?.name}>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Degree", e)}
                        >
                            {edu.Degree}
                        </span>{" "}
                        -{" "}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "School", e)}
                        >
                            {edu.School}
                        </span>
                    </h3>

                    <p style={style?.education?.city}>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "City", e)}
                        >
                            {edu.City}
                        </span>{" "}
                        |{" "}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Start Date", e)}
                        >
                            {edu["Start Date"]}
                        </span>{" "}
                        -{" "}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "End Date", e)}
                        >
                            {edu["End Date"]}
                        </span>
                    </p>

                    <ul style={style?.education?.list}>
                        {edu.Description?.map((point, i) => (
                            <li
                                key={point.id}
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleDescBlur(index, i, e)}
                                style={style?.education?.listItem}
                                dangerouslySetInnerHTML={{ __html: point.text }}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

