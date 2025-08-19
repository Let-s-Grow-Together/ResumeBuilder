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
import "./ResumeRenderer.css";
import { useResume } from "../context/ResumeContext";
import templateStyles from "../data/templateStyle";
import themes from "../data/theme";
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
    certificates: Certificates
};

export default function ResumeRenderer({ template }) {
    const { data, style, editMode, selectedSection, setSelectedSection, customLayoutAreas, theme } = useResume();

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

    const { grid, fontFamily, fontSize, colorScheme } = template.layout;

    const templateId = String(template.id);
    const templateStyle = templateStyles[templateId] || {};
    const cssVariablesBase = templateStyle.vars || {};

    const renderSection = (sectionName) => {
        const SectionComponent = sectionComponents[sectionName];
        return SectionComponent ? <SectionComponent key={sectionName} /> : null;
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
   
    const cssVariables = {
  ...cssVariablesBase,
  ...(themes[theme] || {}),
  ...(templateStyles[template.id]?.vars || {})
};
useEffect(() => {
  const themeVars = themes[theme] || {};
  const templateVars = templateStyles[template.id]?.vars || {};
  const combinedVars = { ...themeVars, ...templateVars };

  Object.entries(combinedVars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}, [theme, template.id]);



    const gridTemplateAreas = gridMatrix
        .map((row) => `"${row.join(" ")}"`)
        .join(" ");

    return (
        <div
            id="resume-view"
            className={editMode && selectedSection ? "editing" : ""}
            style={{
                fontFamily,
                fontSize,
                background: colorScheme.background,
                color: colorScheme.text,
                gridTemplateColumns: grid.templateColumns,
                gridTemplateRows: grid.templateRows,
                rowGap: grid.rowGap,
                columnGap: grid.columnGap,
                display: "grid",
                gridTemplateAreas,
                ...cssVariables
            }}
        >
            {areasToRender.map((area) => (
                <div
                    key={area.name}
                    className={`resumeSection area-${area.name}`}
                    style={{
                        gridArea: area.name,
                        ...(area.style || {})
                    }}
                >
                    {area.sections.map((sectionName) => renderSection(sectionName))}
                </div>
            ))}
        </div>
    );
}


