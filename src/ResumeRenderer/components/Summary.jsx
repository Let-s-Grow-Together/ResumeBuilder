import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Summary({areaName}) {
    const { data, style, updateField, editMode, viewTypes, setSelectedSection, selectedSection } = useResume();
    const summaryRef = useRef();
    const viewType = viewTypes?.summary || "block";

    const handleDescBlur = (index, e) => {
        const newText = e.target.innerHTML.trim();
        const updated = [...data.summary];
        updated[index] = { ...updated[index], text: newText };
        updateField("summary", null, updated);
    };
    const isSelected = selectedSection === "summary";
    const layoutHeading = style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.summary?.heading;
    return (
        <div
            className={`summary resumeSection ${editMode && isSelected ? "selected" : ""}`}
            ref={summaryRef}
            style={{ ...style?.summary?.box, position: "relative" }}
            onClick={() => setSelectedSection("summary")}
        >
            <h2 style={headingStyle}>
                {style?.summary?.about ? "ABOUT": "Summary"}
            </h2>

            {viewType === "list" ? (
                <ul style={style?.summary?.list}>
                    {data.summary.map((item, index) => (
                        <li
                            key={item.id || index}
                            data-id={item.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleDescBlur(index, e)}
                            style={style?.summary?.listItem}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    ))}
                </ul>
            ) : (
                <div style={style?.summary?.eachSummary}>
                    {data.summary.map((item, index) => (
                        <p
                            key={item.id || index}
                            data-id={item.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleDescBlur(index, e)}
                            style={style?.summary?.content}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    ))}
                </div>
            )}

            <InlineToolbar editMode={editMode} containerRef={summaryRef} sectionName="summary" />
        </div>
    );
}
