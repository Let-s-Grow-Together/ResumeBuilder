import { useEffect, useRef, useState } from "react";

const PAGE_HEIGHT = 1123; // A4 height at 96 DPI

export default function AutoPaginator({ children }) {
  const containerRef = useRef(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const nodes = Array.from(containerRef.current.children);
    let tempPages = [];
    let currentPage = [];
    let currentHeight = 0;

    nodes.forEach((node) => {
      const h = node.getBoundingClientRect().height;

      // Agar current page me fit nahi hota → next page me daalo
      if (currentHeight + h > PAGE_HEIGHT) {
        if (currentPage.length) tempPages.push(currentPage);
        currentPage = [node.cloneNode(true)];
        currentHeight = h;
      } else {
        currentPage.push(node.cloneNode(true));
        currentHeight += h;
      }
    });

    if (currentPage.length) tempPages.push(currentPage);

    // React ke andar render karne ke liye
    setPages(
      tempPages.map((pageNodes, idx) => (
        <div
          key={idx}
          className="page"
          style={{
            height: PAGE_HEIGHT + "px",
            overflow: "hidden",
            border: "1px solid #ddd",
            marginBottom: "20px",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          {pageNodes.map((n, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: n.outerHTML }} />
          ))}
        </div>
      ))
    );
  }, [children]);

  return (
    <div className="resume-pages">
      {pages}

      {/* Hidden original content → height measurement ke liye */}
      <div
        ref={containerRef}
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          top: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
