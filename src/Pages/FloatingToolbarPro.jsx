//FloatingToolbarPro:
import { useResume } from "../context/ResumeContext";
import { motion } from "framer-motion";
import mockUserData from "../data/mockUserData";
import { v4 as uuidv4 } from "uuid";

const icons = {
    add: "➕",
    remove: "➖",
    addBullet: "📌➕",
    removeBullet: "📌➖",
};

const defaultTemplates = {
    experience: { ...mockUserData.experience?.[0] },
    skills: "skill",
    education: {
        ...mockUserData.education[0],
        Description: Array.isArray(mockUserData.education[0].Description)
            ? [...mockUserData.education[0].Description]
            : [{ id: uuidv4(), text: mockUserData.education[0].Description }]
    },
    projects: {
        ...mockUserData.projects?.[0],
        Description: Array.isArray(mockUserData.projects?.[0]?.Description)
            ? [...mockUserData.projects[0].Description]
            : [mockUserData.projects[0].Description]
    },
    achievements: { ...mockUserData.achievements?.[0] },
    certifications: { ...mockUserData.certifications?.[0] },
    
};

const tooltipStyle = {
    position: "absolute",
    bottom: "-22px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "12px",
    color: "#fff",
    background: "#333",
    padding: "3px 8px",
    borderRadius: "4px",
    whiteSpace: "nowrap",
};

export default function FloatingToolbarPro({ sectionKey, position = {} }) {
    const { data, updateField, selectedSection, editMode } = useResume();

    if (selectedSection !== sectionKey || !editMode) return null;

    const sectionData = data?.[sectionKey] || [];

    // ✳ Add experience field
    const handleAdd = () => {
        const template = defaultTemplates[sectionKey];

        if (template !== undefined) {
            const newItem = typeof template === "object" && !Array.isArray(template)
                ? { ...template }
                : template;
            updateField(sectionKey, null, [...sectionData, newItem]);
        } else {
            updateField(sectionKey, null, [...sectionData, typeof sectionData[0] === "string" ? "" : {}]);
        }
    };

    // ❌ Remove last entry in section (e.g., last job)
    const handleDelete = () => {
        updateField(sectionKey, null, sectionData.slice(0, -1));
    };

    // ➕ Add a bullet to Description array inside last experience
    const handleAddBullet = () => {
        const updated = [...sectionData];
        const last = updated[updated.length - 1];
        if (!last) return;

        const updatedDesc = [...(last.Description || [])];
        updatedDesc.push({ id: uuidv4(), text: "New bullet point" });

        updated[updated.length - 1] = {
            ...last,
            Description: updatedDesc,
        };

        updateField(sectionKey, null, updated);
    };

    // ➖ Remove last bullet from Description array inside last experience
    const handleRemoveBullet = () => {
        const updated = [...sectionData];
        const last = updated[updated.length - 1];
        if (!last || !last.Description?.length) return;

        const updatedDesc = [...last.Description];
        updatedDesc.pop();

        updated[updated.length - 1] = {
            ...last,
            Description: updatedDesc,
        };

        updateField(sectionKey, null, updated);
    };

    const style = {
        position: "absolute",
        top: position?.top || "-25px",
        left: position?.left || "unset",
        right: position?.right || "-50px",
        width: "300px",
        height: "60px",
        display: "flex",
        gap: "12px",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        border: "1px solid #ddd",
        padding: "8px 14px",
        borderRadius: "14px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
    };

    const buttonStyle = {
        position: "relative",
        padding: "8px",
        fontSize: "18px",
        background: "linear-gradient(to right, #fef6ff, #fff3f3)",
        border: "1px solid #e6cfff",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "transform 0.2s ease",
    };

    const actions = [
        { icon: icons.add, action: handleAdd, label: "Add Field" },
        { icon: icons.remove, action: handleDelete, label: "Delete Last" },
        { icon: icons.addBullet, action: handleAddBullet, label: "Add Bullet" },
        { icon: icons.removeBullet, action: handleRemoveBullet, label: "Remove Bullet" },
    ];

    return (
        <motion.div
            style={style}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            {actions.map(({ icon, action, label }, i) => (
                <div key={i} style={{ position: "relative" }}>
                    <button
                        style={buttonStyle}
                        onClick={action}
                        onMouseEnter={(e) => {
                            const tooltip = document.createElement("div");
                            tooltip.innerText = label;
                            Object.assign(tooltip.style, tooltipStyle);
                            e.currentTarget.appendChild(tooltip);
                        }}
                        onMouseLeave={(e) => {
                            const tooltip = e.currentTarget.querySelector("div");
                            if (tooltip) tooltip.remove();
                        }}
                    >
                        {icon}
                    </button>
                </div>
            ))}
        </motion.div>
    );
}