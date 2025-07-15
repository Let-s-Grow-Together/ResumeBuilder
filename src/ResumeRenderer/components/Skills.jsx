
import { useResume } from "../../context/ResumeContext";
import EditableText from "../../Pages/EditableText";
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";
export default function Skills() {
  const {
    data,
    style,
    editMode,
    updateField,
    selectedSection,
    setSelectedSection,
  } = useResume();

  const showToolbar = selectedSection === "skills";

  // Hide if deleted
  if (!data.skills) return null;

  const handleSave = (index, newValue) => {
    const updated = [...(data.skills || [])];
    updated[index] = newValue;
    updateField("skills", null, updated);
  };

  const handleDeleteSkill = (indexToDelete) => {
    const updated = data.skills.filter((_, i) => i !== indexToDelete);
    updateField("skills", null, updated);
  };

  const handleDuplicateSkill = (text) => {
    const updated = [...(data.skills || []), text];
    updateField("skills", null, updated);
  };

  const renderEditableSkill = (skill, index) => (
    <EditableText
      key={index}
      value={skill}
      onSave={(val) => handleSave(index, val)}
      onDelete={() => handleDeleteSkill(index)}
      onDuplicate={(val) => handleDuplicateSkill(val)}
      editMode={editMode}
      style={style?.skills?.eachSkillBox || style?.skills?.listItem}
    />
  );

  const renderHeader = (
    <h2 style={style?.skills?.heading}>
      Skills
      {editMode && showToolbar && (
        <FloatingToolbarSimple
          sectionKey="skills"
          onDeleteSection={() => updateField("skills", null, null)}
        />
      )}
    </h2>
  );

  if (style.skills?.list) {
    return (
      <div
        className="skills resumeSection"
        style={{ ...style?.skills?.box, position: "relative" }}
        onClick={() => setSelectedSection("skills")}
      >
        {renderHeader}
        <ul style={style?.skills?.wholeList}>
          {(data.skills || []).map((skill, index) => (
            <li key={index} style={{ listStyleType: "disc" }}>
              {renderEditableSkill(skill, index)}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div
        className="skills resumeSection"
        style={{ ...style?.skills?.box, position: "relative" }}
        onClick={() => setSelectedSection("skills")}
      >
        {renderHeader}
        <div className="individualSkill" style={style?.skills?.everySkillBox}>
          {(data.skills || []).map((skill, index) =>
            renderEditableSkill(skill, index)
          )}
        </div>
      </div>
    );
  }
}


// import { useResume } from "../../context/ResumeContext";
// import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

// export default function Skills() {
//   const {
//     data,
//     style,
//     editMode,
//     updateField,
//     selectedSection,
//     setSelectedSection,
//   } = useResume();

//   const handleBlur = (index, e) => {
//     const newValue = e.target.innerHTML.trim();
//     const updatedSkills = [...(data.skills || [])];
//     updatedSkills[index] = newValue;
//     updateField("skills", null, updatedSkills);
//   };

//   const showToolbar = selectedSection === "skills";

//   // ✅ Hide the whole section if it's deleted
//   if (!data.skills) return null;

//   if (style.skills?.list) {
//     return (
//       <div
//         className="skills resumeSection"
//         style={{ ...style?.skills?.box, position: "relative" }}
//         onClick={() => setSelectedSection("skills")}
//       >
//         <h2 style={style?.skills?.heading}>Skills</h2>

//         {editMode && showToolbar && (
//           <FloatingToolbarSimple
//             sectionKey="skills"
//             onDeleteSection={() => updateField("skills", null, null)}
//           />
//         )}

//         <ul style={style?.skills?.wholeList}>
//           {(data.skills || []).map((skill, index) => (
//             <li
//               key={index}
//               contentEditable={editMode}
//               suppressContentEditableWarning={true}
//               onBlur={(e) => handleBlur(index, e)}
//               style={style?.skills?.listItem}
//               dangerouslySetInnerHTML={{ __html: skill }}
//             />
//           ))}
//         </ul>
//       </div>
//     );
//   } else {
//     return (
//       <div
//         className="skills resumeSection"
//         style={{ ...style?.skills?.box, position: "relative" }}
//         onClick={() => setSelectedSection("skills")}
//       >
//         <h2 style={style?.skills?.heading}>
//           Skills
//           {editMode && showToolbar && (
//             <FloatingToolbarSimple
//               sectionKey="skills"
//               onDeleteSection={() => updateField("skills", null, null)}
//             />
//           )}
//         </h2>

//         <div className="individualSkill" style={style?.skills?.everySkillBox}>
//           {(data.skills || []).map((skill, index) => (
//             <div
//               key={index}
//               contentEditable={editMode}
//               suppressContentEditableWarning={true}
//               onBlur={(e) => handleBlur(index, e)}
//               style={style?.skills?.eachSkillBox}
//               dangerouslySetInnerHTML={{ __html: skill }}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// import { useResume } from "../../context/ResumeContext";
// import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

// export default function Skills() {
//     const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();//ye

//     const handleBlur = (index, e) => {
//         const newValue = e.target.innerHTML.trim();
//         const updatedSkills = [...data.skills];
//         updatedSkills[index] = newValue;
//         updateField("skills", null, updatedSkills);
//     };

//     const showToolbar = selectedSection === "skills";//ye

//     if (style.skills?.list) {
//         return (
//             <div
//                 className="skills resumeSection"
//                 style={{ ...style?.skills?.box, position: "relative" }}
//                 onClick={() => setSelectedSection("skills")} //ye
//             >
//                 <h2 style={style?.skills?.heading}>Skills</h2>

//                 {showToolbar && (
//                     <FloatingToolbarSimple sectionKey="skills" />
//                 )} {/* ye */}

//                 <ul style={style?.skills?.wholeList}>
//                     {data.skills.map((skill, index) => (
//                         <li
//                             key={index}
//                             contentEditable={editMode}
//                             suppressContentEditableWarning={true}
//                             onBlur={(e) => handleBlur(index, e)}
//                             style={style?.skills?.listItem}
//                             dangerouslySetInnerHTML={{ __html: skill }} 
//                         >
//                             {skill}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     } else {
//         return (
//             <div
//                 className="skills resumeSection"
//                 style={{ ...style?.skills?.box, position: "relative" }}
//                 onClick={() => setSelectedSection("skills")}
//             >
//                 <h2 style={style?.skills?.heading}>Skills
//                     {showToolbar && (
//                         <FloatingToolbarSimple sectionKey="skills" />
//                     )}
//                 </h2>

//                 <div className="individualSkill" style={style?.skills?.everySkillBox}>
//                     {data.skills.map((skill, index) => (
//                         <div
//                             key={index}
//                             contentEditable={editMode}
//                             suppressContentEditableWarning={true}
//                             onBlur={(e) => handleBlur(index, e)}
//                             style={style?.skills?.eachSkillBox}
//                             dangerouslySetInnerHTML={{ __html: skill }} 
//                         >
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

