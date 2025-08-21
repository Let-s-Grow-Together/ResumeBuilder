
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
  const [pageCount, setPageCount] = useState(1);

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
          top: 0,
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
