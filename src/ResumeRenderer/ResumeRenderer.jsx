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

    const { grid, fontFamily, fontSize, colorScheme, borderTop, padding } = template.layout;

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
        .join(" ");

    return (
        <div
            className={`resume-view ${editMode && selectedSection ? "editing" : ""}`}
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
                borderTop: borderTop,
                gridTemplateAreas,
                padding,
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
}
/* 
import { useEffect, useRef, useState } from "react";
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
    const containerRef = useRef(null);
    const [pages, setPages] = useState([]);

    const { grid, fontFamily, fontSize, colorScheme, borderTop, padding } = template.layout;
    const templateId = String(template.id);
    const templateStyle = templateStyles[templateId] || {};
    const cssVariables = templateStyle.vars || {};

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".resumeSection")) {
                setSelectedSection(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const pageHeight = containerRef.current.offsetHeight; // height of one page container
        const threshold = pageHeight - 40; // padding buffer

        const sections = Array.from(containerRef.current.querySelectorAll(".resumeSection"));
        const paginated = [];
        let currentPage = [];
        let usedHeight = 0;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const height = rect.height;

            // If splittable
            if (section.dataset.split === "true") {
                const children = Array.from(section.children);
                let childGroup = document.createElement("div");
                childGroup.className = "resumeSection splittable";

                children.forEach((child) => {
                    const childHeight = child.getBoundingClientRect().height;
                    if (usedHeight + childHeight > threshold) {
                        // finish current page
                        paginated.push(currentPage);
                        currentPage = [];
                        usedHeight = 0;
                    }
                    currentPage.push({ node: child.cloneNode(true), area: section.dataset.area });
                    usedHeight += childHeight;
                });
            } else {
                if (usedHeight + height > threshold) {
                    paginated.push(currentPage);
                    currentPage = [];
                    usedHeight = 0;
                }
                currentPage.push({ node: section.cloneNode(true), area: section.dataset.area });
                usedHeight += height;
            }
        });

        if (currentPage.length) paginated.push(currentPage);

        setPages(paginated);
    }, [data, template, customLayoutAreas]);

    return (
        <div className="resume-doc" style={{ fontFamily, fontSize, background: colorScheme.background, color: colorScheme.text }}>
            
            <div ref={containerRef} className="hidden-measure" style={{ position: "absolute", visibility: "hidden", pointerEvents: "none" }}>
                {customLayoutAreas?.map((area) => (
                    <div key={area.name} className="resumeSection" data-area={area.name} data-split={area.split ? "true" : "false"}>
                        {area.sections.map((sectionName) => {
                            const SectionComponent = sectionComponents[sectionName];
                            return SectionComponent ? <SectionComponent key={sectionName} areaName={area.name} /> : null;
                        })}
                    </div>
                ))}
            </div>

            {pages.map((page, i) => (
                <div key={i} className="resume-page" style={{ padding }}>
                    {page.map((item, j) => (
                        <div key={j} className="resumeSection" style={{ gridArea: item.area }} dangerouslySetInnerHTML={{ __html: item.node.outerHTML }} />
                    ))}
                </div>
            ))}
        </div>
    );
}

*/