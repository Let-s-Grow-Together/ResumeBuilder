// import { useRef } from "react";
// import { useResume } from "../../context/ResumeContext";
// import InlineToolbar from "../../Components/shared/InlineToolbar";

// const layoutComponents = {
//     layout2: LayoutTwo,
// };

// function LayoutDefault({ data, style, viewType, editMode, handleFieldBlur, handleDescriptionBlur }) {
//     return data.map((exp, index) => (
//         <div
//             className="workPlace"
//             key={exp.id || index}
//             style={style?.workExpe?.eachWorkPlace}
//         >
//             <h3
//                 contentEditable={editMode}
//                 data-id={exp.id}
//                 suppressContentEditableWarning
//                 onBlur={(e) => handleFieldBlur(index, "role", e)}
//                 style={style?.workExpe?.role}
//                 dangerouslySetInnerHTML={{ __html: exp.role }}
//             />

//             <h4
//                 contentEditable={editMode}
//                 data-id={exp.id}
//                 suppressContentEditableWarning
//                 onBlur={(e) => handleFieldBlur(index, "organization", e)}
//                 style={style?.workExpe?.organization}
//                 dangerouslySetInnerHTML={{ __html: exp.organization }}
//             />

//             <h6
//                 contentEditable={editMode}
//                 data-id={exp.id}
//                 suppressContentEditableWarning
//                 onBlur={(e) => handleFieldBlur(index, "location", e)}
//                 style={style?.workExpe?.dates}
//             >
//                 {exp.location} | {exp.startDate} - {exp.endDate}
//             </h6>

//             {viewType === "list" ? (
//                 <ul style={style?.workExpe?.wholeList}>
//                     {exp.description?.map((item, i) => (
//                         <li
//                             key={item.id || `desc-${i}`}
//                             data-id={item.id}
//                             contentEditable={editMode}
//                             suppressContentEditableWarning
//                             onBlur={(e) => handleDescriptionBlur(index, i, e)}
//                             style={style?.workExpe?.listItem}
//                             dangerouslySetInnerHTML={{ __html: item.text }}
//                         />
//                     ))}
//                 </ul>
//             ) : (
//                 <div style={style?.workExpe?.eachExperience}>
//                     {exp.description?.map((item, i) => (
//                         <p
//                             key={item.id || `desc-${i}`}
//                             data-id={item.id}
//                             contentEditable={editMode}
//                             suppressContentEditableWarning
//                             onBlur={(e) => handleDescriptionBlur(index, i, e)}
//                             style={style?.workExpe?.content}
//                             dangerouslySetInnerHTML={{ __html: item.text }}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     ))
// }

// function LayoutTwo({ data, style, viewType, editMode, handleFieldBlur, handleDescriptionBlur }) {
//     return data.map((exp, index) => (
//         <div
//             key={exp.id || index}
//             style={{ display: "flex", gap: "16px", ...style?.workExpe?.eachWorkPlace }}
//         >
//             <div style={ style?.workExpe?.leftWork}>
//                 <h3
//                     contentEditable={editMode}
//                     data-id={exp.id}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleFieldBlur(index, "role", e)}
//                     style={style?.workExpe?.role}
//                     dangerouslySetInnerHTML={{ __html: exp.role }}
//                 />
//                 <h6
//                     contentEditable={editMode}
//                     data-id={exp.id}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleFieldBlur(index, "location", e)}
//                     style={style?.workExpe?.dates}
//                 >
//                     {exp.location} | {exp.startDate} - {exp.endDate}
//                 </h6>
//             </div>

//             <div style={style?.workExpe?.rightWork}>
//                 <h4
//                     contentEditable={editMode}
//                     data-id={exp.id}
//                     suppressContentEditableWarning
//                     onBlur={(e) => handleFieldBlur(index, "organization", e)}
//                     style={style?.workExpe?.organization}
//                     dangerouslySetInnerHTML={{ __html: exp.organization }}
//                 />
//                 {viewType === "list" ? (
//                     <ul style={style?.workExpe?.wholeList}>
//                         {exp.description?.map((item, i) => (
//                             <li
//                                 key={item.id || `desc-${i}`}
//                                 data-id={item.id}
//                                 contentEditable={editMode}
//                                 suppressContentEditableWarning
//                                 onBlur={(e) => handleDescriptionBlur(index, i, e)}
//                                 style={style?.workExpe?.listItem}
//                                 dangerouslySetInnerHTML={{ __html: item.text }}
//                             />
//                         ))}
//                     </ul>
//                 ) : (
//                     <div style={style?.workExpe?.eachExperience}>
//                         {exp.description?.map((item, i) => (
//                             <p
//                                 key={item.id || `desc-${i}`}
//                                 data-id={item.id}
//                                 contentEditable={editMode}
//                                 suppressContentEditableWarning
//                                 onBlur={(e) => handleDescriptionBlur(index, i, e)}
//                                 style={style?.workExpe?.content}
//                                 dangerouslySetInnerHTML={{ __html: item.text }}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     ));
// }

// export default function WorkExperience({areaName}) {
//     const {
//         data,
//         style,
//         editMode,
//         updateField,
//         selectedSection,
//         setSelectedSection,
//         viewTypes,
//     } = useResume();

//     const workExpRef = useRef();
//     const viewType = viewTypes?.experience || "list";

//     const handleFieldBlur = (index, key, e) => {
//         const updated = [...data.experience];

//         if (key === "location") {
//             const text = e.target.innerText.trim();
//             const [cityPart = "", dateRange = ""] = text.split("|").map(str => str.trim());
//             const [startDate = "", endDate = ""] = dateRange.split("-").map(str => str.trim());

//             updated[index].location = cityPart;
//             updated[index].startDate = startDate;
//             updated[index].endDate = endDate;
//         } else {
//             updated[index][key] = e.target.innerText.trim();
//         }

//         updateField("experience", null, updated);
//     };

//     const handleDescriptionBlur = (expIndex, descIndex, e) => {
//         const updated = [...data.experience];
//         const updatedDescription = [...updated[expIndex].description];
//         updatedDescription[descIndex] = {
//             ...updatedDescription[descIndex],
//             text: e.target.innerText.trim(),
//         };
//         updated[expIndex] = {
//             ...updated[expIndex],
//             description: updatedDescription,
//         };
//         updateField("experience", null, updated);
//     };
//     const isSelected = selectedSection === "experience";
//     const layoutType = style?.workExpe?.layoutType;
//     const LayoutComponent = layoutComponents[layoutType] || LayoutDefault;
//     const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
//     const headingStyle = layoutHeading ?? style?.workExpe?.heading;

//     return (
//         <div
//             className={`workExperience resumeSection ${editMode && isSelected ? "selected" : ""}`}
//             onClick={() => setSelectedSection("experience")}
//             style={{ ...style?.workExpe?.box, position: "relative" }}
//             ref={workExpRef}
//         >
//             <h2 className={`${style?.workExpe?.dottedheading?"dotted-heading":""}`} style={headingStyle}>
//                 Work Experience
//             </h2>
//             <LayoutComponent
//                 data={data.experience}
//                 style={style}
//                 viewType={viewType}
//                 editMode={editMode}
//                 handleFieldBlur={handleFieldBlur}
//                 handleDescriptionBlur={handleDescriptionBlur}
//             />

//             <InlineToolbar editMode={editMode} containerRef={workExpRef} sectionName="experience" />
//         </div>
//     );
// }

// import { useRef } from "react";
// import { useResume } from "../../context/ResumeContext";
// import InlineToolbar from "../../Components/shared/InlineToolbar";

// /* 🔹 Reusable ExperienceCard */
// function ExperienceCard({
//   exp,
//   index,
//   style,
//   editMode,
//   viewType,
//   handleFieldBlur,
//   handleDescriptionBlur,
// }) {
//   return (
//     <div
//       className="workPlace"
//       key={exp.id || index}
//       style={style?.workExpe?.eachWorkPlace}
//     >
//       {/* Role */}
//       <h3
//         contentEditable={editMode}
//         data-id={exp.id}
//         suppressContentEditableWarning
//         onBlur={(e) => handleFieldBlur(index, "role", e)}
//         style={style?.workExpe?.role}
//         dangerouslySetInnerHTML={{ __html: exp.role }}
//       />

//       {/* Organization */}
//       <h4
//         contentEditable={editMode}
//         data-id={exp.id}
//         suppressContentEditableWarning
//         onBlur={(e) => handleFieldBlur(index, "organization", e)}
//         style={style?.workExpe?.organization}
//         dangerouslySetInnerHTML={{ __html: exp.organization }}
//       />

//       {/* Location + Dates */}
//       <h6
//         contentEditable={editMode}
//         data-id={exp.id}
//         suppressContentEditableWarning
//         onBlur={(e) => handleFieldBlur(index, "location", e)}
//         style={style?.workExpe?.dates}
//       >
//         {exp.location} | {exp.startDate} - {exp.endDate}
//       </h6>

//       {/* Description */}
//       {viewType === "list" ? (
//         <ul style={style?.workExpe?.wholeList}>
//           {exp.description?.map((item, i) => (
//             <li
//               key={item.id || `desc-${i}`}
//               data-id={item.id}
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => handleDescriptionBlur(index, i, e)}
//               style={style?.workExpe?.listItem}
//               dangerouslySetInnerHTML={{ __html: item.text }}
//             />
//           ))}
//         </ul>
//       ) : (
//         <div style={style?.workExpe?.eachExperience}>
//           {exp.description?.map((item, i) => (
//             <p
//               key={item.id || `desc-${i}`}
//               data-id={item.id}
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => handleDescriptionBlur(index, i, e)}
//               style={style?.workExpe?.content}
//               dangerouslySetInnerHTML={{ __html: item.text }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* 🔹 Utility: normalize data (handles grouped & flat) */
// function normalizeData(data) {
//   if (Array.isArray(data) && data[0]?.items) {
//     return data.flatMap((group) => group.items);
//   }
//   return data;
// }

// /* 🔹 Layout Variants */

// // Default (single column)
// function LayoutDefault(props) {
//   const { data } = props;
//   const flatData = normalizeData(data);
//   return flatData.map((exp, i) => (
//     <ExperienceCard key={exp.id || i} index={i} exp={exp} {...props} />
//   ));
// }

// // Two-column layout (role + location left, org + desc right)
// function LayoutTwo(props) {
//   const { data, style } = props;
//   const flatData = normalizeData(data);

//   return flatData.map((exp, i) => (
//     <div
//       key={exp.id || i}
//       style={{ display: "flex", gap: "16px", ...style?.workExpe?.eachWorkPlace }}
//     >
//       <div style={style?.workExpe?.leftWork}>
//         <h3
//           contentEditable={props.editMode}
//           data-id={exp.id}
//           suppressContentEditableWarning
//           onBlur={(e) => props.handleFieldBlur(i, "role", e)}
//           style={style?.workExpe?.role}
//           dangerouslySetInnerHTML={{ __html: exp.role }}
//         />
//         <h6
//           contentEditable={props.editMode}
//           data-id={exp.id}
//           suppressContentEditableWarning
//           onBlur={(e) => props.handleFieldBlur(i, "location", e)}
//           style={style?.workExpe?.dates}
//         >
//           {exp.location} | {exp.startDate} - {exp.endDate}
//         </h6>
//       </div>

//       <div style={style?.workExpe?.rightWork}>
//         <h4
//           contentEditable={props.editMode}
//           data-id={exp.id}
//           suppressContentEditableWarning
//           onBlur={(e) => props.handleFieldBlur(i, "organization", e)}
//           style={style?.workExpe?.organization}
//           dangerouslySetInnerHTML={{ __html: exp.organization }}
//         />
//         <ExperienceCard index={i} exp={exp} {...props} />
//       </div>
//     </div>
//   ));
// }

// // Grid layout (N columns)
// function LayoutGrid(props) {
//   const { data, style } = props;
//   const flatData = normalizeData(data);
//   const cols = style?.workExpe?.columns || 2;

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: `repeat(${cols}, 1fr)`,
//         gap: "20px",
//       }}
//     >
//       {flatData.map((exp, i) => (
//         <ExperienceCard key={exp.id || i} index={i} exp={exp} {...props} />
//       ))}
//     </div>
//   );
// }

// // Grouped layout (section headings inside)
// function LayoutGrouped(props) {
//   const { data, style } = props;
//   return data.map((group, gIndex) => (
//     <div key={gIndex} style={style?.workExpe?.groupBox}>
//       {group.sectionTitle && (
//         <h3 style={style?.workExpe?.groupHeading}>{group.sectionTitle}</h3>
//       )}
//       {group.items.map((exp, i) => (
//         <ExperienceCard key={exp.id || i} index={i} exp={exp} {...props} />
//       ))}
//     </div>
//   ));
// }

// /* 🔹 Available layouts */
// const layoutComponents = {
//   default: LayoutDefault,
//   twoColumn: LayoutTwo,
//   grid: LayoutGrid,
//   grouped: LayoutGrouped,
// };

// /* 🔹 Main Component */
// export default function WorkExperience({ areaName }) {
//   const {
//     data,
//     style,
//     editMode,
//     updateField,
//     selectedSection,
//     setSelectedSection,
//     viewTypes,
//   } = useResume();

//   const workExpRef = useRef();
//   const viewType = viewTypes?.experience || "list";
//   const isSelected = selectedSection === "experience";

//   /* ---- Field Updates ---- */
//   const handleFieldBlur = (index, key, e) => {
//     const updated = [...normalizeData(data.experience)];

//     if (key === "location") {
//       const text = e.target.innerText.trim();
//       const [cityPart = "", dateRange = ""] = text
//         .split("|")
//         .map((str) => str.trim());
//       const [startDate = "", endDate = ""] = dateRange
//         .split("-")
//         .map((str) => str.trim());

//       updated[index].location = cityPart;
//       updated[index].startDate = startDate;
//       updated[index].endDate = endDate;
//     } else {
//       updated[index][key] = e.target.innerText.trim();
//     }

//     updateField("experience", null, updated);
//   };

//   const handleDescriptionBlur = (expIndex, descIndex, e) => {
//     const updated = [...normalizeData(data.experience)];
//     const updatedDescription = [...updated[expIndex].description];
//     updatedDescription[descIndex] = {
//       ...updatedDescription[descIndex],
//       text: e.target.innerText.trim(),
//     };
//     updated[expIndex] = {
//       ...updated[expIndex],
//       description: updatedDescription,
//     };
//     updateField("experience", null, updated);
//   };

//   /* ---- Layout Selection ---- */
//   const layoutType = style?.workExpe?.layoutType || "default";
//   const LayoutComponent = layoutComponents[layoutType] || LayoutDefault;

//   const layoutHeading =
//     style?.layoutStyles &&
//     areaName &&
//     style.layoutStyles[areaName]?.heading;

//   const headingStyle = layoutHeading ?? style?.workExpe?.heading;

//   return (
//     <div
//       className={`workExperience resumeSection ${
//         editMode && isSelected ? "selected" : ""
//       }`}
//       onClick={() => setSelectedSection("experience")}
//       style={{ ...style?.workExpe?.box, position: "relative" }}
//       ref={workExpRef}
//     >
//       {/* Section Heading */}
//       <h2
//         className={`${
//           style?.workExpe?.dottedheading ? "dotted-heading" : ""
//         }`}
//         style={headingStyle}
//       >
//         Work Experience
//       </h2>

//       {/* Dynamic Layout */}
//       <LayoutComponent
//         data={data.experience}
//         style={style}
//         viewType={viewType}
//         editMode={editMode}
//         handleFieldBlur={handleFieldBlur}
//         handleDescriptionBlur={handleDescriptionBlur}
//       />

//       {/* Inline Toolbar */}
//       <InlineToolbar
//         editMode={editMode}
//         containerRef={workExpRef}
//         sectionName="experience"
//       />
//     </div>
//   );
// }


// import { useRef } from "react";
// import { useResume } from "../../context/ResumeContext";
// import InlineToolbar from "../../Components/shared/InlineToolbar";

// function WorkExperience({ areaName }) {
//   const {
//     data,
//     style,
//     editMode,
//     updateField,
//     selectedSection,
//     setSelectedSection,
//     viewTypes,
//   } = useResume();

//   const workExpRef = useRef();
//   const viewType = viewTypes?.experience || "list";

//   // Get the experiences from the nested structure
//   const experiences = data.experience && data.experience[0] ? data.experience[0].items : [];

//   const handleFieldBlur = (index, key, e) => {
//     const updated = [...experiences];
//     updated[index][key] = e.target.innerText.trim();
    
//     // Update the nested structure
//     const newExperienceData = [{ ...data.experience[0], items: updated }];
//     updateField("experience", null, newExperienceData);
//   };

//   const handleDescriptionBlur = (expIndex, descIndex, e) => {
//     const updated = [...experiences];
//     const updatedDescription = [...updated[expIndex].description];
//     updatedDescription[descIndex] = {
//       ...updatedDescription[descIndex],
//       text: e.target.innerText.trim(),
//     };
//     updated[expIndex] = {
//       ...updated[expIndex],
//       description: updatedDescription,
//     };
    
//     // Update the nested structure
//     const newExperienceData = [{ ...data.experience[0], items: updated }];
//     updateField("experience", null, newExperienceData);
//   };

//   const isSelected = selectedSection === "experience";
//   const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
//   const headingStyle = layoutHeading ?? style?.workExpe?.heading;

//   // Render function with flexible layout
//   const renderExperience = () => {
//     if (!experiences || experiences.length === 0) {
//       return <div>No work experience added yet</div>;
//     }

//     return experiences.map((exp, index) => (
//       <div
//         className="workPlace"
//         key={exp.id || index}
//         style={style?.workExpe?.eachWorkPlace}
//       >
//         {/* Top row with role and organization */}
//         <div className="role-org-container" style={{ 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'flex-start',
//           flexWrap: 'wrap',
//           marginBottom: '8px'
//         }}>
//              {/* {exp.techStack && (
//           <div className="tech-stack-container" style={{ 
//             marginBottom: '16px',
//             fontStyle: 'italic'
//           }}>
//             <span
//               contentEditable={editMode}
//               data-id={exp.id}
//               suppressContentEditableWarning
//               onBlur={(e) => handleFieldBlur(index, "techStack", e)}
//             >
//               {exp.techStack}
//             </span>
//           </div>
//         )} */}
//           <h3
//             contentEditable={editMode}
//             data-id={exp.id}
//             suppressContentEditableWarning
//             onBlur={(e) => handleFieldBlur(index, "role", e)}
//             style={style?.workExpe?.role}
//             dangerouslySetInnerHTML={{ __html: exp.role }}
//           />
          
//           <h4
//             contentEditable={editMode}
//             data-id={exp.id}
//             suppressContentEditableWarning
//             onBlur={(e) => handleFieldBlur(index, "organization", e)}
//             style={style?.workExpe?.organization}
//             dangerouslySetInnerHTML={{ __html: exp.organization }}
//           />
//         </div>

//         {/* Middle row with location and dates */}
//         <div className="location-dates-container" style={{ 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           marginBottom: '16px'
//         }}>
//           <div
//             contentEditable={editMode}
//             data-id={exp.id}
//             suppressContentEditableWarning
//             onBlur={(e) => handleFieldBlur(index, "location", e)}
//             style={style?.workExpe?.location}
//             className="location-text"
//           >
//             {exp.location}
//           </div>
          
//           <div className="dates-container" style={{ display: 'flex', gap: '4px' }}>
//             <div
//               contentEditable={editMode}
//               data-id={exp.id}
//               suppressContentEditableWarning
//               onBlur={(e) => handleFieldBlur(index, "startDate", e)}
//               style={style?.workExpe?.startDate}
//               className="date-text"
//             >
//               {exp.startDate}
//             </div>
//             <span> - </span>
//             <div
//               contentEditable={editMode}
//               data-id={exp.id}
//               suppressContentEditableWarning
//               onBlur={(e) => handleFieldBlur(index, "endDate", e)}
//               style={style?.workExpe?.endDate}
//               className="date-text"
//             >
//               {exp.endDate}
//             </div>
//           </div>
//         </div>

//         {/* Tech stack if available */}
       

//         {/* Description section */}
//         {viewType === "list" ? (
//           <ul style={style?.workExpe?.wholeList}>
//             {exp.description?.map((item, i) => (
//               <li
//                 key={item.id || `desc-${i}`}
//                 data-id={item.id}
//                 contentEditable={editMode}
//                 suppressContentEditableWarning
//                 onBlur={(e) => handleDescriptionBlur(index, i, e)}
//                 style={style?.workExpe?.listItem}
//                 dangerouslySetInnerHTML={{ __html: item.text }}
//               />
//             ))}
//           </ul>
//         ) : (
//           <div style={style?.workExpe?.eachExperience}>
//             {exp.description?.map((item, i) => (
//               <p
//                 key={item.id || `desc-${i}`}
//                 data-id={item.id}
//                 contentEditable={editMode}
//                 suppressContentEditableWarning
//                 onBlur={(e) => handleDescriptionBlur(index, i, e)}
//                 style={style?.workExpe?.content}
//                 dangerouslySetInnerHTML={{ __html: item.text }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     ));
//   };

//   return (
//     <div
//       className={`workExperience resumeSection ${editMode && isSelected ? "selected" : ""}`}
//       onClick={() => setSelectedSection("experience")}
//       style={{ ...style?.workExpe?.box, position: "relative" }}
//       ref={workExpRef}
//     >
//       <h2 className={`${style?.workExpe?.dottedheading?"dotted-heading":""}`} style={headingStyle}>
//         Work Experience
//       </h2>
//       {renderExperience()}

//       <InlineToolbar editMode={editMode} containerRef={workExpRef} sectionName="experience" />
//     </div>
//   );
// }

// export default WorkExperience;

import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

function WorkExperience({ areaName }) {
  const {
    data,
    style,
    editMode,
    updateField,
    selectedSection,
    setSelectedSection,
    viewTypes,
  } = useResume();

  const workExpRef = useRef();
  const viewType = viewTypes?.experience || "list";

  // Get the experiences from the nested structure
  const experiences = data.experience && data.experience[0] ? data.experience[0].items : [];

  const handleFieldBlur = (index, key, e) => {
    const updated = [...experiences];
    updated[index][key] = e.target.innerText.trim();
    
    // Update the nested structure
    const newExperienceData = [{ ...data.experience[0], items: updated }];
    updateField("experience", null, newExperienceData);
  };

  const handleDescriptionBlur = (expIndex, descIndex, e) => {
    const updated = [...experiences];
    const updatedDescription = [...updated[expIndex].description];
    updatedDescription[descIndex] = {
      ...updatedDescription[descIndex],
      text: e.target.innerText.trim(),
    };
    updated[expIndex] = {
      ...updated[expIndex],
      description: updatedDescription,
    };
    
    // Update the nested structure
    const newExperienceData = [{ ...data.experience[0], items: updated }];
    updateField("experience", null, newExperienceData);
  };

  const isSelected = selectedSection === "experience";
  const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
  const headingStyle = layoutHeading ?? style?.workExpe?.heading;

  // Render function with flexible layout
  const renderExperience = () => {
    if (!experiences || experiences.length === 0) {
      return <div>No work experience added yet</div>;
    }

    return experiences.map((exp, index) => {
      // Get template styles for each element if available
      const roleStyle = style?.workExpe?.role;
      const organizationStyle = style?.workExpe?.organization;
      const locationStyle = style?.workExpe?.location;
      const dateStyle = style?.workExpe?.date;
      const workPlaceStyle = style?.workExpe?.eachWorkPlace;
      const roleOrgContainerStyle = style?.workExpe?.roleOrgContainer;
      const locationDatesContainerStyle = style?.workExpe?.locationDatesContainer;

      return (
        <div
          className="workPlace"
          key={exp.id || index}
          style={workPlaceStyle}
        >
          {/* Top row with role and organization */}
          <div 
            className="role-org-container" 
            style={{ 
             
              ...roleOrgContainerStyle // Apply template style if available
            }}
          >
            <h3
              contentEditable={editMode}
              data-id={exp.id}
              suppressContentEditableWarning
              onBlur={(e) => handleFieldBlur(index, "role", e)}
              style={roleStyle}
              dangerouslySetInnerHTML={{ __html: exp.role }}
            />
            
            <h4
              contentEditable={editMode}
              data-id={exp.id}
              suppressContentEditableWarning
              onBlur={(e) => handleFieldBlur(index, "organization", e)}
              style={organizationStyle}
              dangerouslySetInnerHTML={{ __html: exp.organization }}
            />
          </div>

          {/* Middle row with location and dates */}
          <div 
            className="location-dates-container" 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '16px',
              ...locationDatesContainerStyle // Apply template style if available
            }}
          >
            <div
              contentEditable={editMode}
              data-id={exp.id}
              suppressContentEditableWarning
              onBlur={(e) => handleFieldBlur(index, "location", e)}
              style={locationStyle}
              className="location-text"
            >
              {exp.location}
            </div>
            
            <div className="dates-container" style={{ display: 'flex', gap: '4px', ...dateStyle }}>
              <div
                contentEditable={editMode}
                data-id={exp.id}
                suppressContentEditableWarning
                onBlur={(e) => handleFieldBlur(index, "startDate", e)}
                className="date-text"
              >
                {exp.startDate}
              </div>
              <span> - </span>
              <div
                contentEditable={editMode}
                data-id={exp.id}
                suppressContentEditableWarning
                onBlur={(e) => handleFieldBlur(index, "endDate", e)}
                className="date-text"
              >
                {exp.endDate}
              </div>
            </div>
          </div>

          {/* Tech stack if available */}
          {exp.techStack && (
            <div className="tech-stack-container" style={{ 
              marginBottom: '16px',
              fontStyle: 'italic'
            }}>
              <span
                contentEditable={editMode}
                data-id={exp.id}
                suppressContentEditableWarning
                onBlur={(e) => handleFieldBlur(index, "techStack", e)}
              >
                {exp.techStack}
              </span>
            </div>
          )}

          {/* Description section */}
          {viewType === "list" ? (
            <ul style={style?.workExpe?.wholeList}>
              {exp.description?.map((item, i) => (
                <li
                  key={item.id || `desc-${i}`}
                  data-id={item.id}
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => handleDescriptionBlur(index, i, e)}
                  style={style?.workExpe?.listItem}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              ))}
            </ul>
          ) : (
            <div style={style?.workExpe?.eachExperience}>
              {exp.description?.map((item, i) => (
                <p
                  key={item.id || `desc-${i}`}
                  data-id={item.id}
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => handleDescriptionBlur(index, i, e)}
                  style={style?.workExpe?.content}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              ))}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div
      className={`workExperience resumeSection ${editMode && isSelected ? "selected" : ""}`}
      onClick={() => setSelectedSection("experience")}
      style={{ ...style?.workExpe?.box, position: "relative" }}
      ref={workExpRef}
    >
      <h2 className={`${style?.workExpe?.dottedheading?"dotted-heading":""}`} style={headingStyle}>
        Work Experience
      </h2>
      {renderExperience()}

      <InlineToolbar editMode={editMode} containerRef={workExpRef} sectionName="experience" />
    </div>
  );
}

export default WorkExperience;


// import React from "react";
// import { useRef } from "react";
// import { useResume } from "../../context/ResumeContext";
// import InlineToolbar from "../../Components/shared/InlineToolbar";
// import templateLayouts from "../../data/templateLayouts";
// // 🔹 Generic Renderer
// function RenderBlock({ block, exp, expIndex, style, editMode, viewType, handleFieldBlur, handleDescriptionBlur }) {
//   switch (block.type) {
//     case "heading":
//     case "subheading":
//       return (
//         <div key={block.field}>
//           {React.createElement(block.tag, {
//             contentEditable: editMode,
//             suppressContentEditableWarning: true,
//             onBlur: (e) => handleFieldBlur(expIndex, block.field, e),
//             style: style?.workExpe?.[block.field],
//             dangerouslySetInnerHTML: { __html: exp[block.field] }
//           })}
//         </div>
//       );

//     case "meta":
//       const text = block.format
//         .replace("{location}", exp.location || "")
//         .replace("{startDate}", exp.startDate || "")
//         .replace("{endDate}", exp.endDate || "");
//       return React.createElement(block.tag, {
//         contentEditable: editMode,
//         suppressContentEditableWarning: true,
//         onBlur: (e) => handleFieldBlur(expIndex, "location", e), // location+dates parsing
//         style: style?.workExpe?.dates
//       }, text);

//     case "list":
//       return (
//         <ul key="list" style={style?.workExpe?.wholeList}>
//           {exp[block.field]?.map((item, i) => (
//             <li
//               key={item.id || `desc-${i}`}
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => handleDescriptionBlur(expIndex, i, e)}
//               style={style?.workExpe?.listItem}
//               dangerouslySetInnerHTML={{ __html: item.text }}
//             />
//           ))}
//         </ul>
//       );

//     case "paragraphs":
//       return (
//         <div key="paragraphs" style={style?.workExpe?.eachExperience}>
//           {exp[block.field]?.map((item, i) => (
//             <p
//               key={item.id || `desc-${i}`}
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => handleDescriptionBlur(expIndex, i, e)}
//               style={style?.workExpe?.content}
//               dangerouslySetInnerHTML={{ __html: item.text }}
//             />
//           ))}
//         </div>
//       );

//     case "row":
//       return (
//         <div key="row" style={{ display: "flex", gap: "16px" }}>
//           {block.columns.map((col, ci) => (
//             <div key={ci} style={style?.workExpe?.[`col${ci}`]}>
//               {col.map((child, idx) => (
//                 <RenderBlock
//                   key={idx}
//                   block={child}
//                   exp={exp}
//                   expIndex={expIndex}
//                   style={style}
//                   editMode={editMode}
//                   viewType={viewType}
//                   handleFieldBlur={handleFieldBlur}
//                   handleDescriptionBlur={handleDescriptionBlur}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       );

//     default:
//       return null;
//   }
// }

// export default function WorkExperience({ areaName }) {
//   const {
//     data,
//     style,
//     editMode,
//     updateField,
//     selectedSection,
//     setSelectedSection,
//     viewTypes,
//   } = useResume();

//   const workExpRef = useRef();
//   const viewType = viewTypes?.experience || "list";
//   const layoutType = style?.workExpe?.layoutType || "default";
//   const schema = templateLayouts[layoutType];

//   const handleFieldBlur = (index, key, e) => {
//     const updated = [...data.experience];

//     if (key === "location") {
//       const text = e.target.innerText.trim();
//       const [cityPart = "", dateRange = ""] = text.split("|").map(str => str.trim());
//       const [startDate = "", endDate = ""] = dateRange.split("-").map(str => str.trim());

//       updated[index].location = cityPart;
//       updated[index].startDate = startDate;
//       updated[index].endDate = endDate;
//     } else {
//       updated[index][key] = e.target.innerText.trim();
//     }

//     updateField("experience", null, updated);
//   };

//   const handleDescriptionBlur = (expIndex, descIndex, e) => {
//     const updated = [...data.experience];
//     const updatedDescription = [...updated[expIndex].description];
//     updatedDescription[descIndex] = {
//       ...updatedDescription[descIndex],
//       text: e.target.innerText.trim(),
//     };
//     updated[expIndex] = {
//       ...updated[expIndex],
//       description: updatedDescription,
//     };
//     updateField("experience", null, updated);
//   };

//   const isSelected = selectedSection === "experience";
//   const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
//   const headingStyle = layoutHeading ?? style?.workExpe?.heading;

//   return (
//     <div
//       className={`workExperience resumeSection ${editMode && isSelected ? "selected" : ""}`}
//       onClick={() => setSelectedSection("experience")}
//       style={{ ...style?.workExpe?.box, position: "relative" }}
//       ref={workExpRef}
//     >
//       <h2 className={`${style?.workExpe?.dottedheading ? "dotted-heading" : ""}`} style={headingStyle}>
//         Work Experience
//       </h2>

//       {data.experience.map((exp, index) =>
//         schema.structure.map((block, i) => (
//           <RenderBlock
//             key={`${index}-${i}`}
//             block={block}
//             exp={exp}
//             expIndex={index}
//             style={style}
//             editMode={editMode}
//             viewType={viewType}
//             handleFieldBlur={handleFieldBlur}
//             handleDescriptionBlur={handleDescriptionBlur}
//           />
//         ))
//       )}

//       <InlineToolbar editMode={editMode} containerRef={workExpRef} sectionName="experience" />
//     </div>
//   );
// }
