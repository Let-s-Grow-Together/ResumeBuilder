

import { useRef, useState } from "react";
import React from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

function LayoutCategories({ data, style, editMode, handleCategoryBlur, handleItemEdit, BoxStyle }) {
    return (
        <div className="categorizedSkills" style={{ ...style?.skills?.categoriesContainer }}>
            {data.map((skillGroup, groupIndex) => (
                <div key={skillGroup.id} className="skillCategory" style={{ marginBottom: "1rem", ...style?.skills?.categoryBox }}>
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleCategoryBlur(groupIndex, e)}
                        data-id={skillGroup.id}
                        style={{ ...style?.skills?.h3}}
                        dangerouslySetInnerHTML={{ __html: skillGroup.category }}
                    />
                    <div className="skillItems" style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", alignItems: "center" }}>
                        {skillGroup.items.map((item, itemIndex) => (
                            <React.Fragment key={`${skillGroup.id}-${itemIndex}`}>
                                <span
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleItemEdit(groupIndex, itemIndex, e)}
                                    data-id={`${skillGroup.id}-item-${itemIndex}`}
                                    style={{...style?.skills?.span}}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                                {itemIndex < skillGroup.items.length - 1 && (
                                    <span style={{ marginLeft: "0.5rem", ...style?.skills?.separator }}>•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function LayoutDefault({ data, style, viewType, editMode, handleTextBlur, BoxStyle }) {
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

function LayoutBars({ data, style, editMode, viewType, handleTextBlur, handleMouseDown, draggingIndex, BoxStyle }) {
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
                        data-id={skill.id}
                        dangerouslySetInnerHTML={{ __html: skill.text }}
                        style={{ width: "120px", outline: "none", paddingLeft: "5px", ...style?.skills?.label }}
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

const layoutComponents = {
    layout2: LayoutBars,
    layout3: LayoutCategories, 
};

export default function Skills({ areaName }) {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
        addEntryAfter,
        removeEntry,
        addFullEntryAfter,
        removeFullEntry
    } = useResume();

    const skillsRef = useRef();
    const [draggingIndex, setDraggingIndex] = useState(null);

    const viewType = viewTypes?.skills || "block";
    const layoutType = style?.skills?.layoutType;
    const LayoutComponent = layoutComponents[layoutType] || LayoutDefault;
    const isSelected = selectedSection === "skills";

    const isCategorizedLayout = layoutType === "layout3";
    const skillsData = isCategorizedLayout
        ? data.skills.filter(skill => skill.category && Array.isArray(skill.items))
        : data.skills.filter(skill => skill.text);

    const handleTextBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedSkills = [...data.skills];
        
        if (isCategorizedLayout) {
            const individualSkills = data.skills.filter(skill => skill.text);
            const originalIndex = data.skills.findIndex(skill => skill === individualSkills[index]);
            if (originalIndex !== -1) {
                updatedSkills[originalIndex] = { ...updatedSkills[originalIndex], text: newValue };
            }
        } else {
            updatedSkills[index] = { ...updatedSkills[index], text: newValue };
        }
        
        updateField("skills", null, updatedSkills);
    };

    const updateValueFromEvent = (index, e, barElement) => {
        const barRect = barElement.getBoundingClientRect();
        const posX = e.clientX - barRect.left;
        let newValue = Math.round((posX / barRect.width) * 100);
        newValue = Math.max(0, Math.min(100, newValue));

        const updatedSkills = [...data.skills];
        
        if (isCategorizedLayout) {
            const individualSkills = data.skills.filter(skill => skill.text);
            const originalIndex = data.skills.findIndex(skill => skill === individualSkills[index]);
            if (originalIndex !== -1) {
                updatedSkills[originalIndex] = { ...updatedSkills[originalIndex], value: newValue };
            }
        } else {
            updatedSkills[index] = { ...updatedSkills[index], value: newValue };
        }
        
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

    const handleCategoryBlur = (groupIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedSkills = [...data.skills];
        
        const categories = data.skills.filter(skill => skill.category && Array.isArray(skill.items));
        const category = categories[groupIndex];
        const originalIndex = data.skills.findIndex(skill => skill === category);
        
        if (originalIndex !== -1) {
            updatedSkills[originalIndex] = { ...updatedSkills[originalIndex], category: newValue };
            updateField("skills", null, updatedSkills);
        }
    };

    const handleItemEdit = (groupIndex, itemIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedSkills = [...data.skills];

        const categories = data.skills.filter(skill => skill.category && Array.isArray(skill.items));
        const category = categories[groupIndex];
        const originalIndex = data.skills.findIndex(skill => skill === category);

        if (originalIndex !== -1 && Array.isArray(updatedSkills[originalIndex].items)) {
            const updatedItems = [...updatedSkills[originalIndex].items];
            updatedItems[itemIndex] = newValue;
            updatedSkills[originalIndex] = { ...updatedSkills[originalIndex], items: updatedItems };
            updateField("skills", null, updatedSkills);
        }
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
                data={skillsData}
                style={style}
                editMode={editMode}
                viewType={viewType}
                handleTextBlur={handleTextBlur}
                handleMouseDown={handleMouseDown}
                draggingIndex={draggingIndex}
                BoxStyle={BoxStyle}
                handleCategoryBlur={handleCategoryBlur}
                handleItemEdit={handleItemEdit}
            />

            <InlineToolbar
                editMode={editMode}
                containerRef={skillsRef}
                sectionName="skills"
            />
        </div>
    );
}