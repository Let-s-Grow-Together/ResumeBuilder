import { useEffect, useMemo, useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./LayoutEditorModal.css";
import { useResume } from "../../context/ResumeContext";

const ALL_EDITABLE_SECTIONS = [
    "personalInfo",
    "avatar",
    "contact",
    "summary",
    "education",
    "workExperience",
    "skills",
    "projects",
    "organizations",
    "awards",
    "language",
    "strengths",
    "achievements",
    "certificates",
];

const formatLabel = (name) =>
    name.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

const StrictModeDroppable = ({ children, ...props }) => {
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));
        return () => cancelAnimationFrame(animation);
    }, []);
    if (!enabled) return null;
    return <Droppable {...props}>{children}</Droppable>;
};

export default function LayoutEditorModal({ isOpen, onClose }) {
    const {
        style,
        sectionOrder,
        setSectionOrder,
        customLayoutAreas,
        setCustomLayoutAreas,
    } = useResume();

    const modalRef = useRef();

    const templateAreas = style?.layout?.grid?.areas || [];
    const frozenSections = style?.layout?.frozenSections || [];

    const hasTwoColumns = useMemo(() => {
        const names = new Set(templateAreas.map((a) => a.name));
        return names.has("leftColumn") && names.has("rightColumn");
    }, [templateAreas]);

    const editableAreaNames = useMemo(() => {
        if (hasTwoColumns) return ["leftColumn", "rightColumn"];
        if (templateAreas.length === 1) return [templateAreas[0].name];
        const nonHeader = templateAreas.find((a) => a.name !== "header");
        return [nonHeader?.name || templateAreas[0].name];
    }, [hasTwoColumns, templateAreas]);

    const originalAreas = useMemo(() => {
        return (customLayoutAreas || templateAreas).map((a) => ({ ...a, sections: [...(a.sections || [])] }));
    }, [customLayoutAreas, templateAreas]);

    const untouchedSections = useMemo(() => {
        return originalAreas
            .filter((a) => !editableAreaNames.includes(a.name) && a.name !== "unused")
            .flatMap((a) => a.sections || []);
    }, [editableAreaNames, originalAreas]);

    const computeInitialBuckets = () => {
        const byName = Object.fromEntries(originalAreas.map((a) => [a.name, { ...a, sections: [...(a.sections || [])] }]));

        editableAreaNames.forEach((name) => {
            if (!byName[name]) byName[name] = { name, sections: [] };
        });

        const usedInEditable = editableAreaNames.flatMap((n) => byName[n]?.sections || []);

        const firstEditable = editableAreaNames[0];

        const referencedEverywhere = new Set(originalAreas.flatMap((a) => a.sections || []));

        const allowedUniverse = ALL_EDITABLE_SECTIONS.filter(
            (s) => !untouchedSections.includes(s)
        );

        let unusedSections = allowedUniverse.filter(
            (s) => !usedInEditable.includes(s) && !frozenSections.includes(s)
        );

        unusedSections = unusedSections.filter((s) => !untouchedSections.includes(s));

        editableAreaNames.forEach((name) => {
            const seen = new Set();
            byName[name].sections = byName[name].sections.filter((s) => {
                if (seen.has(s)) return false;
                seen.add(s);
                return true;
            });
        });

        const buckets = [
            ...editableAreaNames.map((name) => ({ name, sections: byName[name].sections })),
            { name: "unused", sections: unusedSections },
        ];

        return buckets;
    };

    const [buckets, setBuckets] = useState(computeInitialBuckets);

    useEffect(() => {
        if (!isOpen) return;
        setBuckets(computeInitialBuckets());
    }, [isOpen, customLayoutAreas, style]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) onClose?.();
        };
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose?.();
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEsc);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !style?.layout?.grid) return null;

    const isFrozen = (section) => frozenSections.includes(section);

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;
        if (!destination) return;

        if (isFrozen(draggableId)) return;

        const updated = buckets.map((b) => ({ ...b, sections: [...b.sections] }));
        const sourceBucket = updated.find((b) => b.name === source.droppableId);
        const destBucket = updated.find((b) => b.name === destination.droppableId);
        if (!sourceBucket || !destBucket) return;

        const [moved] = sourceBucket.sections.splice(source.index, 1);
        if (!destBucket.sections.includes(moved)) {
            const frozenCount = destBucket.sections.filter((s) => isFrozen(s)).length;

            const insertIndex = Math.max(destination.index, frozenCount);

            destBucket.sections.splice(insertIndex, 0, moved);
        }

        if (destBucket.name === "unused" && isFrozen(moved)) {
            sourceBucket.sections.splice(source.index, 0, moved);
            return;
        }

        setBuckets(updated);
    };

    const handleApply = () => {
        const edited = buckets.filter((b) => b.name !== "unused");
        const unused = buckets.find((b) => b.name === "unused");

        const originalsByName = Object.fromEntries(originalAreas.map((a) => [a.name, a]));

        const safeUnused = (unused?.sections || []).filter(
            (s) => !frozenSections.includes(s) && !untouchedSections.includes(s)
        );

        const newLayout = originalAreas.map((orig) => {
            if (orig.name === "unused") {
                return { ...orig, sections: safeUnused };
            }

            if (editableAreaNames.includes(orig.name)) {
                const editedBucket = edited.find((b) => b.name === orig.name);
                return {
                    ...orig,
                    sections: (editedBucket?.sections || []).filter((s) => ALL_EDITABLE_SECTIONS.includes(s)),
                };
            }

            return { ...orig, sections: [...(orig.sections || [])] };
        });

        if (!newLayout.some((a) => a.name === "unused")) {
            newLayout.push({ name: "unused", sections: safeUnused });
        }

        const newSectionsInLayout = newLayout.flatMap((a) => a.sections || []);
        const mergedOrder = Array.from(
            new Set([...(sectionOrder || []), ...newSectionsInLayout])
        );

        setSectionOrder(mergedOrder);
        setCustomLayoutAreas(newLayout);
        onClose?.();
    };

    const orderedBucketNames = hasTwoColumns
        ? ["leftColumn", "rightColumn", "unused"]
        : [editableAreaNames[0], "unused"];

    const bucketsToRender = orderedBucketNames
        .map((name) => buckets.find((b) => b.name === name))
        .filter(Boolean);

    return (
        <div className="layoutEditorModalOverlay">
            <div className="layoutEditorModal" ref={modalRef}>
                <div className="modalContent">
                    <h2>Arrange Sections</h2>
                    <p className="muted">
                        {hasTwoColumns
                            ? "Drag sections between Left and Right columns, or to Unused to hide them."
                            : `Drag sections into ${formatLabel(editableAreaNames[0])} or move to Unused to hide them.`}
                    </p>

                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className={`gridAreaPreview ${hasTwoColumns ? "twoCol" : "oneCol"}`}>
                            {bucketsToRender.map((bucket) => (
                                <div key={bucket.name} className="gridAreaBox">
                                    <h4>{formatLabel(bucket.name)}</h4>
                                    <StrictModeDroppable droppableId={bucket.name}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className={`droppableZone ${snapshot.isDraggingOver ? "dragOver" : ""}`}
                                            >
                                                {bucket.sections.map((section, index) => {
                                                    const frozen = frozenSections.includes(section) || untouchedSections.includes(section);
                                                    const content = (
                                                        <div
                                                            className={`sectionItem ${frozen ? "locked" : ""}`}
                                                            title={frozen ? "This section is frozen in this template" : "Drag to rearrange"}
                                                        >
                                                            {formatLabel(section)} {frozen ? "🔒" : ""}
                                                        </div>
                                                    );

                                                    if (frozen) {
                                                        return (
                                                            <div key={section} className="sectionItemWrapper">
                                                                {content}
                                                            </div>
                                                        );
                                                    }

                                                    return (
                                                        <Draggable key={section} draggableId={section} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className={`sectionItem ${snapshot.isDragging ? "dragging" : ""}`}
                                                                >
                                                                    {formatLabel(section)}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </StrictModeDroppable>
                                </div>
                            ))}
                        </div>
                    </DragDropContext>

                    <div className="modalButtons">
                        <button onClick={handleApply}>Apply</button>
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


/* import { useEffect, useMemo, useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./LayoutEditorModal.css";
import { useResume } from "../../context/ResumeContext";

const ALL_EDITABLE_SECTIONS = [
    "personalInfo",
    "avatar",
    "contact",
    "summary",
    "education",
    "workExperience",
    "skills",
    "projects",
    "organizations",
    "awards",
    "language",
    "strengths",
    "achievements",
    "certificates",
];

const formatLabel = (name) =>
    name.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

const StrictModeDroppable = ({ children, ...props }) => {
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));
        return () => cancelAnimationFrame(animation);
    }, []);
    if (!enabled) return null;
    return <Droppable {...props}>{children}</Droppable>;
};

export default function LayoutEditorModal({ isOpen, onClose }) {
    const {
        style,
        sectionOrder,
        setSectionOrder,
        customLayoutAreas,
        setCustomLayoutAreas,
    } = useResume();

    const modalRef = useRef();

    const layout = style?.layout;
    const frozenSections = layout?.frozenSections || [];

    const layoutKeys = Object.keys(layout || {}).filter(key => key.startsWith("areas"));
    const allAreas = (customLayoutAreas?.length ? customLayoutAreas : layoutKeys.flatMap(key => layout[key])) || [];

    const editableAreaNames = useMemo(() => {
        const nonHeaderAreas = allAreas.filter(a => a.name !== "header" && a.name !== "unused");
        const mainAreas = nonHeaderAreas.map(a => a.name);
        return mainAreas.length > 0 ? mainAreas : allAreas.map(a => a.name);
    }, [allAreas]);

    const untouchedSections = useMemo(() => {
        return allAreas
            .filter(a => !editableAreaNames.includes(a.name) && a.name !== "unused")
            .flatMap(a => a.sections || []);
    }, [editableAreaNames, allAreas]);

    const computeInitialBuckets = () => {
        const byName = Object.fromEntries(
            allAreas.map(a => [a.name, { ...a, sections: [...(a.sections || [])] }])
        );

        editableAreaNames.forEach(name => {
            if (!byName[name]) byName[name] = { name, sections: [] };
        });

        const usedInEditable = editableAreaNames.flatMap(name => byName[name]?.sections || []);

        const allowedUniverse = ALL_EDITABLE_SECTIONS.filter(
            s => !untouchedSections.includes(s)
        );

        let unusedSections = allowedUniverse.filter(
            s => !usedInEditable.includes(s) && !frozenSections.includes(s)
        );

        unusedSections = unusedSections.filter(s => !untouchedSections.includes(s));

        editableAreaNames.forEach(name => {
            const seen = new Set();
            byName[name].sections = byName[name].sections.filter(s => {
                if (seen.has(s)) return false;
                seen.add(s);
                return true;
            });
        });

        const buckets = [
            ...editableAreaNames.map(name => ({ name, sections: byName[name].sections })),
            { name: "unused", sections: unusedSections }
        ];

        return buckets;
    };

    const [buckets, setBuckets] = useState(computeInitialBuckets);

    useEffect(() => {
        if (!isOpen) return;
        setBuckets(computeInitialBuckets());
    }, [isOpen, customLayoutAreas, style]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) onClose?.();
        };
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose?.();
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEsc);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    const isFrozen = (section) => frozenSections.includes(section);

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;
        if (!destination || isFrozen(draggableId)) return;

        const updated = buckets.map(b => ({ ...b, sections: [...b.sections] }));
        const sourceBucket = updated.find(b => b.name === source.droppableId);
        const destBucket = updated.find(b => b.name === destination.droppableId);

        if (!sourceBucket || !destBucket) return;

        const [moved] = sourceBucket.sections.splice(source.index, 1);

        const frozenCount = destBucket.sections.filter(s => isFrozen(s)).length;
        const insertIndex = Math.max(destination.index, frozenCount);

        if (!destBucket.sections.includes(moved)) {
            destBucket.sections.splice(insertIndex, 0, moved);
        }

        setBuckets(updated);
    };

    const handleApply = () => {
        const edited = buckets.filter(b => b.name !== "unused");
        const unused = buckets.find(b => b.name === "unused");

        const safeUnused = (unused?.sections || []).filter(
            s => !frozenSections.includes(s) && !untouchedSections.includes(s)
        );

        // Regenerate layoutKeys structure (areas1, areas2, etc.)
        const areaMap = {};
        let areaIndex = 1;

        for (const b of edited) {
            const areaObj = {
                name: b.name,
                width: allAreas.find(a => a.name === b.name)?.width || "100%",
                sections: b.sections.filter(s => ALL_EDITABLE_SECTIONS.includes(s))
            };

            const key = `areas${areaIndex}`;
            if (!areaMap[key]) areaMap[key] = [];
            areaMap[key].push(areaObj);

            // Increment index every two areas (like left/right)
            if (areaMap[key].length === 2) areaIndex++;
        }

        const unusedArea = {
            name: "unused",
            width: "100%",
            sections: safeUnused
        };

        const finalLayout = { ...style.layout };

        for (const key of Object.keys(finalLayout)) {
            if (key.startsWith("areas")) {
                delete finalLayout[key];
            }
        }

        Object.entries(areaMap).forEach(([key, areas]) => {
            finalLayout[key] = areas;
        });

        finalLayout[`areas${areaIndex + 1}`] = [unusedArea];

        setCustomLayoutAreas(Object.values(areaMap).flat().concat(unusedArea));

        const newSectionsInLayout = Object.values(areaMap).flatMap((a) => a.flatMap(area => area.sections));
        const mergedOrder = Array.from(
            new Set([...(sectionOrder || []), ...newSectionsInLayout])
        );

        setSectionOrder(mergedOrder);
        onClose?.();
    };

    const orderedBucketNames = [...editableAreaNames, "unused"];
    const bucketsToRender = orderedBucketNames.map(name => buckets.find(b => b.name === name)).filter(Boolean);

    return (
        <div className="layoutEditorModalOverlay">
            <div className="layoutEditorModal" ref={modalRef}>
                <div className="modalContent">
                    <h2>Arrange Sections</h2>
                    <p className="muted">
                        Drag and drop sections to reorder or hide them by moving to "Unused".
                    </p>

                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className={`gridAreaPreview ${editableAreaNames.length > 1 ? "twoCol" : "oneCol"}`}>
                            {bucketsToRender.map((bucket) => (
                                <div key={bucket.name} className="gridAreaBox">
                                    <h4>{formatLabel(bucket.name)}</h4>
                                    <StrictModeDroppable droppableId={bucket.name}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className={`droppableZone ${snapshot.isDraggingOver ? "dragOver" : ""}`}
                                            >
                                                {bucket.sections.map((section, index) => {
                                                    const frozen = frozenSections.includes(section) || untouchedSections.includes(section);
                                                    const content = (
                                                        <div
                                                            className={`sectionItem ${frozen ? "locked" : ""}`}
                                                            title={frozen ? "This section is frozen in this template" : "Drag to rearrange"}
                                                        >
                                                            {formatLabel(section)} {frozen ? "🔒" : ""}
                                                        </div>
                                                    );

                                                    if (frozen) {
                                                        return (
                                                            <div key={section} className="sectionItemWrapper">
                                                                {content}
                                                            </div>
                                                        );
                                                    }

                                                    return (
                                                        <Draggable key={section} draggableId={section} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className={`sectionItem ${snapshot.isDragging ? "dragging" : ""}`}
                                                                >
                                                                    {formatLabel(section)}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </StrictModeDroppable>
                                </div>
                            ))}
                        </div>
                    </DragDropContext>

                    <div className="modalButtons">
                        <button onClick={handleApply}>Apply</button>
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
} */
