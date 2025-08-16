import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Languages() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection, viewTypes } = useResume();
    const languagesRef = useRef();

    const handleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedLanguages = [...data.language];
        updatedLanguages[index] = { ...updatedLanguages[index], text: newValue };
        updateField("language", null, updatedLanguages);
    };

    const viewType = viewTypes?.language || "list";
    const isSelected = selectedSection === "language";
    return (
        <div
            className={`languages resumeSection ${isSelected ? "selected" : ""}`}
            style={{ ...style?.language?.box, position: "relative" }}
            onClick={() => setSelectedSection("language")}
            ref={languagesRef}
        >
            <h2 style={style?.language?.heading}>Languages</h2>

            {viewType === "list" ? (
                <ul style={style?.language?.wholeList}>
                    {data.language.map((lang, index) => (
                        <li
                            key={lang.id}
                            data-id={lang.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.language?.listItem}
                            dangerouslySetInnerHTML={{ __html: lang.text || "" }}
                        />
                    ))}
                </ul>
            ) : (
                <div className="individualLanguage" style={style?.language?.everyLanguageBox}>
                    {data.language.map((lang, index) => (
                        <span
                            key={lang.id}
                            data-id={lang.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.language?.eachLanguageBox}
                            dangerouslySetInnerHTML={{ __html: lang.text || "" }}
                        />
                    ))}
                </div>
            )}
            <InlineToolbar editMode={editMode} containerRef={languagesRef} sectionName="language" />
        </div>
    );
}
