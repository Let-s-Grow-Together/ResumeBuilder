
import { useRef, useLayoutEffect, useEffect, useState, cloneElement } from "react";

const DEFAULT_PAGE_HEIGHT = 1123; // A4 Height (px @ ~96dpi)
const DEFAULT_PAGE_WIDTH = 794;   // A4 Width

export default function AutoPaginator({
  children,
  pageHeight = DEFAULT_PAGE_HEIGHT,
  pageWidth = DEFAULT_PAGE_WIDTH,
  padding = 0,      // keep 0; your template handles spacing
  showShadow = true // optional visual
}) {
  const measureHostRef = useRef(null);
  const [pageCount, setPageCount] = useState(0);

  // Expect a single child (the full resume)
  const child = Array.isArray(children) ? children[0] : children;

  const measure = () => {
    if (!measureHostRef.current) return;
    // first child is your rendered resume (#resume-view)
    const target = measureHostRef.current.firstElementChild;
    if (!target) return;

    // Robust height (works for grids, images, fonts)
    const total = target.getBoundingClientRect().height || target.scrollHeight || 0;
    const count = Math.max(1, Math.ceil(total / pageHeight));
    setPageCount(count);
  };

  useLayoutEffect(() => {
    // initial measurement after layout
    const raf = requestAnimationFrame(measure);

    // Observe size changes (when user edits/sections expand)
    const ro = new ResizeObserver(measure);
    if (measureHostRef.current) ro.observe(measureHostRef.current);

    // Re-measure when images finish loading
    const imgs = measureHostRef.current?.getElementsByTagName("img") || [];
    const handlers = [];
    for (const img of imgs) {
      if (!img.complete) {
        const h = () => measure();
        img.addEventListener("load", h);
        img.addEventListener("error", h);
        handlers.push([img, h]);
      }
    }

    // window resize
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      handlers.forEach(([img, h]) => {
        img.removeEventListener("load", h);
        img.removeEventListener("error", h);
      });
    };
    // re-measure if the rendered child identity changes
  }, [child, pageHeight, pageWidth]);

  return (
    <>
      {/* Hidden measurement (off-screen). Width is fixed to A4 width */}
      <div
        ref={measureHostRef}
        style={{
          position: "absolute",
          left: -100000,
          top: 100,
          width: pageWidth,
          visibility: "hidden",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        {/* Important: wrap to ensure width clamp */}
        <div style={{ width: pageWidth, margin: 0 }}>{child}</div>
      </div>

      {/* Visible output */}
      {Array.from({ length: pageCount }).map((_, i) => (
        <div
          key={i}
          className="a4-page"
          style={{
            width: pageWidth,
            height: pageHeight,
            margin: "0 auto 16px",
            background: "#ffffff",
            boxShadow: showShadow ? "0 0 8px rgba(0,0,0,0.1)" : "none",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding,
            }}
          >
            {/* render same resume each page, shifted up by page height */}
            <div style={{ transform: `translateY(-${i * pageHeight}px)` }}>
              {cloneElement(child, { key: `page-${i}` })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}


// // import { useRef, useLayoutEffect, useState } from "react";

// // const DEFAULT_PAGE_HEIGHT = 1123; // A4 (px at 96dpi)
// // const DEFAULT_PAGE_WIDTH = 794;

// // export default function AutoPaginator({
// //   children,
// //   pageHeight = DEFAULT_PAGE_HEIGHT,
// //   pageWidth = DEFAULT_PAGE_WIDTH,
// // }) {
// //   const measureRef = useRef(null);
// //   const [pages, setPages] = useState([]);

// //   useLayoutEffect(() => {
// //     if (!measureRef.current) return;

// //     // selectors for atomic blocks
// //     const blockSelectors = [
// //       ".resumeSection",      // full sections (Education, Skills, Experience etc.)
// //       ".educationItem",      // each education entry
// //       ".workPlace",          // each work experience
// //       ".eachProject",        // each project
// //       ".individualSkill span", // skill pills
// //       ".skills li",          // skill list items
// //       ".eachAward",          // each award (if you have)
// //       ".eachCertificate",    // each certificate (if you have)
// //     ];

// //     const blocks = measureRef.current.querySelectorAll(blockSelectors.join(","));
// //     let newPages = [];
// //     let currentPage = [];
// //     let currentHeight = 0;

// //     blocks.forEach((block) => {
// //       const rect = block.getBoundingClientRect();
// //       const blockHeight = rect.height;

// //       if (currentHeight + blockHeight > pageHeight - 40) {
// //         // start new page
// //         newPages.push(currentPage);
// //         currentPage = [];
// //         currentHeight = 0;
// //       }

// //       currentPage.push(block.outerHTML);
// //       currentHeight += blockHeight;
// //     });

// //     if (currentPage.length > 0) {
// //       newPages.push(currentPage);
// //     }

// //     setPages(newPages);
// //   }, [children, pageHeight]);

// //   return (
// //     <div className="resumePages" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
// //       {/* Hidden measurement container */}
// //       <div
// //         ref={measureRef}
// //         style={{ visibility: "hidden", position: "absolute", top: 0, left: 0, width: pageWidth }}
// //       >
// //         {children}
// //       </div>

// //       {/* Render paginated output */}
// //       {pages.map((blocks, i) => (
// //         <div
// //           key={i}
// //           className="resumePage"
// //           style={{
// //             width: pageWidth,
// //             height: pageHeight,
// //             boxShadow: "0 0 5px rgba(0,0,0,0.2)",
// //             background: "white",
// //             padding: "40px",
// //             boxSizing: "border-box",
// //             overflow: "hidden",
// //           }}
// //           dangerouslySetInnerHTML={{ __html: blocks.join("") }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // import { useRef, useLayoutEffect, useState } from "react";
// // import React from "react";
// // export default function AutoPaginator({ children, pageHeight = 1123, pageWidth = 794 }) {
// //   const measureRef = useRef(null);
// //   const [pages, setPages] = useState([]);

// //   useLayoutEffect(() => {
// //     if (!measureRef.current) return;

// //     // get all sections
// //     const blocks = Array.from(measureRef.current.children);

// //     let newPages = [];
// //     let currentPage = [];
// //     let currentHeight = 0;

// //     blocks.forEach((block) => {
// //       const h = block.getBoundingClientRect().height;

// //       if (currentHeight + h > pageHeight - 40) {
// //         newPages.push(currentPage);
// //         currentPage = [];
// //         currentHeight = 0;
// //       }

// //       currentPage.push(block.dataset.reactid); // <-- track react keys/ids
// //       currentHeight += h;
// //     });

// //     if (currentPage.length) newPages.push(currentPage);

// //     setPages(newPages);
// //   }, [children, pageHeight]);

// //   return (
// //     <div>
// //       {/* invisible measurement */}
// //       <div ref={measureRef} style={{ visibility: "hidden", position: "absolute" }}>
// //         {children}
// //       </div>

// //       {/* visible pages */}
// //       {pages.map((pageBlocks, i) => (
// //         <div key={i} className="resumePage" style={{ width: pageWidth, height: pageHeight }}>
// //           {React.Children.toArray(children).filter(
// //             (child, idx) => pageBlocks.includes(idx.toString())
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


// import { useRef, useLayoutEffect, useState } from "react";
// import React from "react";

// export default function AutoPaginator({
//   children,
//   pageHeight = 1123,
//   pageWidth = 794,
//   margin = 40,
//   editMode = false, // 👈 tum ResumePage se pass kar sakti ho
// }) {
//   const measureRef = useRef(null);
//   const [pages, setPages] = useState([]);

//   const recalcPages = () => {
//     if (!measureRef.current) return;

//     const sections = Array.from(
//       measureRef.current.querySelectorAll(".resumeSection")
//     );

//     let newPages = [];
//     let currentPage = [];
//     let currentHeight = 0;

//     sections.forEach((section, sectionIdx) => {
//       const heading = section.querySelector("h2");
//       const headingHeight = heading
//         ? heading.getBoundingClientRect().height
//         : 0;

//       const subsections = Array.from(
//         section.querySelectorAll(".eachProject, .eachEducation, .eachSkill")
//       );

//       // agar koi subsection hi nahi hai to pura section ek block maan lo
//       if (subsections.length === 0) {
//         const secHeight = section.getBoundingClientRect().height;
//         if (currentHeight + secHeight > pageHeight - margin) {
//           newPages.push(currentPage);
//           currentPage = [];
//           currentHeight = 0;
//         }
//         currentPage.push({ sectionIdx, all: true });
//         currentHeight += secHeight;
//         return;
//       }

//       subsections.forEach((sub, subIdx) => {
//         const h = sub.getBoundingClientRect().height;

//         // ✅ first subsection → heading chipkao
//         if (subIdx === 0) {
//           if (currentHeight + headingHeight + h > pageHeight - margin) {
//             newPages.push(currentPage);
//             currentPage = [];
//             currentHeight = 0;
//           }
//           currentPage.push({
//             sectionIdx,
//             subsections: [subIdx],
//             includeHeading: true,
//           });
//           currentHeight += headingHeight + h;
//         } else {
//           if (currentHeight + h > pageHeight - margin) {
//             newPages.push(currentPage);
//             currentPage = [];
//             currentHeight = 0;
//           }
//           currentPage.push({ sectionIdx, subsections: [subIdx] });
//           currentHeight += h;
//         }
//       });
//     });

//     if (currentPage.length) newPages.push(currentPage);

//     setPages(newPages);
//   };

//   useLayoutEffect(() => {
//     if (!measureRef.current) return;

//     recalcPages(); // initial calc

//     if (editMode) {
//       // ✅ observe changes while editing
//       const resizeObserver = new ResizeObserver(recalcPages);
//       resizeObserver.observe(measureRef.current);

//       const mutationObserver = new MutationObserver(recalcPages);
//       mutationObserver.observe(measureRef.current, {
//         childList: true,
//         characterData: true,
//         subtree: true,
//       });

//       return () => {
//         resizeObserver.disconnect();
//         mutationObserver.disconnect();
//       };
//     }
//   }, [children, pageHeight, editMode]);

//   return (
//     <div>
//       {/* invisible measurement */}
//       <div
//         ref={measureRef}
//         style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}
//       >
//         {children}
//       </div>

//       {/* visible pages */}
//       {pages.map((pageBlocks, pageIdx) => (
//         <div
//           key={pageIdx}
//           className="resumePage"
//           style={{
//             width: pageWidth,
//             height: pageHeight,
//             overflow: "hidden",
//             pageBreakAfter: "always",
//           }}
//         >
//           {pageBlocks.map((block, i) => {
//             const section = React.Children.toArray(children)[block.sectionIdx];
//             if (!section) return null;

//             // agar pura section ek saath lena hai
//             if (block.all) return React.cloneElement(section, { key: i });

//             // agar subsection wise split karna hai
//             const subsections = React.Children.toArray(
//               section.props.children
//             ).filter(
//               (ch) =>
//                 ch.props?.className?.includes("eachProject") ||
//                 ch.props?.className?.includes("eachEducation") ||
//                 ch.props?.className?.includes("eachSkill")
//             );

//             const heading = React.Children.toArray(section.props.children).find(
//               (ch) => ch.type === "h2"
//             );

//             const selectedSubs = block.subsections.map(
//               (si) => subsections[si]
//             );

//             return React.cloneElement(
//               section,
//               { key: i },
//               <>
//                 {block.includeHeading && heading}
//                 {selectedSubs}
//               </>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// }


// src/ResumeRenderer/components/AutoPaginator.jsx
// import { useRef, useLayoutEffect, useState } from "react";

// const PAGE_HEIGHT = 1123; // px = A4 page

// export default function AutoPaginator({ children }) {
//   const containerRef = useRef(null);
//   const [pages, setPages] = useState([]);

//   useLayoutEffect(() => {
//   if (!containerRef.current) return;

//   // Pick both sections and subsections
//   const sections = Array.from(
//     containerRef.current.querySelectorAll(".resumeSection, .educationItem, .projectItem, .workItem")
//   );

//   const newPages = [];
//   let currentPage = [];
//   let currentHeight = 0;

//   sections.forEach((section) => {
//     const sectionHeight = section.offsetHeight;

//     if (currentHeight + sectionHeight > PAGE_HEIGHT && currentPage.length > 0) {
//       newPages.push(currentPage);
//       currentPage = [section.outerHTML];
//       currentHeight = sectionHeight;
//     } else {
//       currentPage.push(section.outerHTML);
//       currentHeight += sectionHeight;
//     }
//   });

//   if (currentPage.length > 0) {
//     newPages.push(currentPage);
//   }

//   setPages(newPages);
// }, [children]);

//   return (
//     <div className="auto-paginator">
//       {/* hidden container to measure original children */}
//       <div ref={containerRef} style={{ visibility: "hidden", position: "absolute", top: 0, left: 0, zIndex: -999 }}>
//         {children}
//       </div>

//       {/* Render pages */}
//       {pages.map((page, i) => (
//         <div
//           key={i}
//           className="a4-page"
//           style={{
//             height: `${PAGE_HEIGHT}px`,
//             width: "794px", // A4 width in px at 96dpi
//             margin: "0 auto",
//             boxSizing: "border-box",
//             background: "white",
//             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//             overflow: "hidden",
//             display: "flex",
//             flexDirection: "column",
//           }}
//           dangerouslySetInnerHTML={{ __html: page.join("") }}
//         />
//       ))}
//     </div>
//   );
// }

// import { useRef, useLayoutEffect, useState } from "react";

// const PAGE_HEIGHT = 1123; // A4 height in px

// export default function AutoPaginator({ children }) {
//   const containerRef = useRef(null);
//   const [pages, setPages] = useState([]);

//   useLayoutEffect(() => {
//     if (!containerRef.current) return;

//     // ✅ Sab sections pick karo
//     const sections = Array.from(
//       containerRef.current.querySelectorAll(".resumeSection")
//     );

//     const newPages = [];
//     let currentPage = [];
//     let currentHeight = 0;

//     sections.forEach((section) => {
//       const sectionHeight = section.offsetHeight;

//       // Agar section overflow kare
//       if (currentHeight + sectionHeight > PAGE_HEIGHT && currentPage.length > 0) {
//         // ✅ Subsections pick karo (har component ke liye apne-apne className)
//         const subsections = Array.from(
//           section.querySelectorAll(
//             ".educationItem, .eachProject, .workPlace, .eachAward, .everySkillBox, .eachStrength, .everyLanguageBox, .eachCertificate,eachOrganization"
//           )
//         );

//         if (subsections.length > 0) {
//           // Agar subsections mile toh unko alag alag fit karo
//           subsections.forEach((sub) => {
//             const subHeight = sub.offsetHeight;
//             if (currentHeight + subHeight > PAGE_HEIGHT) {
//               newPages.push(currentPage);
//               currentPage = [sub.outerHTML];
//               currentHeight = subHeight;
//             } else {
//               currentPage.push(sub.outerHTML);
//               currentHeight += subHeight;
//             }
//           });
//         } else {
//           // Agar subsections nahi hai toh poora section next page pe bhejo
//           newPages.push(currentPage);
//           currentPage = [section.outerHTML];
//           currentHeight = sectionHeight;
//         }
//       } else {
//         currentPage.push(section.outerHTML);
//         currentHeight += sectionHeight;
//       }
//     });

//     if (currentPage.length > 0) {
//       newPages.push(currentPage);
//     }

//     setPages(newPages);
//   }, [children]);

//   return (
//     <div className="auto-paginator">
//       {/* hidden container to measure original children */}
//       <div
//         ref={containerRef}
//         style={{
//           visibility: "hidden",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           zIndex: -999,
//         }}
//       >
//         {children}
//       </div>

//       {/* Render pages */}
//       {pages.map((page, i) => (
//         <div
//           key={i}
//           className="a4-page"
//           style={{
//             height: `${PAGE_HEIGHT}px`,
//             width: "794px", // A4 width in px at 96dpi
//             margin: "0 auto 20px auto",
//             background: "white",
//             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//             overflow: "hidden",
//           }}
//           dangerouslySetInnerHTML={{ __html: page.join("") }}
//         />
//       ))}
//     </div>
//   );
// }

// import { useRef, useLayoutEffect, useState } from "react";
// import { useResume } from "../../context/ResumeContext";


// const PAGE_HEIGHT = 1123; // A4 height in px
// const PAGE_WIDTH = 794;   // A4 width in px

// export default function AutoPaginator({ children }) {
//       const { data, style, editMode, selectedSection, setSelectedSection, customLayoutAreas, theme } = useResume();
  
//   const hiddenRef = useRef(null);
//   const [pages, setPages] = useState([]);

//   useLayoutEffect(() => {
//     if (!hiddenRef.current) return;

//     const sections = Array.from(hiddenRef.current.querySelectorAll(".resumeSection"));
//     let currentPage = [];
//     let currentHeight = 0;
//     const newPages = [];

//     sections.forEach((section) => {
//       const subsections = section.querySelectorAll(
//         ".eachProject, .eachEducation, .workPlace, .eachAward, .everySkillBox, .eachStrength, .everyLanguageBox, .eachCertificate, .eachOrganization"
//       );

//       // Agar subsection mile toh unhi ke basis pe paginate karo
//       const blocks = subsections.length > 0 ? subsections : [section];

//       blocks.forEach((block) => {
//         const h = block.offsetHeight;

//         // Agar current page pe jagah nahi bachi toh naya page banao
//         if (currentHeight + h > PAGE_HEIGHT) {
//           if (currentPage.length > 0) {
//             newPages.push(currentPage);
//           }
//           currentPage = [block.outerHTML];
//           currentHeight = h;
//         } else {
//           currentPage.push(block.outerHTML);
//           currentHeight += h;
//         }
//       });
//     });

//     if (currentPage.length > 0) newPages.push(currentPage);
//     setPages(newPages);
//   }, [children]);

//   return (
//     <div
//     className={editMode && selectedSection ? "editing" : ""}
//     >

//       {pages.map((page, i) => (
//         <div
//           key={i}
//           className="a4-page"
//           style={{
//             height: PAGE_HEIGHT,
//             width: PAGE_WIDTH,
//             margin: "0 auto 20px auto",
//             background: "white",
//             boxShadow: "0 0 10px rgba(0,0,0,0.15)",
//             display: "grid", // 👈 tumhara grid layout preserve
//           }}
//           dangerouslySetInnerHTML={{ __html: page.join("") }}
//         />
//       ))}

//       {/* Hidden measuring container */}
//       <div
//         ref={hiddenRef}
//         style={{
//           visibility: "hidden",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           zIndex: -1,
//           height: "auto",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }
