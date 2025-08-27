import { useRef, useState } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

const layoutComponents = {
    layout2: LayoutBars,
};

function LayoutDefault({ data, style, viewType, editMode, handleTextBlur,BoxStyle }) {
    return viewType === "list" ? (
        <ul style={style?.skills?.wholeList}>
            {data.map((skill, index) => (
                <li
                    key={skill.id}
                    data-id={skill.id}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleTextBlur(index, e)}
                    style={style?.skills?.listItem}
                    dangerouslySetInnerHTML={{ __html: skill.text }}
                />
            ))}
        </ul>
    ) : (
        <div className="individualSkill" style={style?.skills?.everySkillBox}>
            {data.map((skill, index) => (
                <span
                    key={skill.id}
                    data-id={skill.id}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleTextBlur(index, e)}
                    style={BoxStyle}
                    dangerouslySetInnerHTML={{ __html: skill.text }}
                />
            ))}
        </div>
    );
}

function LayoutBars({ data, style, editMode, viewType, handleTextBlur, handleMouseDown, draggingIndex,BoxStyle }) {
    if (viewType === "list") {
        return (
            <ul style={style?.skills?.wholeList}>
                {data.map((skill, index) => (
                    <li
                        key={skill.id}
                        data-id={skill.id}
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTextBlur(index, e)}
                        style={style?.skills?.listItem}
                        dangerouslySetInnerHTML={{ __html: skill.text }}
                    />
                ))}
            </ul>
        );
    }
    return (
        <div className="skillsBars" style={{ display: "flex", flexDirection: "column", gap: "12px", ...style?.skills?.bars }}>
            {data.map((skill, index) => (
                <div
                    className="skillItem"
                    key={skill.id}
                    style={{ display: "flex", alignItems: "center", gap: "12px", ...style?.skills?.skillItem }}
                >
                    <span
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTextBlur(index, e)}
                        dangerouslySetInnerHTML={{ __html: skill.text }}
                        style={{ width: "120px",outline:"none",paddingLeft:"5px", ...style?.skills?.label }}
                    />
                    <div
                        onMouseDown={(e) => handleMouseDown(index, e)}
                        style={{
                            flex: 1,
                            background: "#ccc",
                            height: "6px",
                            borderRadius: "4px",
                            cursor: editMode ? "pointer" : "default",
                            position: "relative",
                            ...style?.skills?.backBars
                        }}
                    >
                        <div
                            style={{
                                width: `${skill.value}%`,
                                height: "100%",
                                background: "#fff",
                                borderRadius: "4px",
                                transition: draggingIndex === index ? "none" : "width 0.2s ease",
                                ...style?.skills?.frontBars
                            }}
                        />
                    </div>
                    <span style={{ minWidth: "30px", textAlign: "right", ...style?.skills?.perValues }}>{skill.value}%</span>
                </div>
            ))}
        </div>
    );
}

export default function Skills({ areaName }) {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();

    const skillsRef = useRef();
    const [draggingIndex, setDraggingIndex] = useState(null);

    const viewType = viewTypes?.skills || "block";
    const layoutType = style?.skills?.layoutType;
    const LayoutComponent = layoutComponents[layoutType] || LayoutDefault;
    const isSelected = selectedSection === "skills";

    const handleTextBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedSkills = [...data.skills];
        updatedSkills[index] = { ...updatedSkills[index], text: newValue };
        updateField("skills", null, updatedSkills);
    };

    const updateValueFromEvent = (index, e, barElement) => {
        const barRect = barElement.getBoundingClientRect();
        const posX = e.clientX - barRect.left;
        let newValue = Math.round((posX / barRect.width) * 100);
        newValue = Math.max(0, Math.min(100, newValue));

        const updatedSkills = [...data.skills];
        updatedSkills[index] = { ...updatedSkills[index], value: newValue };
        updateField("skills", null, updatedSkills);
    };

    const handleMouseDown = (index, e) => {
        if (!editMode) return;
        const barElement = e.currentTarget;
        setDraggingIndex(index);
        updateValueFromEvent(index, e, barElement);

        const handleMouseMove = (moveEvent) => {
            updateValueFromEvent(index, moveEvent, barElement);
        };

        const handleMouseUp = () => {
            setDraggingIndex(null);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.skills?.heading;

    const layoutBoxStyle = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.eachSkillBox;
    const BoxStyle = layoutBoxStyle ?? style?.skills?.eachSkillBox;

    return (
        <div
            className={`skills resumeSection ${editMode && isSelected ? "selected" : ""}`}
            style={{ ...style?.skills?.box, position: "relative" }}
            onClick={() => setSelectedSection("skills")}
            ref={skillsRef}
        >
            <h2 style={headingStyle}>Skills</h2>

            <LayoutComponent
                data={data.skills}
                style={style}
                editMode={editMode}
                viewType={viewType}
                handleTextBlur={handleTextBlur}
                handleMouseDown={handleMouseDown}
                draggingIndex={draggingIndex}
                BoxStyle={BoxStyle}
            />

            <InlineToolbar editMode={editMode} containerRef={skillsRef} sectionName="skills" />
        </div>
    );
}
