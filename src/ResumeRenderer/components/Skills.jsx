
import { useRef, useState } from "react";
import React from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

//
// === Layout: Categories ===
//
function LayoutCategories({ data, style, editMode, handleCategoryBlur, handleItemEdit }) {
    return (
        <div className="categorizedSkills" style={{ ...style?.skills?.categoriesContainer }}>
            {data.map((group, groupIndex) => (
                <div
                    key={groupIndex}
                    className="skillCategory"
                    style={{ marginBottom: "1rem", ...style?.skills?.categoryBox }}
                >
                    {/* Category Heading */}
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleCategoryBlur(groupIndex, e)}
                        style={{ ...style?.skills?.h3 }}
                    >
                        {group.category}
                    </h3>

                    {/* Items */}
                    <div
                        className="skillItems"
                        style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", alignItems: "center" }}
                    >
                        {group.items.map((item, itemIndex) => (
                            <React.Fragment key={`${groupIndex}-${itemIndex}`}>
                                <span
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleItemEdit(groupIndex, itemIndex, e)}
                                    style={{ ...style?.skills?.span }}
                                >
                                    {item.name}
                                </span>
                                {itemIndex < group.items.length - 1 && (
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

//
// === Layout: Bars ===
//
function LayoutBars({ data, style, editMode, handleItemEdit, handleMouseDown, draggingIndex }) {
    return (
        <div
            className="skillsBars"
            style={{ display: "flex", flexDirection: "column", gap: "12px", ...style?.skills?.bars }}
        >
            {data.map((group, groupIndex) =>
                group.items.map((item, itemIndex) => (
                    <div
                        className="skillItem"
                        key={`${groupIndex}-${itemIndex}`}
                        style={{ display: "flex", alignItems: "center", gap: "12px", ...style?.skills?.skillItem }}
                    >
                        {/* Label */}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleItemEdit(groupIndex, itemIndex, e)}
                            style={{ width: "120px", outline: "none", paddingLeft: "5px", ...style?.skills?.label }}
                        >
                            {item.name}
                        </span>

                        {/* Progress Bar */}
                        <div
                            onMouseDown={(e) => handleMouseDown(groupIndex, itemIndex, e)}
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
                                    width: `${item.value}%`,
                                    height: "100%",
                                    background: "#fff",
                                    borderRadius: "4px",
                                    transition:
                                        draggingIndex === `${groupIndex}-${itemIndex}` ? "none" : "width 0.2s ease",
                                    ...style?.skills?.frontBars
                                }}
                            />
                        </div>

                        {/* Percentage */}
                        <span style={{ minWidth: "30px", textAlign: "right", ...style?.skills?.perValues }}>
                            {item.value}%
                        </span>
                    </div>
                ))
            )}
        </div>
    );
}

//
// === Layout: Simple List ===
//
function LayoutDefault({ data, style, editMode, handleItemEdit }) {
    return (
        <ul style={style?.skills?.wholeList}>
            {data.map((group, groupIndex) =>
                group.items.map((item, itemIndex) => (
                    <li
                        key={`${groupIndex}-${itemIndex}`}
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleItemEdit(groupIndex, itemIndex, e)}
                        style={style?.skills?.listItem}
                    >
                        {item.name}
                    </li>
                ))
            )}
        </ul>
    );
}

//
// === Layout Mapping ===
//
const layoutComponents = {
    layout1: LayoutDefault,
    layout2: LayoutBars,
    layout3: LayoutCategories,
};

//
// === Main Component ===
//
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
    const layoutType = style?.skills?.layoutType || "layout1";
    const LayoutComponent = layoutComponents[layoutType] || LayoutDefault;
    const isSelected = selectedSection === "skills";

    // === Handlers ===
    const handleCategoryBlur = (groupIndex, e) => {
        const newValue = e.target.innerText.trim();
        const updatedSkills = [...data.skills];
        updatedSkills[groupIndex] = { ...updatedSkills[groupIndex], category: newValue };
        updateField("skills", null, updatedSkills);
    };

    const handleItemEdit = (groupIndex, itemIndex, e) => {
        const newValue = e.target.innerText.trim();
        const updatedSkills = [...data.skills];
        const updatedItems = [...updatedSkills[groupIndex].items];
        updatedItems[itemIndex] = { ...updatedItems[itemIndex], name: newValue };
        updatedSkills[groupIndex] = { ...updatedSkills[groupIndex], items: updatedItems };
        updateField("skills", null, updatedSkills);
    };

    const handleMouseDown = (groupIndex, itemIndex, e) => {
        if (!editMode) return;
        const barElement = e.currentTarget;
        setDraggingIndex(`${groupIndex}-${itemIndex}`);
        updateValueFromEvent(groupIndex, itemIndex, e, barElement);

        const handleMouseMove = (moveEvent) => {
            updateValueFromEvent(groupIndex, itemIndex, moveEvent, barElement);
        };

        const handleMouseUp = () => {
            setDraggingIndex(null);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const updateValueFromEvent = (groupIndex, itemIndex, e, barElement) => {
        const barRect = barElement.getBoundingClientRect();
        const posX = e.clientX - barRect.left;
        let newValue = Math.round((posX / barRect.width) * 100);
        newValue = Math.max(0, Math.min(100, newValue));

        const updatedSkills = [...data.skills];
        const updatedItems = [...updatedSkills[groupIndex].items];
        updatedItems[itemIndex] = { ...updatedItems[itemIndex], value: newValue };
        updatedSkills[groupIndex] = { ...updatedSkills[groupIndex], items: updatedItems };
        updateField("skills", null, updatedSkills);
    };

    // === Styles ===
    const layoutHeading =
        style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.skills?.heading;

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
                handleCategoryBlur={handleCategoryBlur}
                handleItemEdit={handleItemEdit}
                handleMouseDown={handleMouseDown}
                draggingIndex={draggingIndex}
            />

            <InlineToolbar editMode={editMode} containerRef={skillsRef} sectionName="skills" />
        </div>
    );
}
