
import { useResume } from "../../context/ResumeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

const iconMap = {
    faWindowMinimize: faWindowMinimize,
};

export default function WorkExperience() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();//ye

    const handleBlur = (index, key, e) => {
        const updated = [...data.experience];
        updated[index][key] = e.target.innerText.trim();
        updateField('experience', null, updated);
    };

    if (!style.workExpe?.sideline) {
        return (
            <div
                className="workExperience resumeSection"
                onClick={() => setSelectedSection("experience")}//ye
                style={{ ...style?.workExpe?.box, position: "relative" }}
            >
                <h2 contentEditable={editMode} style={style?.workExpe?.heading}>
                    Work Experience
                    {selectedSection === "experience" && (
                        <FloatingToolbarSimple sectionKey="experience" />
                    )} {/* ye */}
                </h2>


                {data.experience.map((exp, index) => (
                    <div className="workPlace" key={index} style={style?.workExpe?.eachWorkPlace}>
                        <h3
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Role", e)}
                            style={style?.workExpe?.role}
                        >
                            {exp.Role}
                        </h3>
                        <h4
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Organization", e)}
                            style={style?.workExpe?.organization}
                        >
                            {exp.Organization}
                        </h4>
                        <p
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Dates", e)}
                            style={style?.workExpe?.dates}
                        >
                            {exp.Location} | {exp["Start Date"]} - {exp["End Date"]}
                        </p>
                        <ul style={style?.workExpe?.wholeList}>
                            {exp.Description.map((item, i) => (
                                <li
                                    key={`exp${index}-${item.id}`}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => {
                                        const updated = [...data.experience];
                                        updated[index].Description[i].text = e.target.innerText.trim();
                                        updateField("experience", null, updated);
                                    }}
                                    style={{
                                        ...style?.workExpe?.bullets,
                                        listStyle: "none",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }

    else {
        return (
            <div
                className="workExperience resumeSection"
                onClick={() => setSelectedSection("experience")}
                style={{ ...style?.workExpe?.box, position: "relative" }}
            >
                <h2 contentEditable={editMode} style={style?.workExpe?.heading}>
                    Work Experience
                    {selectedSection === "experience" && (
                        <FloatingToolbarSimple sectionKey="experience" />
                    )}
                </h2>

                <div className="timeline" style={style?.workExpe?.timeline}>
                    {data.experience.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="dot" style={style?.workExpe?.dot}></div>

                            <div className="workPlace" style={style?.workExpe?.eachWorkPlace}>
                                <h3
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleBlur(index, "Role", e)}
                                    style={style?.workExpe?.role}
                                >
                                    {exp.Role}
                                </h3>

                                <h4
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleBlur(index, "Organization", e)}
                                    style={style?.workExpe?.organization}
                                >
                                    {exp.Organization}
                                </h4>

                                <p
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleBlur(index, "Dates", e)}
                                    style={style?.workExpe?.dates}
                                >
                                    {exp.Location} | {exp["Start Date"]} - {exp["End Date"]}
                                </p>

                                <ul style={style?.workExpe?.wholeList}>
                                    {exp.Description.map((item, i) => (
                                        <li
                                            key={`exp${index}-${item.id}`}
                                            contentEditable={editMode}
                                            suppressContentEditableWarning
                                            onBlur={(e) => {
                                                const updated = [...data.experience];
                                                updated[index].Description[i].text = e.target.innerText.trim();
                                                updateField("experience", null, updated);
                                            }}
                                            style={{
                                                ...style?.workExpe?.bullets,
                                                listStyle: "none",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
