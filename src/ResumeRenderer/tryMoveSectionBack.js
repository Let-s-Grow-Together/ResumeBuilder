export default function tryMoveSectionBack(template, areaRefs, padding = "0px") {
    if (!template || !template.layout) return template;

    const rawLayout = template.layout || {};
    const layout = {};
    Object.keys(rawLayout).forEach((k) => {
        const areas = rawLayout[k];
        if (Array.isArray(areas)) {
            layout[k] = areas.map((area) => ({
                ...area,
                sections: Array.isArray(area.sections) ? [...area.sections] : [],
            }));
        } else {
            layout[k] = areas;
        }
    });

    const areaKeys = Object.keys(layout).filter((k) => k.startsWith("areas")).sort();
    if (areaKeys.length <= 1) return template;

    const paddingValue = parseFloat(padding) || 0;
    let updated = false;

    outer: for (let i = areaKeys.length - 1; i > 0; i--) {
        const currentKey = areaKeys[i];
        const prevKey = areaKeys[i - 1];

        const currentAreas = layout[currentKey] || [];
        const prevAreas = layout[prevKey] || [];
        if (!currentAreas.length || !prevAreas.length) continue;

        const prevPageEl = document.querySelector(`.resume-view[data-area-key="${prevKey}"]`);
        if (!prevPageEl) continue;
        const pageHeight = prevPageEl.offsetHeight || 0;
        const availableHeight = pageHeight - 2 * paddingValue;

        const prevFullWidthAreas = (prevAreas || []).filter(area => {
            if (area.paginate === false) return true;
            if (!area.width) return false;
            const w = ("" + area.width).trim();
            return w === "100%" || w === "100";
        });

        let prevFullWidthHeight = 0;
        for (const fw of prevFullWidthAreas) {
            const ref = areaRefs?.current?.[`${fw.name}-${prevKey}`]?.current;
            if (ref) {
                const rect = ref.getBoundingClientRect();
                const style = getComputedStyle(ref);
                prevFullWidthHeight += rect.height + parseFloat(style.marginTop || 0) + parseFloat(style.marginBottom || 0);
            }
        }

        const filteredCols = Number(template.filteredColumn) || 1;

        for (const currArea of currentAreas) {
            if (!currArea.sections || currArea.sections.length === 0) continue;

            const prevArea = prevAreas.find(a => a.name === currArea.name);
            if (!prevArea) continue;

            const candidateName = currArea.sections[0];

            const prevAreaRef = areaRefs?.current?.[`${prevArea.name}-${prevKey}`]?.current;
            let prevAreaHeight = 0;
            if (prevAreaRef) {
                const rect = prevAreaRef.getBoundingClientRect();
                const style = getComputedStyle(prevAreaRef);
                prevAreaHeight = rect.height + parseFloat(style.marginTop || 0) + parseFloat(style.marginBottom || 0);
            }

            const currAreaRef = areaRefs?.current?.[`${currArea.name}-${currentKey}`]?.current;
            let candidateHeight = 0;
            if (currAreaRef) {
                const candidateEl = currAreaRef.querySelector(`[data-section="${candidateName}"]`);
                if (candidateEl) {
                    const rect = candidateEl.getBoundingClientRect();
                    const style = getComputedStyle(candidateEl);
                    candidateHeight = rect.height + parseFloat(style.marginTop || 0) + parseFloat(style.marginBottom || 0);
                } else {
                    const rect = currAreaRef.getBoundingClientRect();
                    const style = getComputedStyle(currAreaRef);
                    candidateHeight = rect.height + parseFloat(style.marginTop || 0) + parseFloat(style.marginBottom || 0);
                }
            } else {
                continue;
            }

            if (filteredCols > 1) {
                const newColHeight = prevAreaHeight + candidateHeight;
                const simulatedTotal = prevFullWidthHeight + newColHeight;

                const BACK_BUFFER = 20;
                if (simulatedTotal <= availableHeight - BACK_BUFFER) {
                    const moved = currArea.sections.shift();
                    prevArea.sections = [...prevArea.sections, moved];
                    updated = true;
                    break outer;
                }
            } else {
                const BACK_BUFFER = 20;
                if (prevAreaHeight + candidateHeight <= availableHeight - BACK_BUFFER) {
                    const moved = currArea.sections.shift();
                    prevArea.sections = [...prevArea.sections, moved];
                    updated = true;
                    break outer;
                }
            }
        }
        
        if (layout[currentKey] && layout[currentKey].every(a => !a.sections || a.sections.length === 0)) {
            delete layout[currentKey];
            updated = true;
        }
    }
    return updated ? { ...template, layout } : template;
}
