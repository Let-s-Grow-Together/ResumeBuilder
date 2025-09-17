import React, { useState } from "react";
import LayoutEditorModal from "../Features/LayoutEditorModal/LayoutEditorModal";
import ProfilePage from "../Pages/Profilepage";
import "./SidebarNav.css";
import { BookOpen, Ruler, Palette, User } from "lucide-react";

const navItems = [
    { key: "templates", label: "Templates", icon: <BookOpen size={18} /> },
    { key: "layout", label: "Layout", icon: <Ruler size={18} /> },
    { key: "design", label: "Design & Font", icon: <Palette size={18} /> },
    // { key: "profile", label: "Profile", icon: <User size={18} /> },
];

const SidebarNav = ({ active, onChange }) => {
    const [showLayoutModal, setShowLayoutModal] = useState(false);
    const [showProfile, setShowProfile] = useState(false); // ✅ new
    const [activeModalKey, setActiveModalKey] = useState(null);

    const handleItemClick = (itemKey) => {
        if (active === itemKey) {
            if (itemKey === "layout") {
                setShowLayoutModal((prev) => !prev);
                setActiveModalKey((prev) => (prev === "layout" ? null : "layout"));
            } else if (itemKey === "profile") {
                setShowProfile((prev) => !prev);
                setActiveModalKey((prev) => (prev === "profile" ? null : "profile"));
            } else {
                onChange(null);
            }
        } else {
            onChange(itemKey);

            if (itemKey === "layout") {
                setShowLayoutModal(true);
                setShowProfile(false);
                setActiveModalKey("layout");
            } else if (itemKey === "profile") {
                setShowProfile(true);
                setShowLayoutModal(false);
                setActiveModalKey("profile");
            } else {
                setShowLayoutModal(false);
                setShowProfile(false);
                setActiveModalKey(null);
            }
        }
    };

    return (
        <>
            <div
                className="sidebarnav"
                style={{
                    width: "160px",
                    padding: "1rem 0.5rem",
                    height: "70vh",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    background: "linear-gradient(to right, #fddb7cc7, #d3bae7)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                    margin: "1rem",
                    marginTop: "1rem",
                    border: "1px solid #ffffff5e",
                }}
            >
                {navItems.map((item) => (
                    <div
                        key={item.key}
                        onClick={() => handleItemClick(item.key)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.7rem 1rem",
                            borderRadius: "8px",
                            cursor: "pointer",
                            backgroundColor:
                                active === item.key ? "#f0f0f03d" : "transparent",
                            fontWeight: active === item.key ? "700" : "400",
                        }}
                    >
                        {item.icon}
                        {item.label}
                    </div>
                ))}

                <LayoutEditorModal
                    isOpen={showLayoutModal}
                    onClose={() => {
                        setShowLayoutModal(false);
                        setActiveModalKey(null);
                    }}
                />
            </div>

            {showProfile && (
                <div
                    style={{
                        position: "fixed",
                        top: "70px",
                        right: "20px",
                        width: "600px",
                        height: "80vh",
                        overflowY: "auto",
                        background: "#fff",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                        borderRadius: "12px",
                        zIndex: 1000,
                        padding: "2rem",
                    }}
                >
                    <button
                        onClick={() => {
                            setShowProfile(false);
                            setActiveModalKey(null);
                        }}
                        style={{
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                            fontSize: "1.2rem",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        ×
                    </button>

                    <ProfilePage />
                </div>
            )}
        </>
    );
};

export default SidebarNav;



