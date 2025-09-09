import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

const layoutComponents = {
    layout2: LayoutTwo,
    layout3: LayoutThree,
};

function LayoutDefault({ data, style, viewType, editMode, handleFieldBlur, handleDescriptionBlur }) {
    return data.map((edu, index) => (
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
    ));
}

function LayoutTwo({ data, style, viewType, editMode, handleFieldBlur, handleDescriptionBlur }) {
    return data.map((edu, index) => (
        <div
            key={edu.id || index}
            style={{ display: "flex", gap: "16px", ...style?.education?.eachEducation }}
        >
            <div style={style?.education?.leftEdu }>
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
            </div>

            <div style={style?.education?.rightEdu }>
                <h3
                    contentEditable={editMode}
                    data-id={edu.id}
                    suppressContentEditableWarning
                    onBlur={(e) => handleFieldBlur(index, "degree", e)}
                    style={style?.education?.degree}
                    dangerouslySetInnerHTML={{ __html: edu.degree }}
                />
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
        </div>
    ));
}
function LayoutThree({ data, style, viewType, editMode, handleFieldBlur, handleDescriptionBlur }) {
    return data.map((edu, index) => (
        <div
            className="educationItem"
            key={edu.id || index}
            style={style?.education?.eachEducation}
        >
          

            <h4
                contentEditable={editMode}
                data-id={edu.id}
                suppressContentEditableWarning
                onBlur={(e) => handleFieldBlur(index, "school", e)}
                style={style?.education?.school}
                dangerouslySetInnerHTML={{ __html: edu.school }}
            />
              <h3
                contentEditable={editMode}
                data-id={edu.id}
                suppressContentEditableWarning
                onBlur={(e) => handleFieldBlur(index, "degree", e)}
                style={style?.education?.degree}
                dangerouslySetInnerHTML={{ __html: edu.degree }}
            />

            <h6
                contentEditable={editMode}
                data-id={edu.id}
                suppressContentEditableWarning
                onBlur={(e) => handleFieldBlur(index, "cityLine", e)}
                style={style?.education?.dates}
            >
                  {edu.endDate} | {edu.city}
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
    ));
}


export default function Education({areaName}) {
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
    const isSelected = selectedSection === "education";
    const layoutType = style?.education?.layoutType;
    const LayoutComponent = layoutComponents[layoutType] || LayoutDefault;

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
    const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.education?.heading;

    return (
        <div
            className={`education resumeSection ${editMode && isSelected ? "selected" : ""}`}
            onClick={() => setSelectedSection("education")}
            style={{ ...style?.education?.box, position: "relative" }}
            ref={educationRef}
        >
            <h2 className={`${style?.education?.dottedheading?"dotted-heading":""}`} style={headingStyle}>
                Education
            </h2>

            <LayoutComponent
                data={data.education}
                style={style}
                viewType={viewType}
                editMode={editMode}
                handleFieldBlur={handleFieldBlur}
                handleDescriptionBlur={handleDescriptionBlur}
            />

            <InlineToolbar editMode={editMode} containerRef={educationRef} sectionName="education" />
        </div>
    );
}