import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Skills() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection, viewTypes } = useResume();
    const skillsRef = useRef();

    const handleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedSkills = [...data.skills];
        updatedSkills[index] = { ...updatedSkills[index], text: newValue };
        updateField("skills", null, updatedSkills);
    };

    const viewType = viewTypes?.skills || "block";
    const isSelected = selectedSection === "skills";
    return (
        <div
            className={`skills resumeSection ${editMode && isSelected ? "selected" : ""}`}
            style={{ ...style?.skills?.box, position: "relative" }}
            onClick={() => setSelectedSection("skills")}
            ref={skillsRef}
        >
            <h2 style={style?.skills?.heading}>Skills</h2>

            {viewType === "list" ? (
                <ul style={style?.skills?.wholeList}>
                    {data.skills.map((skill, index) => (
                        <li
                            key={skill.id}
                            data-id={skill.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.skills?.listItem}
                            dangerouslySetInnerHTML={{ __html: skill.text }}
                        />
                    ))}
                </ul>
            ) : (
                <div className="individualSkill" style={style?.skills?.everySkillBox}>
                    {data.skills.map((skill, index) => (
                        <span
                            key={skill.id}
                            data-id={skill.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.skills?.eachSkillBox}
                            dangerouslySetInnerHTML={{ __html: skill.text }}
                        />
                    ))}
                </div>
            )}

            <InlineToolbar editMode={editMode} containerRef={skillsRef} sectionName="skills" />
        </div>
    );
}
