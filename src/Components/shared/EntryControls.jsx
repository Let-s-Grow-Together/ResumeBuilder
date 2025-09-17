import { useResume } from "../../context/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function EntryControls({ tagName, savedSelection, sectionName }) {
    const {
        addEntryAfter,
        removeEntry,
        addFullEntryAfter,
        removeFullEntry
    } = useResume();

    const handleAction = (action) => {
        const sel = window.getSelection();
        const range = sel.rangeCount > 0 ? sel.getRangeAt(0) : savedSelection.current;
        if (!range) return;

        let node = range.startContainer;
        while (node && node !== document) {
            if (node.nodeType === 1 && node.getAttribute("data-id")) break;
            node = node.parentNode;
        }

        const id = node?.getAttribute("data-id");
        if (!id || !sectionName) return;

        const isDescription = ["p", "li", "span"].includes(tagName);
        const isWholeEntry = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tagName);

        if (isDescription) {
            if (action === "add") addEntryAfter(sectionName, id);
            else removeEntry(sectionName, id);
        } else if (isWholeEntry) {
            if (action === "add") addFullEntryAfter(sectionName, id);
            else removeFullEntry(sectionName, id);
        }
    };

    if (!["p", "li", "span", "h1", "h2", "h3", "h4", "h5", "h6"].includes(tagName)) return null;

    return (
        <>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => handleAction("add")}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => handleAction("remove")}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </>
    );
}
