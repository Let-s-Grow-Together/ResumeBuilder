// import { useEffect } from "react";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Education from "./components/Education";
// import PersonalInfo from "./components/PersonalInfo";
// import Contact from "./components/Contact";
// import Summary from "./components/Summary";
// import Avatar from "./components/Avatar";
// import Strengths from "./components/Strength";
// import Achievements from "./components/Achivements";
// import Language from "./components/Language";
// import Awards from "./components/Awards";
// import Organizations from "./components/Organizations";
// import Certificates from "./components/Certificates";
// import designIcons from "./components/DesignComponent";
// import "./ResumeRenderer.css";
// import { useResume } from "../context/ResumeContext";
// import templateStyles from "../data/templateStyle";

// const sectionComponents = {
//     personalInfo: PersonalInfo,
//     education: Education,
//     workExperience: WorkExperience,
//     skills: Skills,
//     projects: Projects,
//     contact: Contact,
//     summary: Summary,
//     strengths: Strengths,
//     achievements: Achievements,
//     organizations: Organizations,
//     avatar: Avatar,
//     language: Language,
//     awards: Awards,
//     certificates: Certificates,
//     designIcons1: designIcons,
//     designIcons2: designIcons,
//     designIcons3: designIcons
// };

// export default function ResumeRenderer({ template }) {
//     const { data, style, editMode, selectedSection, setSelectedSection, customLayoutAreas } = useResume();

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (!e.target.closest(".resumeSection")) {
//                 setSelectedSection(null);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     const { grid, fontFamily, fontSize, colorScheme, borderTop, padding } = template.layout;

//     const templateId = String(template.id);
//     const templateStyle = templateStyles[templateId] || {};
//     const cssVariables = templateStyle.vars || {};

//     const renderSection = (sectionName, areaName) => {
//         const SectionComponent = sectionComponents[sectionName];
//         return SectionComponent
//             ? <SectionComponent
//                 key={sectionName}
//                 areaName={areaName}
//             />
//             : null;
//     };

//     const numRows = grid.templateRows.split(" ").length;
//     const numCols = grid.templateColumns.split(" ").length;

//     const gridMatrix = Array.from({ length: numRows }, () =>
//         Array(numCols).fill(".")
//     );

//     const areasToRender = (customLayoutAreas || grid.areas).filter(
//         (area) =>
//             Array.isArray(area.sections) &&
//             area.sections.length > 0 &&
//             area.name !== "unused"
//     );

//     areasToRender.forEach((area) => {
//         for (let row = area.rowStart - 1; row < area.rowEnd - 1; row++) {
//             for (let col = area.colStart - 1; col < area.colEnd - 1; col++) {
//                 if (gridMatrix[row] && gridMatrix[row][col] !== undefined) {
//                     gridMatrix[row][col] = area.name;
//                 } else {
//                     console.warn(
//                         `Invalid grid position: row ${row}, col ${col} for area "${area.name}"`
//                     );
//                 }
//             }
//         }
//     });

//     const gridTemplateAreas = gridMatrix
//         .map((row) => `"${row.join(" ")}"`)
//         .join(" ");

//     return (
//         <div
//             id="resume-view"
//             className={editMode && selectedSection ? "editing" : ""}
//             style={{
//                 fontFamily,
//                 fontSize,
//                 background: colorScheme.background,
//                 color: colorScheme.text,
//                 gridTemplateColumns: grid.templateColumns,
//                 gridTemplateRows: grid.templateRows,
//                 rowGap: grid.rowGap,
//                 columnGap: grid.columnGap,
//                 display: "grid",
//                 borderTop: borderTop,
//                 gridTemplateAreas,
//                 padding,
//                 ...cssVariables
//             }}
//         >
//             {areasToRender.map((area) => (
//                 <div
//                     key={area.name}
//                     className={`resumeSection area-${area.name}`}
//                     style={{
//                         gridArea: area.name,
//                         ...(area.style || {})
//                     }}
//                 >
//                     {area.sections.map((sectionName) =>
//                         renderSection(
//                             sectionName,
//                             area.name
//                         )
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }


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
import Achievements from "./components/Achievements";
import Language from "./components/Language";
import Awards from "./components/Awards";
import Organizations from "./components/Organizations";
import Certificates from "./components/Certificates";
import "./ResumeRenderer.css";
import { useResume } from "../context/ResumeContext";
import templateStyles from "../data/templateStyle";
// import themes from "../data/theme";

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
};

export default function ResumeRenderer({ template }) {
  const {
    data,
    style,
    editMode,
    selectedSection,
    setSelectedSection,
    customLayoutAreas,
    theme,
  } = useResume();

  // ---------- Click outside handler ----------
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
            ` Invalid grid position: row ${row}, col ${col} for area "${area.name}"`
          );
        }
      }
    }
  });

//   const cssVariables = {
//     ...cssVariablesBase,
//     ...(themes[theme] || {}),
//     ...(templateStyles[template.id]?.vars || {}),
//   };

//   useEffect(() => {
//     if (theme === "default") {
//       Object.keys(themes.light).forEach((key) => {
//         document.documentElement.style.removeProperty(key);
//       });
//     } else {
//       const themeVars = themes[theme];
//       if (themeVars) {
//         Object.entries(themeVars).forEach(([key, value]) => {
//           document.documentElement.style.setProperty(key, value);
//         });
//       }
//     }
//     localStorage.setItem("resume-theme", theme);
//   }, [theme]);

  // ---------- Pagination Logic ----------
  const sectionRefs = useRef({});
  const [pages, setPages] = useState([]);
  const PAGE_HEIGHT = 1123;
  const HEADER_HEIGHT = 60;
  const AVAILABLE_HEIGHT = PAGE_HEIGHT - HEADER_HEIGHT;

  useEffect(() => {
    if (Object.keys(sectionRefs.current).length === 0) return;

    const leftAreas = areasToRender.filter(
      (area) => area.colStart === 1 && area.colEnd - area.colStart < numCols
    );
    const rightAreas = areasToRender.filter((area) => area.colStart > 1);
    const fullWidthAreas = areasToRender.filter(
      (area) => area.colEnd - area.colStart === numCols
    );

    const leftColumnPages = processColumnSections(leftAreas);
    const rightColumnPages = processColumnSections(rightAreas);
    const fullWidthPages = processColumnSections(fullWidthAreas);

    const maxPages = Math.max(
      leftColumnPages.length,
      rightColumnPages.length,
      fullWidthPages.length,
      1
    );

    const combinedPages = [];
    for (let i = 0; i < maxPages; i++) {
      combinedPages.push({
        left: leftColumnPages[i] || [],
        right: rightColumnPages[i] || [],
        full: fullWidthPages[i] || [],
      });
    }

    setPages(combinedPages);
  }, [areasToRender, data, theme, style]);

  const processColumnSections = (areas) => {
    const pages = [];
    let currentPage = [];
    let currentHeight = 0;

    areas.forEach((area) => {
      area.sections.forEach((sectionName) => {
        const sectionEl = sectionRefs.current[sectionName];
        if (!sectionEl) return;

        const sectionParts = getSectionParts(sectionEl, sectionName);

        sectionParts.forEach((part) => {
          const maxHeight =
            pages.length === 0 ? AVAILABLE_HEIGHT : PAGE_HEIGHT;

          if (currentHeight + part.height <= maxHeight) {
            currentPage.push({
              areaName: area.name,
              sectionName,
              partType: part.type,
              partIndex: part.index,
              isHeader: part.isHeader,
            });
            currentHeight += part.height;
          } else {
            if (currentPage.length > 0) {
              pages.push(currentPage);
            }
            currentPage = [
              {
                areaName: area.name,
                sectionName,
                partType: part.type,
                partIndex: part.index,
                isHeader: part.isHeader,
              },
            ];
            currentHeight = part.height;
          }
        });
      });
    });

    if (currentPage.length > 0) {
      pages.push(currentPage);
    }

    return pages.length > 0 ? pages : [[]];
  };

  const getSectionParts = (sectionEl, sectionName) => {
    const children = Array.from(sectionEl.children);
    const parts = [];

    children.forEach((child, index) => {
      if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(child.tagName)) {
        parts.push({
          type: "header",
          height: child.offsetHeight,
          index,
          isHeader: true,
        });
      } else if (
        child.classList.contains("eachProject") ||
        child.classList.contains("eachExperience") ||
        child.classList.contains("eachEducation") ||
        child.classList.contains("eachAchievement")
      ) {
        parts.push({
          type: "item",
          height: child.offsetHeight,
          index,
          isHeader: false,
        });
      } else {
        parts.push({
          type: "content",
          height: child.offsetHeight,
          index,
          isHeader: false,
        });
      }
    });

    return parts;
  };

  // Hidden measurement container
  const hiddenSections = (
    <div
      style={{
        position: "absolute",
        left: "-9999px",
        top: 0,
        visibility: "hidden",
        width: "794px",
      }}
    >
      {areasToRender.map((area) =>
        area.sections.map((sectionName) => {
          const SectionComponent = sectionComponents[sectionName];
          return (
            <div
              key={sectionName}
              ref={(el) => (sectionRefs.current[sectionName] = el)}
              style={{ gridArea: area.name }}
            >
              {SectionComponent ? <SectionComponent /> : null}
            </div>
          );
        })
      )}
    </div>
  );

  const gridTemplateAreas = gridMatrix
    .map((row) => `"${row.join(" ")}"`)
    .join(" ");

  // 🔑 Renderer for partial sections
  const renderPartialSection = (sectionName, parts) => {
    const SectionComponent = sectionComponents[sectionName];
    if (!SectionComponent) return null;
    return (
      <SectionComponent
        key={sectionName}
        renderMode="partial"
        allowedParts={parts}
      />
    );
  };

  // ---------- Render paginated pages ----------
  return (
    <>
      {hiddenSections}

      {pages.map((page, pageIndex) => (
        <div
          key={pageIndex}
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
            // ...cssVariables,
            width: "794px",
            height: "1123px",
            padding: "20px",
            marginBottom: "20px",
            overflow: "hidden",
            boxSizing: "border-box",
            pageBreakAfter: "always",
          }}
        >
          {/* Page number */}
          <div
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              fontSize: "12px",
              color: "#666",
              marginBottom: "10px",
              height: "20px",
            }}
          >
            Page {pageIndex + 1}
          </div>

          {areasToRender.map((area) => {
            let columnType = "full";
            if (
              area.colStart === 1 &&
              area.colEnd - area.colStart < numCols
            ) {
              columnType = "left";
            } else if (area.colStart > 1) {
              columnType = "right";
            }

            const areaContent = page[columnType].filter(
              (item) => item.areaName === area.name
            );

            const sectionGroups = {};
            areaContent.forEach((item) => {
              if (!sectionGroups[item.sectionName]) {
                sectionGroups[item.sectionName] = [];
              }
              sectionGroups[item.sectionName].push(item);
            });

            return (
              <div
                key={`${area.name}-${pageIndex}`}
                style={{
                  gridArea: area.name,
                  display: "flex",
                  flexDirection: "column",
                }}
                className="resumeSection"
                onClick={() => editMode && setSelectedSection(area.name)}
              >
                {Object.keys(sectionGroups).map((sectionName) =>
                  renderPartialSection(sectionName, sectionGroups[sectionName])
                )}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
