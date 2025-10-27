import { useState, useEffect } from "react";
import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
import { ResumeProvider } from "../context/ResumeContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./TemplateSidebar.css";
import { fetchTemplates, fetchTemplateStyles } from "../Components/utility/api";

export default function TemplateSidebar({ selectedTemplate, onTemplateSelect, resumeData }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTemplate, setActiveTemplate] = useState(null);
    const [templates, setTemplates] = useState([]);
    const [templateStyles, setTemplateStyles] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedTemplates = await fetchTemplates();
                const fetchedTemplateStyles = await fetchTemplateStyles();
                setTemplates(fetchedTemplates);
                setTemplateStyles(fetchedTemplateStyles);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleTemplateClick = (tpl) => {
        setActiveTemplate(tpl);
        setDrawerOpen(true);
        const search = location.search;
        navigate(`/resume/${tpl.id}${search}`);
    };

    if (loading) {
        return <div>Loading templates...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
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
    );
}
