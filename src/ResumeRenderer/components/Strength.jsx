import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Strengths({areaName}) {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();
    const strengthRef = useRef();

    const handleTitleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.strengths];
        updated[index] = { ...updated[index], title: newValue };
        updateField("strengths", null, updated);
    };

    const handleDescriptionBlur = (strengthIndex, descIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.strengths];
        const updatedDescriptions = [...updated[strengthIndex].description];
        updatedDescriptions[descIndex] = {
            ...updatedDescriptions[descIndex],
            text: newValue,
        };
        updated[strengthIndex] = {
            ...updated[strengthIndex],
            description: updatedDescriptions,
        };
        updateField("strengths", null, updated);
    };

    const viewType = viewTypes?.strengths || "list";
    const isSelected = selectedSection === "strengths";
    const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.strength?.heading;
    return (
        <div
            className={`strengths resumeSection ${editMode && isSelected ? "selected" : ""}`}
            style={{ ...style?.strength?.box, position: "relative" }}
            onClick={() => setSelectedSection("strengths")}
            ref={strengthRef}
        >
            <h2 style={headingStyle}>
                Strengths
            </h2>

            {data.strengths.map((strength, strengthIndex) => (
                <div
                    className="eachStrength"
                    key={strength.id}
                    style={style?.strength?.innerbox}
                >
                    <h3
                        contentEditable={editMode}
                        data-id={strength.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTitleBlur(strengthIndex, e)}
                        style={style?.strength?.title}
                        dangerouslySetInnerHTML={{ __html: strength.title || "" }}
                    />

                    {viewType === "list" ? (
                        <ul style={style?.strength?.list}>
                            {strength.description?.map((desc, descIndex) => (
                                <li
                                    key={desc.id}
                                    data-id={desc.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) =>
                                        handleDescriptionBlur(strengthIndex, descIndex, e)
                                    }
                                    style={style?.strength?.listItem}
                                    dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div style={style?.strength?.eachStrength}>
                            {strength.description?.map((desc, descIndex) => (
                                <p
                                    key={desc.id}
                                    data-id={desc.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) =>
                                        handleDescriptionBlur(strengthIndex, descIndex, e)
                                    }
                                    style={style?.strength?.content}
                                    dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <InlineToolbar editMode={editMode} containerRef={strengthRef} sectionName="strengths" />
        </div>
    );
}
