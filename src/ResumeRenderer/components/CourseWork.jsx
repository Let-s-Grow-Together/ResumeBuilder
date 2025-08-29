import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

function LayoutDefault({ data, style, editMode, handleTextBlur, BoxStyle, viewType }) {
    return viewType === "list" ? (
        <ul style={style?.coursework?.wholeList}>
            {data.map((course, index) => (
                <li
                    key={course.id}
                    data-id={course.id}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleTextBlur(index, e)}
                    style={style?.coursework?.listItem}
                    dangerouslySetInnerHTML={{ __html: course.text }}
                />
            ))}
        </ul>
    ) : (
        <div className="individualCourse" style={style?.coursework?.everyCourseBox}>
            {data.map((course, index) => (
                <span
                    key={course.id}
                    data-id={course.id}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleTextBlur(index, e)}
                    style={BoxStyle}
                    dangerouslySetInnerHTML={{ __html: course.text }}
                />
            ))}
        </div>
    );
}

const layoutComponents = {
};

export default function Coursework({ areaName }) {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();

    const courseworkRef = useRef();

    const courseworkData = data?.coursework || [];

    const viewType = viewTypes?.coursework || "block";
    const layoutType = style?.coursework?.layoutType;
    const LayoutComponent = layoutComponents[layoutType] || LayoutDefault;
    const isSelected = selectedSection === "coursework";

    const handleTextBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedCourses = [...courseworkData];
        updatedCourses[index] = { ...updatedCourses[index], text: newValue };
        updateField("coursework", null, updatedCourses);
    };

    const layoutHeading =
        style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.coursework?.heading;

    const layoutBoxStyle =
        style?.layoutStyles && areaName && style.layoutStyles[areaName]?.eachCourseBox;
    const BoxStyle = layoutBoxStyle ?? style?.coursework?.eachCourseBox;

    return (
        <div
            className={`coursework resumeSection ${editMode && isSelected ? "selected" : ""}`}
            style={{ ...style?.coursework?.box, position: "relative" }}
            onClick={() => setSelectedSection("coursework")}
            ref={courseworkRef}
        >
            <h2 style={headingStyle}>Coursework</h2>

            <LayoutComponent
                data={courseworkData}
                style={style}
                editMode={editMode}
                viewType={viewType}
                handleTextBlur={handleTextBlur}
                BoxStyle={BoxStyle}
            />

            <InlineToolbar editMode={editMode} containerRef={courseworkRef} sectionName="coursework" />
        </div>
    );
}
