import { useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import InlineToolbar from '../../Components/shared/InlineToolbar';

export default function Projects({areaName}) {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();
    const projectRef = useRef();

    const handleFieldBlur = (index, key, e) => {
        const updated = [...data.projects];
        updated[index][key] = e.target.innerText.trim();
        updateField("projects", null, updated);
    };

    const handleDescBlur = (projIndex, descIndex, e) => {
        const updated = [...data.projects];
        updated[projIndex].description[descIndex].text = e.target.innerText.trim();
        updateField("projects", null, updated);
    };

    const viewType = viewTypes?.projects || "list";
    const isSelected = selectedSection === "projects";
    const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.projects?.heading;
    return (
        <div
            className={`projects resumeSection ${editMode && isSelected ? "selected" : ""}`}
            style={{ ...style?.projects?.box, position: "relative" }}
            onClick={() => setSelectedSection("projects")}
            ref={projectRef}
        >
            <h2 style={headingStyle}>
                Projects
            </h2>

            {data.projects.map((project, index) => (
                <div
                    className="eachProject"
                    key={project.id || index}
                    style={style?.projects?.eachProject}
                >
                    <h3
                        contentEditable={editMode}
                        data-id={project.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "title", e)}
                        style={style?.projects?.title}
                        dangerouslySetInnerHTML={{ __html: project.title }}
                    />

                    {viewType === "list" ? (
                        <ul style={style?.projects?.list}>
                            {project.description?.map((point, i) => (
                                <li
                                    key={point.id || i}
                                    data-id={point.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleDescBlur(index, i, e)}
                                    style={style?.projects?.listItem}
                                    dangerouslySetInnerHTML={{ __html: point.text }}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div style={style?.projects?.bullets}>
                            {project.description?.map((point, i) => (
                                <p
                                    key={point.id || i}
                                    data-id={point.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleDescBlur(index, i, e)}
                                    style={style?.projects?.content}
                                    dangerouslySetInnerHTML={{ __html: point.text }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <InlineToolbar editMode={editMode} containerRef={projectRef} sectionName="projects" />
        </div>
    );
}
