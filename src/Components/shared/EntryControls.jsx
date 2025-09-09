

import { useResume } from "../../context/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function EntryControls({ tagName, savedSelection, sectionName }) {
    const {
        data,
        updateField,
        addEntryAfter,
        removeEntry,
        addFullEntryAfter,
        removeFullEntry,
        style
    } = useResume();

    const handleAction = (action) => {
        const sel = window.getSelection();
        const range = sel?.rangeCount > 0 ? sel.getRangeAt(0) : savedSelection?.current;
        if (!range) return;

        let node = range.startContainer;
        while (node && node !== document) {
            if (node.nodeType === 1 && typeof node.getAttribute === "function" && node.hasAttribute("data-id")) {
                break;
            }
            node = node.parentNode;
        }

        const id = node instanceof HTMLElement ? node.getAttribute("data-id") : null;
        if (!id || !sectionName) {
            console.warn("EntryControls: No valid data-id or sectionName", { node, sectionName });
            return;
        }

        if (sectionName === "skills" && style?.skills?.layoutType === "layout3") {
            handleSkillsLayout3Action(action, id, tagName);
            return;
        }

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

    const handleSkillsLayout3Action = (action, id, tagName) => {
        const updatedSkills = [...data.skills];

        if (tagName === "h3") {
            if (action === "add") {
                const categoryIndex = updatedSkills.findIndex(skill => skill.id === id);
                const newCategory = {
                    id: `skill_category_${Date.now()}`,
                    category: "NEW CATEGORY",
                    items: ["Skill 1", "Skill 2"]
                };
                updatedSkills.splice(categoryIndex + 1, 0, newCategory);
            } else {
                const categoryIndex = updatedSkills.findIndex(skill => skill.id === id);
                if (categoryIndex !== -1) {
                    updatedSkills.splice(categoryIndex, 1);
                }
            }
        } else if (tagName === "span") {
            if (id.includes("-item-")) {
                const [categoryId, itemPart] = id.split("-item-");
                const itemIndex = parseInt(itemPart);
                const categoryIndex = updatedSkills.findIndex(skill => skill.id === categoryId);

                if (categoryIndex !== -1 && Array.isArray(updatedSkills[categoryIndex].items)) {
                    if (action === "add") {
                        updatedSkills[categoryIndex].items.splice(itemIndex + 1, 0, "New Skill");
                    } else {
                        if (updatedSkills[categoryIndex].items.length > 1) {
                            updatedSkills[categoryIndex].items.splice(itemIndex, 1);
                        }
                    }
                    updatedSkills[categoryIndex] = { ...updatedSkills[categoryIndex] };
                }
            }
        }

        updateField("skills", null, updatedSkills);
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