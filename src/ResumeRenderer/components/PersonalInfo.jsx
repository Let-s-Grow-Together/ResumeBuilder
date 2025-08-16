import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";
import { FaPen } from "react-icons/fa";

export default function PersonalInfo() {
    const { data, style, editMode, updateField, viewTypes, setSelectedSection, selectedSection } = useResume();
    const personalRef = useRef();
    const fileInputRef = useRef(null);
    const viewType = viewTypes?.personalInfo || "block";

    const handleImageClick = () => {
        if (editMode && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => updateField(null, "profilePhoto", reader.result);
        reader.readAsDataURL(file);
    };

    const handleFieldBlur = (field, e) => {
        const value = e.target.innerHTML.trim();
        updateField(null, field, value);
    };

    const handleSummaryBlur = (index, e) => {
        const newText = e.target.innerHTML.trim();
        const updated = [...data.summary];
        updated[index] = { ...updated[index], text: newText };
        updateField("summary", null, updated);
    };
    const isSelected = selectedSection === "personalInfo";
    return (
        <div
            className={`personalInfo resumeSection ${editMode && isSelected ? "selected" : ""}`}
            ref={personalRef}
            style={style?.personalInfo?.box}
            onClick={() => setSelectedSection("personalInfo")}
        >
            <div style={style?.personalInfo?.mixBox}>
                <div className="avatar" style={style?.personalInfo?.avatar?.box}>
                    <div className="profile-card" style={style?.personalInfo?.avatar?.card}>
                        <div
                            className="profile-image hover-image"
                            style={{
                                position: "relative",
                                cursor: editMode ? "pointer" : "default",
                                border: editMode ? "2px solid white" : "none",
                                ...style?.personalInfo?.avatar?.imageDiv,
                            }}
                            onClick={handleImageClick}
                        >
                            <img
                                src={data.profilePhoto}
                                alt="Profile"
                                crossOrigin="anonymous"
                                style={style?.personalInfo?.avatar?.image}
                            />

                            {editMode && (
                                <div className="edit-overlay" style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    ...style?.personalInfo?.avatar?.editOverlay
                                }}>
                                    <FaPen size={16} color="#fff" style={{ ...style?.personalInfo?.avatar?.penIcon }} />
                                </div>
                            )}

                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: "none", ...style?.personalInfo?.inputFeild }}
                            />
                        </div>
                    </div>
                </div>

                <div style={style?.personalInfo?.anotherBox}>
                    <div style={style?.personalInfo?.name}>
                        <div
                            contentEditable={editMode}
                            style={style?.personalInfo?.firstName}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur("firstName", e)}
                            dangerouslySetInnerHTML={{ __html: data.firstName }}
                        />
                        <div
                            contentEditable={editMode}
                            style={style?.personalInfo?.lastName}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur("lastName", e)}
                            dangerouslySetInnerHTML={{ __html: data.lastName }}
                        />
                    </div>

                    <div
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur("position", e)}
                        style={style?.personalInfo?.position}
                        dangerouslySetInnerHTML={{ __html: data.position }}
                    />
                </div>
            </div>

            {viewType === "list" ? (
                <ul style={style?.personalInfo?.list}>
                    {data.summary.map((item, index) => (
                        <li
                            key={item.id || index}
                            data-id={item.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleSummaryBlur(index, e)}
                            style={style?.personalInfo?.listItem}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    ))}
                </ul>
            ) : (
                <div style={style?.personalInfo?.summaryBox}>
                    {data.summary.map((item, index) => (
                        <p
                            key={item.id || index}
                            data-id={item.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleSummaryBlur(index, e)}
                            style={style?.personalInfo?.summaryContent}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    ))}
                </div>
            )}

            <InlineToolbar
                editMode={editMode}
                containerRef={personalRef}
                sectionName="summary"
            />
        </div>
    );
}