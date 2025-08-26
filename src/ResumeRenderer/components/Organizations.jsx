import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Organizations({areaName}) {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();

    const orgRef = useRef();

    const handleTitleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.organizations];
        updated[index] = { ...updated[index], title: newValue };
        updateField("organizations", null, updated);
    };

    const handleDescriptionBlur = (organizationIndex, descIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.organizations];
        const updatedDescriptions = [...updated[organizationIndex].description];
        updatedDescriptions[descIndex] = {
            ...updatedDescriptions[descIndex],
            text: newValue,
        };
        updated[organizationIndex] = {
            ...updated[organizationIndex],
            description: updatedDescriptions,
        };
        updateField("organizations", null, updated);
    };

    const viewType = viewTypes?.organizations || "list";
    const isSelected = selectedSection === "organizations";
    const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.organiz?.heading;
    return (
        <div
            className={`organizations resumeSection ${editMode && isSelected ? "selected" : ""}`}
            style={{ ...style?.organiz?.box, position: "relative" }}
            onClick={() => setSelectedSection("organizations")}
            ref={orgRef}
        >
            <h2 style={headingStyle} >
                Organizations
            </h2>

            {data.organizations.map((organization, organizationIndex) => (
                <div
                    className="eachOrganization"
                    key={organization.id}
                    style={style?.organiz?.innerbox}
                >
                    <h3
                        contentEditable={editMode}
                        data-id={organization.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTitleBlur(organizationIndex, e)}
                        style={style?.organiz?.title}
                        dangerouslySetInnerHTML={{ __html: organization.title || "" }}
                    />

                    {viewType === "list" ? (
                        <ul style={style?.organiz?.list}>
                            {organization.description?.map((desc, descIndex) => (
                                <li
                                    key={desc.id}
                                    data-id={desc.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) =>
                                        handleDescriptionBlur(organizationIndex, descIndex, e)
                                    }
                                    style={style?.organiz?.listItem}
                                    dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div style={style?.organiz?.organizWrapper}>
                            {organization.description?.map((desc, descIndex) => (
                                <p
                                    key={desc.id}
                                    data-id={desc.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) =>
                                        handleDescriptionBlur(organizationIndex, descIndex, e)
                                    }
                                    style={style?.organiz?.content}
                                    dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <InlineToolbar editMode={editMode} containerRef={orgRef} sectionName="organizations" />
        </div>
    );
}
