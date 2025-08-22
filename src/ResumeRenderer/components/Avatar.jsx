import { useResume } from "../../context/ResumeContext";
import { useRef } from "react";
import { FaPen } from "react-icons/fa";

export default function Avatar() {
    const { data, updateField, editMode, style, selectedSection, setSelectedSection } = useResume();
    const fileInputRef = useRef(null);

    if (style?.avatar?.showAvatar === false) {
        return null;
    }

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

    const handleTextBlur = (field, e) => {
        const value = e.target.innerText.trim();
        updateField(null, field, value);
    };

    const initials = `${data.firstName?.[0] || ""}${data.lastName?.[0] || ""}`.toUpperCase();
    const isSelected = selectedSection === "avatar";
    return (
        <div style={style?.avatar?.box}
            onClick={() => setSelectedSection("avatar")}
            className={`avatar resumeSection ${editMode && isSelected ? "selected" : ""}`}
        >
            <div className="profile-card" style={style?.avatar?.card}>

                {/* 🖼️ Image OR 🔤 Initials */}
                {style?.avatar?.showImage && data.profilePhoto ? (
                    <div
                        className="profile-image hover-image"
                        style={{
                            position: "relative",
                            cursor: editMode ? "pointer" : "default",
                            border: editMode ? "2px solid white" : "none",
                            ...style?.avatar?.imageDiv,
                        }}
                        onClick={handleImageClick}
                    >
                        <img
                            src={data.profilePhoto}
                            alt="Profile"
                            crossOrigin="anonymous"
                            style={style?.avatar?.image}
                        />

                        {editMode && (
                            <div className="edit-overlay">
                                <FaPen size={16} color="#fff" />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                        />
                    </div>
                ) : (
                    // ✅ Hexagon with Border
                    <div style={style?.avatar?.hexWrapper}>
                        <div style={style?.avatar?.initialsBox}>
                            {initials}
                        </div>
                    </div>
                )}

                {/* Name + position */}
                {style?.avatar?.sideBox ? (
                    <div style={style?.avatar?.innerBox}>
                        <h2 style={style?.avatar?.heading}>
                            <span
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleTextBlur("firstName", e)}
                            >
                                {data.firstName}
                            </span>
                            <br />
                            <span
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleTextBlur("lastName", e)}
                            >
                                {data.lastName}
                            </span>
                        </h2>
                        <p
                            style={style?.avatar?.position}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleTextBlur("position", e)}
                        >
                            {data.position}
                        </p>
                    </div>
                ) : (
                    <div style={style?.avatar?.contHeading}>
                        <h2 style={style?.avatar?.heading}>
                            <span
                                style={{...style?.avatar?.firstName,outline:"none"}}
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleTextBlur("firstName", e)}
                            >
                                {data.firstName}
                            </span>
                            <br style={style.avatar?.brTag} />
                            <span
                                style={{...style?.avatar?.lastName,outline:"none"}}
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleTextBlur("lastName", e)}
                            >
                                {data.lastName}
                            </span>
                        </h2>
                        <p
                            style={{...style?.avatar?.position,outline:"none"}}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleTextBlur("position", e)}
                        >
                            {data.position}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
