
import { useState } from "react";
import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
import { ResumeProvider } from "../context/ResumeContext";
import templateStyles from "../data/templateStyle";
import "./TemplateSidebar.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function TemplateSidebar({ templates, selectedTemplate, onTemplateSelect, resumeData }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTemplate, setActiveTemplate] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const handleTemplateClick = (tpl) => {
        setActiveTemplate(tpl);
        setDrawerOpen(true);
        // onTemplateSelect(tpl.id);

        const search = location.search;
        navigate(`/resume/${tpl.id}${search}`);
    };

    return (
        <>
            <div className="template-container" style={{ maxHeight: "162vh", scrollbarWidth: "none", overflowY: "auto", width: "auto" }}>
                <h5 className="template-title">Select a Template</h5>
                <div className="template-grid">
                    {templates.map((tpl) => (
                        <div
                            key={tpl.id}
                            className={`template-card ${tpl.id === selectedTemplate.id ? "active" : ""}`}
                            onClick={() => handleTemplateClick(tpl)}
                        >
                            <div className="template-preview">
                                <div className="template-inner">
                                    <ResumeProvider
                                        key={tpl.id}
                                        initialData={resumeData}
                                        style={{ ...(templateStyles[tpl.id] || {}), layout: tpl.layout }}
                                        editModeFromURL={false}
                                        templateId={tpl.id}
                                    >
                                        <ResumeRenderer template={tpl} />
                                    </ResumeProvider>
                                </div>
                            </div>
                            <p className="template-name">{tpl.name}</p>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
}

