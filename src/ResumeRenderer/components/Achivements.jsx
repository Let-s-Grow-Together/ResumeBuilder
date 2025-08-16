import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Achievements() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();
    const achievementRef = useRef();

    const handleTitleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.achievements];
        updated[index] = { ...updated[index], title: newValue };
        updateField("achievements", null, updated);
    };

    const handleDescriptionBlur = (achievementIndex, descIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.achievements];
        const updatedDescriptions = [...updated[achievementIndex].description];
        updatedDescriptions[descIndex] = {
            ...updatedDescriptions[descIndex],
            text: newValue,
        };
        updated[achievementIndex] = {
            ...updated[achievementIndex],
            description: updatedDescriptions,
        };
        updateField("achievements", null, updated);
    };

    const viewType = viewTypes?.achievements || "list";
    const isSelected = selectedSection === "achievements";
    return (
        <div
            className={`achievements resumeSection ${isSelected ? "selected" : ""}`}
            style={{ ...style?.achieve?.box,position:"relative"}}
            onClick={() => setSelectedSection("achievements")}
            ref={achievementRef}
        >
            <h2 style={style?.achieve?.heading} >
                Achievements
            </h2>

            {data.achievements.map((achievement, achievementIndex) => (
                <div
                    className="eachAchievement"
                    key={achievement.id}
                    style={style?.achieve?.innerbox}
                >
                    <h3
                        contentEditable={editMode}
                        data-id={achievement.id}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTitleBlur(achievementIndex, e)}
                        style={style?.achieve?.title}
                        dangerouslySetInnerHTML={{ __html: achievement.title || "" }}
                    />

                    {viewType === "list" ? (
                        <ul style={style?.achieve?.list}>
                            {achievement.description?.map((desc, descIndex) => (
                                <li
                                    key={desc.id}
                                    data-id={desc.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) =>
                                        handleDescriptionBlur(achievementIndex, descIndex, e)
                                    }
                                    style={style?.achieve?.listItem}
                                    dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div style={style?.achieve?.eachAchieve}>
                            {achievement.description?.map((desc, descIndex) => (
                                <p
                                    key={desc.id}
                                    data-id={desc.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) =>
                                        handleDescriptionBlur(achievementIndex, descIndex, e)
                                    }
                                    style={style?.achieve?.content}
                                    dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <InlineToolbar editMode={editMode} containerRef={achievementRef} sectionName="achievements" />
        </div>
    );
}
