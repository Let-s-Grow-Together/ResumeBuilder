import React, { useEffect, useRef } from "react";
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
import Interests from "./components/Interests";
import Coursework from "./components/CourseWork";
import designIcons from "./components/DesignComponent";
import "./ResumeRenderer.css";
import { useResume } from "../context/ResumeContext";
import templateStyles from "../data/templateStyle";
import createNewPageFromBaseFlex from "./createNewPageFromBaseFlex";
import ensurePageAndMoveSection from "./ensurePageAndMoveSection";
import tryMoveSectionBack from "./tryMoveSectionBack";

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
    Interests: Interests,
    Coursework: Coursework,
    certificates: Certificates,
    designIcons1: designIcons,
    designIcons2: designIcons,
    designIcons3: designIcons
};

export default function ResumeRenderer({ template, setTemplate }) {
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

    const areaKeys = Object.keys(layout)
        .filter((key) => key.startsWith("areas"))
        .sort();
    const areaRefs = useRef({});

    const addRef = (areaName, areaKey) => {
        const key = `${areaName}-${areaKey}`;
        if (!areaRefs.current[key]) {
            areaRefs.current[key] = React.createRef();
        }
        return areaRefs.current[key];
    };

    const renderSection = (sectionName, areaName) => {
        const SectionComponent = sectionComponents[sectionName];
        return SectionComponent ? (
            <SectionComponent areaName={areaName} sectionName={sectionName} />
        ) : null;
    };


    const measureHeights = () => {
        let newTemplate = { ...template };
        let anyOverflow = false;

        for (const areaKey of areaKeys) {
            const pageEl = document.querySelector(`.resume-view[data-area-key="${areaKey}"]`);
            if (!pageEl) continue;

            const pageHeight = pageEl.offsetHeight || 0;
            const paddingValue = parseFloat(padding) || 0;
            const availableHeight = pageHeight - 2 * paddingValue;

            const areas = layout[areaKey] || [];

            const fullWidthAreas = areas.filter(area => {
                if (area.paginate === false) return true;
                if (!area.width) return false;
                const w = ("" + area.width).trim();
                return w === "100%" || w === "100";
            });

            let fullWidthHeight = 0;
            for (const area of fullWidthAreas) {
                const ref = areaRefs.current[`${area.name}-${areaKey}`]?.current;
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const style = getComputedStyle(ref);
                    fullWidthHeight += rect.height + parseFloat(style.marginTop || 0) + parseFloat(style.marginBottom || 0);
                }
            }

            const columnAreas = areas.filter(a => !fullWidthAreas.includes(a));
            const filteredCols = Number(template.filteredColumn) || 1;
            const overflowingColumnNames = [];

            if (filteredCols > 1) {
                for (const col of columnAreas) {
                    const ref = areaRefs.current[`${col.name}-${areaKey}`]?.current;
                    let colHeight = 0;
                    if (ref) {
                        const rect = ref.getBoundingClientRect();
                        const style = getComputedStyle(ref);
                        colHeight = rect.height + parseFloat(style.marginTop || 0) + parseFloat(style.marginBottom || 0);
                    }
                    const totalHeight = fullWidthHeight + colHeight;

                    if (totalHeight > availableHeight+30) {
                        overflowingColumnNames.push(col.name);
                    }
                }
            } else {
                const single = columnAreas[0] ?? areas[0];
                if (single) {
                    const ref = areaRefs.current[`${single.name}-${areaKey}`]?.current;
                    let singleHeight = 0;
                    if (ref) {
                        const rect = ref.getBoundingClientRect();
                        const style = getComputedStyle(ref);
                        singleHeight = rect.height + parseFloat(style.marginTop || 0) + parseFloat(style.marginBottom || 0);
                    }
                    if (singleHeight > availableHeight) {
                        overflowingColumnNames.push(single.name);
                    }
                }
            }

            if (overflowingColumnNames.length > 0) {
                anyOverflow = true;

                if (areaKeys.length === 1) {
                    newTemplate = createNewPageFromBaseFlex(newTemplate);
                }

                for (const areaName of overflowingColumnNames) {
                    newTemplate = ensurePageAndMoveSection(newTemplate, areaName) || newTemplate;
                }
            }
        }

        if (anyOverflow) {
            setTemplate(newTemplate);
        }
        else {
            const backTemplate = tryMoveSectionBack(template, areaRefs, padding);
            if (backTemplate !== template) {
                setTemplate(backTemplate);
            }
        }
    };

    useEffect(() => {
        const t = setTimeout(() => {
            try {
                measureHeights();
            }
            catch (e) {
                console.error("measureHeights error:", e);
            }
        }, 100);
        return () => clearTimeout(t);
    }, [template, data]);

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
                        {areas.map((area) => {
                            const areaRef = addRef(area.name, areaKey);
                            return (
                                <div
                                    key={`${area.name}-${areaKey}`}
                                    ref={areaRef}
                                    className={`resumeSection area-${area.name}`}
                                    style={{
                                        flex: `0 0 ${area.width || "100%"}`,
                                        alignSelf: "flex-start",
                                        ...(area.style || {}),
                                    }}
                                >
                                    {area.sections.map((sectionName) => (
                                        <div
                                            key={`${sectionName}-${areaKey}`}
                                            className="resume-subsection"
                                            data-section={sectionName}
                                            data-area-key={areaKey}
                                        >
                                            {renderSection(sectionName, area.name)}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
}
