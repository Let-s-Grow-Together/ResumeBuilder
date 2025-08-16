// import { useDrag, useDrop } from "react-dnd";
// import { useResume } from "../context/ResumeContext";
// import sectionComponents from "./sectionComponents"" // 👈 we will explain this below

// const TYPE = "SECTION";

// export default function DraggableSection({ name, index, moveSection }) {
//   const { selectedSection, setSelectedSection } = useResume();

//   const [, dragRef] = useDrag({
//     type: TYPE,
//     item: { name, index },
//   });

//   const [, dropRef] = useDrop({
//     accept: TYPE,
//     hover: (draggedItem) => {
//       if (draggedItem.index !== index) {
//         moveSection(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   const SectionComponent = sectionComponents[name];
//   if (!SectionComponent) return null;

//   return (
//     <div
//       ref={(node) => dropRef(dragRef(node))}
//       className="resumeSection"
//       onClick={() => setSelectedSection(name)}
//       style={{
//         border:
//           selectedSection === name ? "2px solid white" : "1px dashed transparent",
//         padding: "4px",
//         cursor: "move",
//         borderRadius: "8px",
//       }}
//     >
//       <SectionComponent />
//     </div>
//   );
// }
