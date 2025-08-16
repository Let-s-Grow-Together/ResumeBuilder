import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Certificates() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();
    const certificateRef = useRef();

    const handleFieldBlur = (index, key, e) => {
        const updated = [...data.certifications];
        updated[index][key] = e.target.innerText.trim();
        updateField("certifications", null, updated);
    };

    const handleDescBlur = (certIndex, descIndex, e) => {
        const updated = [...data.certifications];
        updated[certIndex].description[descIndex].text = e.target.innerText.trim();
        updateField("certifications", null, updated);
    };

    const viewType = viewTypes?.certifications || "list";
    const isSelected = selectedSection === "certifications";
    return (
        <div
            className={`certificates resumeSection ${isSelected ? "selected" : ""}`}
            style={{ ...style?.certificate?.box, position: "relative" }}
            onClick={() => setSelectedSection("certifications")}
            ref={certificateRef}
        >
            <h2 style={style?.certificate?.heading} >
                Certificates
            </h2>

            <div style={style?.certificate?.innerBox}>
                {data.certifications.map((cert, index) => (
                    <div key={cert.id || index} style={style?.certificate?.eachcertificate} className="eachCertificate">
                        <h3
                            contentEditable={editMode}
                            data-id={cert.id}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "title", e)}
                            style={style?.certificate?.title}
                            dangerouslySetInnerHTML={{ __html: cert.title }}
                        />

                        <h4
                            contentEditable={editMode}
                            data-id={cert.id}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "organization", e)}
                            style={style?.certificate?.organiz}
                            dangerouslySetInnerHTML={{ __html: cert.organization }}
                        />

                        <h5
                            contentEditable={editMode}
                            data-id={cert.id}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "date", e)}
                            style={style?.certificate?.date}
                            dangerouslySetInnerHTML={{ __html: cert.date }}
                        />

                        {viewType === "list" ? (
                            <ul style={style?.certificate?.list}>
                                {cert.description?.map((point, i) => (
                                    <li
                                        key={point.id || i}
                                        data-id={point.id}
                                        contentEditable={editMode}
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleDescBlur(index, i, e)}
                                        style={style?.certificate?.listItem}
                                        dangerouslySetInnerHTML={{ __html: point.text }}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <div style={style?.certificate?.certWrapper}>
                                {cert.description?.map((point, i) => (
                                    <p
                                        key={point.id || i}
                                        data-id={point.id}
                                        contentEditable={editMode}
                                        suppressContentEditableWarning
                                        onBlur={(e) => handleDescBlur(index, i, e)}
                                        style={style?.certificate?.content}
                                        dangerouslySetInnerHTML={{ __html: point.text }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <InlineToolbar editMode={editMode} containerRef={certificateRef} sectionName="certifications" />
        </div>
    );
}
