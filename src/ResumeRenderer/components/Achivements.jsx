import { useResume } from "../../context/ResumeContext";
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

export default function Achievements() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

    const handleBlur = (index, key, e) => {
        const updated = [...data.achievements];
        updated[index][key] = e.target.innerHTML.trim();
        updateField("achievements", null, updated);
    };

    return (
        <div
            className="achievements resumeSection"
            style={{ ...style?.achieve?.box, position: "relative" }}
            onClick={() => setSelectedSection("achievements")}
        >
            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.achieve?.heading}
            >
                Achievements
            </h2>

            {selectedSection === "achievements" && editMode && (
                <FloatingToolbarSimple
                    sectionKey="achievements"
                    position={{ top: "-45px", right: "20px" }}
                />
            )}

            {data.achievements.map((achievement, index) => (
                <div className="achievement" key={index} style={style?.achieve?.innerbox}>
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleBlur(index, "Title", e)}
                        style={style?.achieve?.title}
                        dangerouslySetInnerHTML={{__html: achievement.Title}}
                    >
                    </h3>
                    <p
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleBlur(index, "Description", e)}
                        style={style?.achieve?.content}
                        dangerouslySetInnerHTML={{__html: achievement.Description}}
                    >
                    </p>
                </div>
            ))}
        </div>
    );
}






