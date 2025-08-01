import { useResume } from "../../context/ResumeContext";
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

export default function Skills() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

    const handleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedSkills = [...data.skills];
        updatedSkills[index] = newValue;
        updateField("skills", null, updatedSkills);
    };

    const handleToggleDisplayType = (type) => {
        updateField(null, "skillsDisplayType", type);
    };

    const showToolbar = selectedSection === "skills";
    const isList = data.skillsDisplayType === "list";

    return (
        <div
            className="skills resumeSection"
            style={{ ...style?.skills?.box, position: "relative" }}
            onClick={() => setSelectedSection("skills")}
        >
            <h2 style={style?.skills?.heading}>Skills</h2>

            {editMode && (
                <div style={{ marginBottom: 8 }}>
                    <button
                        onClick={() => handleToggleDisplayType("block")}
                        style={{
                            backgroundColor: !isList ? "#ccc" : "#eee",
                            marginRight: 6,
                            borderRadius: 4,
                            padding: "4px 10px"
                        }}
                    >
                        Block
                    </button>
                    <button
                        onClick={() => handleToggleDisplayType("list")}
                        style={{
                            backgroundColor: isList ? "#ccc" : "#eee",
                            borderRadius: 4,
                            padding: "4px 10px"
                        }}
                    >
                        List
                    </button>
                </div>
            )}

            {showToolbar && (
                <FloatingToolbarSimple sectionKey="skills" />
            )}

            {isList ? (
                <ul style={style?.skills?.wholeList}>
                    {data.skills.map((skill, index) => (
                        <li
                            key={index}
                            contentEditable={editMode}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.skills?.listItem}
                            dangerouslySetInnerHTML={{ __html: skill }}
                        />
                    ))}
                </ul>
            ) : (
                <div className="individualSkill" style={style?.skills?.everySkillBox}>
                    {data.skills.map((skill, index) => (
                        <div
                            key={index}
                            contentEditable={editMode}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.skills?.eachSkillBox}
                            dangerouslySetInnerHTML={{ __html: skill }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}