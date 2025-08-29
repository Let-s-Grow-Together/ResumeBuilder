import { useRef } from "react";
import InlineToolbar from "../../Components/shared/InlineToolbar";
import { useResume } from "../../context/ResumeContext";

export default function Awards({areaName}) {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();
    const awardsRef = useRef();

    const handleTitleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.awards];
        updated[index] = { ...updated[index], title: newValue };
        updateField("awards", null, updated);
    };

    const handleDescriptionBlur = (awardIndex, descIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.awards];
        const updatedDescriptions = [...updated[awardIndex].description];
        updatedDescriptions[descIndex] = {
            ...updatedDescriptions[descIndex],
            text: newValue,
        };
        updated[awardIndex] = {
            ...updated[awardIndex],
            description: updatedDescriptions,
        };
        updateField("awards", null, updated);
    };

    const viewType = viewTypes?.awards || "list";
    const isSelected = selectedSection === "awards";
    const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.award?.heading;
    return (
        <div
            className={`awards resumeSection ${editMode && isSelected ? "selected" : ""}`}
            style={{ ...style?.award?.box, position: "relative" }}
            onClick={() => setSelectedSection("awards")}
            ref={awardsRef}
        >
            <h2 style={headingStyle} >
                Honours & Awards
            </h2>

            {data.awards.map((award, awardIndex) => (
                <div
                    className="eachAward"
                    key={award.id}
                    style={style?.award?.innerbox}
                >
                    <h3
                        contentEditable={editMode}
                        data-id={award.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTitleBlur(awardIndex, e)}
                        style={style?.award?.title}
                        dangerouslySetInnerHTML={{ __html: award.title || "" }}
                    />

                    {viewType === "list" ? (
                        <ul style={style?.award?.list}>
                            {award.description?.map((desc, descIndex) => (
                                <li
                                    key={desc.id}
                                    data-id={desc.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) =>
                                        handleDescriptionBlur(awardIndex, descIndex, e)
                                    }
                                    style={style?.award?.listItem}
                                    dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div style={style?.award?.awardWrapper}>
                            {award.description?.map((desc, descIndex) => (
                                <p
                                    key={desc.id}
                                    data-id={desc.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) =>
                                        handleDescriptionBlur(awardIndex, descIndex, e)
                                    }
                                    style={style?.award?.content}
                                    dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <InlineToolbar editMode={editMode} containerRef={awardsRef} sectionName="awards" />
        </div>
    );
}
