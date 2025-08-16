import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function WorkExperience() {
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

    const handleFieldBlur = (index, key, e) => {
        const updated = [...data.experience];
        updated[index] = { ...updated[index], [key]: e.target.innerText.trim() };
        updateField("experience", null, updated);
    };

    const handleDescriptionBlur = (expIndex, descIndex, e) => {
        const updated = [...data.experience];
        const updatedDescription = [...updated[expIndex].description];
        updatedDescription[descIndex] = {
            ...updatedDescription[descIndex],
            text: e.target.innerText.trim(),
        };
        updated[expIndex] = {
            ...updated[expIndex],
            description: updatedDescription,
        };
        updateField("experience", null, updated);
    };
    const isSelected = selectedSection === "experience";
    return (
        <div
            className={`workExperience resumeSection ${isSelected ? "selected" : ""}`}
            onClick={() => setSelectedSection("experience")}
            style={{ ...style?.workExpe?.box, position: "relative" }}
            ref={workExpRef}
        >
            <h2 style={style?.workExpe?.heading}>
                Work Experience
            </h2>

            {data.experience.map((exp, index) => (
                <div
                    className="workPlace"
                    key={exp.id || index}
                    style={style?.workExpe?.eachWorkPlace}
                >
                    <h3
                        contentEditable={editMode}
                        data-id={exp.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "role", e)}
                        style={style?.workExpe?.role}
                        dangerouslySetInnerHTML={{ __html: exp.role }}
                    />

                    <h4
                        contentEditable={editMode}
                        data-id={exp.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "organization", e)}
                        style={style?.workExpe?.organization}
                        dangerouslySetInnerHTML={{ __html: exp.organization }}
                    />

                    <h6
                        contentEditable={editMode}
                        data-id={exp.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "location", e)}
                        style={style?.workExpe?.dates}
                    >
                        {exp.location} | {exp.startDate} - {exp.endDate}
                    </h6>

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
            ))}

            <InlineToolbar editMode={editMode} containerRef={workExpRef} sectionName="experience" />
        </div>
    );
}
