import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

const layoutComponents = {
    layout2: LayoutTwo,
};

function LayoutDefault({ data, style, viewType, editMode, handleFieldBlur, handleDescriptionBlur }) {
    return data.map((exp, index) => (
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
    ))
}

function LayoutTwo({ data, style, viewType, editMode, handleFieldBlur, handleDescriptionBlur }) {
    return data.map((exp, index) => (
        <div
            key={exp.id || index}
            style={{ display: "flex", gap: "16px", ...style?.workExpe?.eachWorkPlace }}
        >
            <div style={ style?.workExpe?.leftWork}>
                <h3
                    contentEditable={editMode}
                    data-id={exp.id}
                    suppressContentEditableWarning
                    onBlur={(e) => handleFieldBlur(index, "role", e)}
                    style={style?.workExpe?.role}
                    dangerouslySetInnerHTML={{ __html: exp.role }}
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
            </div>

            <div style={style?.workExpe?.rightWork}>
                <h4
                    contentEditable={editMode}
                    data-id={exp.id}
                    suppressContentEditableWarning
                    onBlur={(e) => handleFieldBlur(index, "organization", e)}
                    style={style?.workExpe?.organization}
                    dangerouslySetInnerHTML={{ __html: exp.organization }}
                />
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
        </div>
    ));
}

export default function WorkExperience({areaName}) {
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

        if (key === "location") {
            const text = e.target.innerText.trim();
            const [cityPart = "", dateRange = ""] = text.split("|").map(str => str.trim());
            const [startDate = "", endDate = ""] = dateRange.split("-").map(str => str.trim());

            updated[index].location = cityPart;
            updated[index].startDate = startDate;
            updated[index].endDate = endDate;
        } else {
            updated[index][key] = e.target.innerText.trim();
        }

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
    const layoutType = style?.workExpe?.layoutType;
    const LayoutComponent = layoutComponents[layoutType] || LayoutDefault;
    const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.workExpe?.heading;

    return (
        <div
            className={`workExperience resumeSection ${editMode && isSelected ? "selected" : ""}`}
            onClick={() => setSelectedSection("experience")}
            style={{ ...style?.workExpe?.box, position: "relative" }}
            ref={workExpRef}
        >
            <h2 className={`${style?.workExpe?.dottedheading?"dotted-heading":""}`} style={headingStyle}>
                Work Experience
            </h2>
            <LayoutComponent
                data={data.experience}
                style={style}
                viewType={viewType}
                editMode={editMode}
                handleFieldBlur={handleFieldBlur}
                handleDescriptionBlur={handleDescriptionBlur}
            />

            <InlineToolbar editMode={editMode} containerRef={workExpRef} sectionName="experience" />
        </div>
    );
}
