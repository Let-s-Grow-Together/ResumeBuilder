import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

function LayoutDefault({ data, style, editMode, handleTextBlur, BoxStyle, viewType }) {
    return viewType === "list" ? (
        <ul style={style?.interests?.wholeList}>
            {data.map((interest, index) => (
                <li
                    key={interest.id}
                    data-id={interest.id}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleTextBlur(index, e)}
                    style={style?.interests?.listItem}
                    dangerouslySetInnerHTML={{ __html: interest.text }}
                />
            ))}
        </ul>
    ) : (
        <div className="individualInterest" style={style?.interests?.everyInterestBox}>
            {data.map((interest, index) => (
                <span
                    key={interest.id}
                    data-id={interest.id}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleTextBlur(index, e)}
                    style={BoxStyle}
                    dangerouslySetInnerHTML={{ __html: interest.text }}
                />
            ))}
        </div>
    );
}

function LayoutIcons({ data, style, editMode, handleTextBlur }) {
    return (
        <div
            className="interestsIcons"
            style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
                ...style?.interests?.iconsWrapper,
            }}
        >
            {data.map((interest, index) => (
                <div
                    key={interest.id}
                    data-id={interest.id}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleTextBlur(index, e)}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "14px",
                        ...style?.interests?.iconItem,
                    }}
                >
                    <span style={{ fontSize: "24px" }}>{interest.icon || "⭐"}</span>
                    <span dangerouslySetInnerHTML={{ __html: interest.text }} />
                </div>
            ))}
        </div>
    );
}

const layoutComponents = {
    layoutIcons: LayoutIcons,
};

export default function Interests({ areaName }) {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();

    const interestsRef = useRef();

    const interestsData = data?.interests || [];

    const viewType = viewTypes?.interests || "block";
    const layoutType = style?.interests?.layoutType;
    const LayoutComponent = layoutComponents[layoutType] || LayoutDefault;
    const isSelected = selectedSection === "interests";

    const handleTextBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedInterests = [...interestsData];
        updatedInterests[index] = { ...updatedInterests[index], text: newValue };
        updateField("interests", null, updatedInterests);
    };

    const layoutHeading =
        style?.layoutStyles && areaName && style.layoutStyles[areaName]?.heading;
    const headingStyle = layoutHeading ?? style?.interests?.heading;

    const layoutBoxStyle =
        style?.layoutStyles && areaName && style.layoutStyles[areaName]?.eachInterestBox;
    const BoxStyle = layoutBoxStyle ?? style?.interests?.eachInterestBox;

    return (
        <div
            className={`interests resumeSection ${editMode && isSelected ? "selected" : ""}`}
            style={{ ...style?.interests?.box, position: "relative" }}
            onClick={() => setSelectedSection("interests")}
            ref={interestsRef}
        >
            <h2 style={headingStyle}>Interests</h2>

            <LayoutComponent
                data={interestsData} 
                style={style}
                editMode={editMode}
                viewType={viewType}
                handleTextBlur={handleTextBlur}
                BoxStyle={BoxStyle}
            />

            <InlineToolbar editMode={editMode} containerRef={interestsRef} sectionName="interests" />
        </div>
    );
}
