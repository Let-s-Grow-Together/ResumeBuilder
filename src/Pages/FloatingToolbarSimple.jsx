
import { useResume } from "../context/ResumeContext";
import { motion } from "framer-motion";
import mockUserData from "../data/mockUserData";

const icons = {
    add: "➕",
    remove: "➖",
};

const defaultTemplates = {
    skills: "skill",
    language: "language",
    strengths: { ...mockUserData.strengths?.[0] },
    organizations: { ...mockUserData.organizations?.[0] },
    achievements: { ...mockUserData.achievements?.[0] },
    awards: { ...mockUserData.awards?.[0] },
    certifications: { ...mockUserData.certifications?.[0] },
};

export default function FloatingToolbarSimple({ sectionKey, position = {} }) {
    const { data, updateField, selectedSection, editMode } = useResume();

    if (selectedSection !== sectionKey || !editMode) return null;

    const sectionData = data?.[sectionKey] || [];

    const handleAdd = () => {
        const template = defaultTemplates[sectionKey];
        const newItem = typeof template === "object" && !Array.isArray(template)
            ? { ...template }
            : template || "";
        updateField(sectionKey, null, [...sectionData, newItem]);
    };

    const handleDelete = () => {
        updateField(sectionKey, null, sectionData.slice(0, -1));
    };

    const style = {
        position: "absolute",
        top: position?.top || "-25px",
        left: position?.left || "unset",
        right: position?.right || "50px",
        width: "120px",
        height: "50px",
        display: "flex",
        gap: "12px",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        border: "1px solid #ddd",
        padding: "6px 10px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
        zIndex: 9999,
    };

    const buttonStyle = {
        padding: "8px",
        fontSize: "18px",
        background: "#fefefe",
        border: "1px solid #ddd",
        borderRadius: "8px",
        cursor: "pointer",
    };

    return (
        <motion.div
            style={style}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            <button style={buttonStyle} onClick={handleAdd}>{icons.add}</button>
            <button style={buttonStyle} onClick={handleDelete}>{icons.remove}</button>
        </motion.div>
    );
}


