import { useEffect } from "react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Avatar from "./components/Avatar";
import Strengths from "./components/Strength";
import Achievements from "./components/Achivements";
import Language from "./components/Language";
import Awards from "./components/Awards";
import Organizations from "./components/Organizations";
import Certificates from "./components/Certificates";
import designIcons from "./components/DesignComponent";
import "./ResumeRenderer.css";
import { useResume } from "../context/ResumeContext";
import templateStyles from "../data/templateStyle";

const sectionComponents = {
    personalInfo: PersonalInfo,
    education: Education,
    workExperience: WorkExperience,
    skills: Skills,
    projects: Projects,
    contact: Contact,
    summary: Summary,
    strengths: Strengths,
    achievements: Achievements,
    organizations: Organizations,
    avatar: Avatar,
    language: Language,
    awards: Awards,
    certificates: Certificates,
    designIcons1: designIcons,
    designIcons2: designIcons,
    designIcons3: designIcons
};

export default function ResumeRenderer({ template }) {
    const { data, style, editMode, selectedSection, setSelectedSection, customLayoutAreas } = useResume();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".resumeSection")) {
                setSelectedSection(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    /* const { grid, fontFamily, fontSize, colorScheme, borderTop, padding } = template.layout;

    const templateId = String(template.id);
    const templateStyle = templateStyles[templateId] || {};
    const cssVariables = templateStyle.vars || {};

    const renderSection = (sectionName, areaName) => {
        const SectionComponent = sectionComponents[sectionName];
        return SectionComponent
            ? <SectionComponent
                key={sectionName}
                areaName={areaName}
            />
            : null;
    };

    const numRows = grid.templateRows.split(" ").length;
    const numCols = grid.templateColumns.split(" ").length;

    const gridMatrix = Array.from({ length: numRows }, () =>
        Array(numCols).fill(".")
    );

    const areasToRender = (customLayoutAreas || grid.areas).filter(
        (area) =>
            Array.isArray(area.sections) &&
            area.sections.length > 0 &&
            area.name !== "unused"
    );

    areasToRender.forEach((area) => {
        for (let row = area.rowStart - 1; row < area.rowEnd - 1; row++) {
            for (let col = area.colStart - 1; col < area.colEnd - 1; col++) {
                if (gridMatrix[row] && gridMatrix[row][col] !== undefined) {
                    gridMatrix[row][col] = area.name;
                } else {
                    console.warn(
                        `Invalid grid position: row ${row}, col ${col} for area "${area.name}"`
                    );
                }
            }
        }
    });

    const gridTemplateAreas = gridMatrix
        .map((row) => `"${row.join(" ")}"`)
        .join(" "); */


    const { layout } = template;
    const {
        direction = "column",
        fontFamily,
        fontSize,
        colorScheme,
        padding,
        rowGap = "0rem",
        columnGap = "1rem"
    } = layout;

    const templateId = String(template.id);
    const templateStyle = templateStyles[templateId] || {};
    const cssVariables = templateStyle.vars || {};

    const renderSection = (sectionName, areaName) => {
        const SectionComponent = sectionComponents[sectionName];
        return SectionComponent ? (
            <SectionComponent key={sectionName} areaName={areaName} />
        ) : null;
    };

    const areaKeys = Object.keys(layout)
        .filter((key) => key.startsWith("areas"))
        .sort();

    return (
        <>
            {areaKeys.map((areaKey) => {
                const areas = layout[areaKey];

                return (
                    <div
                        className={`resume-view ${editMode && selectedSection ? "editing" : ""}`}
                        key={areaKey}
                        data-area-key={areaKey}
                        style={{
                            display: "flex",
                            flexDirection: direction.includes("column") ? "column" : "row",
                            flexWrap: direction.includes("wrap") ? "wrap" : "nowrap",
                            fontFamily,
                            fontSize,
                            background: colorScheme?.background,
                            color: colorScheme?.text,
                            padding,
                            rowGap,
                            columnGap,
                            ...cssVariables
                        }}
                    >
                        {areas.map((area) => (
                            <div
                                key={`${area.name}-${areaKey}`}
                                className={`resumeSection area-${area.name}`}
                                style={{
                                    flex: `0 0 ${area.width || "100%"}`,
                                    alignSelf: "flex-start",
                                    ...(area.style || {})
                                }}
                            >
                                {area.sections.map((sectionName) =>
                                    renderSection(
                                        sectionName,
                                        area.name
                                    )
                                )}
                            </div>
                        ))}
                    </div>

                );
            })}
        </>
    );
}
