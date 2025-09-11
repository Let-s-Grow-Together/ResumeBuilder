// import { useResume } from "../context/ResumeContext";
// import { useSearchParams } from "react-router-dom";
// import { useEffect } from "react";

// export default function SaveControls() {
//     const { editMode, setEditMode, save } = useResume();
//     const [searchParams, setSearchParams] = useSearchParams();

//     // Keep URL in sync with editMode
//     useEffect(() => {
//         if (editMode) {
//             searchParams.set("edit", "true");
//         } else {
//             searchParams.delete("edit");
//         }
//         setSearchParams(searchParams, { replace: true });
//     }, [editMode, searchParams, setSearchParams]);

//     return (
//         <div
//             style={{
//                 position: "fixed",
//                 bottom: 20,
//                 right: 20,
//                 zIndex: 1000,
//                 display: "flex",
//                 gap: "10px",
//             }}
//         >
//             {editMode ? (
//                 <>
//                     <button
//                         onClick={save}
//                         style={{
//                             background: "linear-gradient(to right, #c6a9e3, #1a1a1a)",
//                             color: "#fff",
//                             padding: "8px 16px",
//                             borderRadius: "8px",
//                             border: "none",
//                             fontWeight: "600",
//                         }}
//                     >
//                         Save
//                     </button>
//                     <button
//                         onClick={() => setEditMode(false)}
//                         style={{
//                             background: "#ddd",
//                             padding: "8px 16px",
//                             borderRadius: "8px",
//                             border: "none",
//                             fontWeight: "600",
//                         }}
//                     >
//                         Cancel
//                     </button>
//                 </>
//             ) : (
//                 <button
//                     onClick={() => setEditMode(true)}
//                     style={{
//                         background: "linear-gradient(to right, #c6a9e3, #1a1a1a)",
//                         color: "#ffff",
//                         padding: "8px 16px",
//                         borderRadius: "8px",
//                         border: "none",
//                         fontWeight: "600",
//                     }}
//                 >
//                     ✏️ Edit Resume
//                 </button>
//             )}
//         </div>
//     );
// }

// import { useResume } from "../context/ResumeContext";
// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function SaveControls() {
//     const { editMode, setEditMode, save } = useResume();
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [toggleSave, setToggleSave] = useState(false); // for Save ↔ Cancel

//     // Keep URL in sync with editMode
//     useEffect(() => {
//         if (editMode) {
//             searchParams.set("edit", "true");
//         } else {
//             searchParams.delete("edit");
//         }
//         setSearchParams(searchParams, { replace: true });
//     }, [editMode, searchParams, setSearchParams]);

//     const handleSaveClick = () => {
//         if (!toggleSave) {
//             save();
//             setToggleSave(true); // switch to Cancel
//         } else {
//             setEditMode(false);
//             setToggleSave(false); // back to Save
//         }
//     };

//     return (
//         <div
//             style={{
//                 position: "relative",
//                 bottom: 20,
//                 // right: 20,
//                 left: 20,
//                 zIndex: 1000,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent:'center',
//                 gap: "10px",
//                 padding: "16px",
//                 borderRadius: "16px",
//                 backdropFilter: "blur(12px)",
//                 background: "rgba(255, 255, 255, 0.15)",
//                 border: "1px solid rgba(255, 255, 255, 0.25)",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
//                 width:'200px',
//                 height:'25vh',
//                 marginLeft:'.9rem'
//             }}
//         >
//             {/* Edit Resume button */}
//             <button
//                 onClick={() => setEditMode(true)}
//                 style={{
//                     width: "100%",
//                     background: "linear-gradient(135deg, #c6a9e3, #9b7ede)",
//                     color: "#fff",
//                     padding: "10px 18px",
//                     borderRadius: "12px",
//                     border: "none",
//                     fontWeight: "600",
//                     cursor: "pointer",
//                 }}
//             >
//                 ✏️ Edit Resume
//             </button>

//             {/* Save / Cancel toggle button */}
//             <button
//                 onClick={handleSaveClick}
//                 style={{
//                     width: "100%",
//                     background: toggleSave
//                         ? "rgba(255, 255, 255, 0.8)"
//                         : "linear-gradient(135deg, #c6a9e3, #9b7ede)",
//                     color: toggleSave ? "#333" : "#fff",
//                     padding: "10px 18px",
//                     borderRadius: "12px",
//                     border: "none",
//                     fontWeight: "600",
//                     cursor: "pointer",
//                 }}
//             >
//                 {toggleSave ? "❌ Cancel" : "💾 Save"}
//             </button>
//         </div>
//     );
// }


import { useResume } from "../context/ResumeContext";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Edit2, Save, X } from "lucide-react";  // Import icons

export default function SaveControls() {
    const { editMode, setEditMode, save } = useResume();
    const [searchParams, setSearchParams] = useSearchParams();
    const [toggleSave, setToggleSave] = useState(false); // for Save ↔ Cancel

    // Keep URL in sync with editMode
    useEffect(() => {
        if (editMode) {
            searchParams.set("edit", "true");
        } else {
            searchParams.delete("edit");
        }
        setSearchParams(searchParams, { replace: true });
    }, [editMode, searchParams, setSearchParams]);

    const handleSaveClick = () => {
        if (!toggleSave) {
            save();
            setToggleSave(true); // switch to Cancel
        } else {
            setEditMode(false);
            setToggleSave(false); // back to Save
        }
    };

    return (
        <div
            style={{
                position: "relative",
                bottom: 20,
                left: 20,
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: 'center',
                gap: "10px",
                padding: "16px",
                borderRadius: "16px",
                backdropFilter: "blur(12px)",
                background: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                width: '200px',
                height: '25vh',
                marginLeft: '.9rem'
            }}
        >
            {/* Edit Resume button */}
            <button
                onClick={() => setEditMode(true)}
                style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #c6a9e3, #9b7ede)",
                    color: "#000",
                    padding: "10px 18px",
                    borderRadius: "12px",
                    border: "none",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                }}
            >
                <Edit2 size={18} stroke="#000" />
                Edit Resume
            </button>

            {/* Save / Cancel toggle button */}
            <button
                onClick={handleSaveClick}
                style={{
                    width: "100%",
                    background: toggleSave
                        ? "rgba(255, 255, 255, 0.8)"
                        : "linear-gradient(135deg, #c6a9e3, #9b7ede)",
                    color: "#000",
                    padding: "10px 18px",
                    borderRadius: "12px",
                    border: "none",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                }}
            >
                {toggleSave ? (
                    <>
                        <X size={18} stroke="#000" />
                        Cancel
                    </>
                ) : (
                    <>
                        <Save size={18} stroke="#000" />
                        Save
                    </>
                )}
            </button>
        </div>
    );
}
