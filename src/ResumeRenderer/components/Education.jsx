import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Education() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();

    const educationRef = useRef();
    const viewType = viewTypes?.education || "list";

    const handleFieldBlur = (index, key, e) => {
        const updated = [...data.education];

        if (key === "cityLine") {
            const text = e.target.innerText.trim();

            const [cityPart = "", dateRange = ""] = text.split("|").map(str => str.trim());
            const [startDate = "", endDate = ""] = dateRange.split("-").map(str => str.trim());

            updated[index].city = cityPart;
            updated[index].startDate = startDate;
            updated[index].endDate = endDate;
        } else {
            updated[index][key] = e.target.innerText.trim();
        }

        updateField("education", null, updated);
    };

    const handleDescriptionBlur = (eduIndex, descIndex, e) => {
        const updated = [...data.education];
        const updatedDescription = [...updated[eduIndex].description];
        updatedDescription[descIndex] = {
            ...updatedDescription[descIndex],
            text: e.target.innerText.trim(),
        };
        updated[eduIndex] = {
            ...updated[eduIndex],
            description: updatedDescription,
        };
        updateField("education", null, updated);
    };
    const isSelected = selectedSection === "education";
    return (
        <div
            className={`education resumeSection ${editMode && isSelected ? "selected" : ""}`}
            onClick={() => setSelectedSection("education")}
            style={{ ...style?.education?.box, position: "relative" }}
            ref={educationRef}
        >
            <h2 style={style?.education?.heading}>
                Education
            </h2>

            {data.education.map((edu, index) => (
                <div
                    className="educationItem"
                    key={edu.id || index}
                    style={style?.education?.eachEducation}
                >
                    <h3
                        contentEditable={editMode}
                        data-id={edu.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "degree", e)}
                        style={style?.education?.degree}
                        dangerouslySetInnerHTML={{ __html: edu.degree }}
                    />

                    <h4
                        contentEditable={editMode}
                        data-id={edu.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "school", e)}
                        style={style?.education?.school}
                        dangerouslySetInnerHTML={{ __html: edu.school }}
                    />

                    <h6
                        contentEditable={editMode}
                        data-id={edu.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "cityLine", e)}
                        style={style?.education?.dates}
                    >
                        {edu.city} | {edu.startDate} - {edu.endDate}
                    </h6>

                    {viewType === "list" ? (
                        <ul style={style?.education?.list}>
                            {edu.description?.map((item, i) => (
                                <li
                                    key={item.id || i}
                                    data-id={item.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleDescriptionBlur(index, i, e)}
                                    style={style?.education?.listItem}
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div style={style?.education?.paragraphWrapper}>
                            {edu.description?.map((item, i) => (
                                <p
                                    key={item.id || i}
                                    data-id={item.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleDescriptionBlur(index, i, e)}
                                    style={style?.education?.content}
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <InlineToolbar editMode={editMode} containerRef={educationRef} sectionName="education" />
        </div>
    );
}
