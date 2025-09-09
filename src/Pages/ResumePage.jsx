import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { ResumeProvider } from "../context/ResumeContext";
import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
import SaveControls from "./SaveControl";
import templateStyles from "../data/templateStyle";
import Footer from "../Components/Footer/Footer";
import Navbar from "./Navbar";
import TemplateSidebar from "./TemplateSidebar";
import SidebarNav from "./SidebarNav";
import handleDownload from "../utils/handleDownload";
import './Resumepage.css';

export default function ResumePage({ onLoginClick }) {
    const [user, setUser] = useState(null);
    const [templatesData, setTemplatesData] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [userData, setUserData] = useState(null);
    const [activeNav, setActiveNav] = useState(null);
    const [searchParams] = useSearchParams();
    const { templateId } = useParams();
    const navigate = useNavigate();
    const resumeRef = useRef();
    const editModeFromURL = searchParams.get("edit") === "true";

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        });

        if (templatesData.length === 0) {
            fetch("/api/templates")
                .then((res) => res.json())
                .then((data) => {
                    setTemplatesData(data.templates);
                });
        }

        fetch("/api/user-data")
            .then((res) => res.json())
            .then((data) => {
                setUserData(data.data);
            });
    }, []);

    useEffect(() => {
        if (templatesData.length > 0) {
            const found = templatesData.find((t) => t.id === Number(templateId));
            setSelectedTemplate(found);
        }
    }, [templateId, templatesData]);

    const handleTemplateSwitch = (newId) => {
        const newTemplate = templatesData.find((t) => t.id === newId);
        if (newTemplate) setSelectedTemplate(newTemplate);
    };

    const handleDownloadClick = () => {
        handleDownload(resumeRef, editModeFromURL, navigate);
    };

    if (!selectedTemplate || !userData) {
        return <p style={{ textAlign: "center", paddingTop: "2rem" }}>Loading template...</p>;
    }

    const dynamicStyle = {
        ...(templateStyles[selectedTemplate.id] || {}),
        layout: selectedTemplate.layout
    };

    const savedData = JSON.parse(localStorage.getItem("resumeData"));
    const resumeData = savedData || userData;

    return (
        <>
            <ResumeProvider
                key={selectedTemplate.id}
                initialData={resumeData}
                style={dynamicStyle}
                editModeFromURL={editModeFromURL}
                templateId={selectedTemplate.id}
            >
                <Navbar onDownload={handleDownloadClick} onLoginClick={() => onLoginClick()} />
                <div className="templateSectionn" style={{ display: "flex", minHeight: "100vh" }}>
                    <div style={{ width: "220px", flexShrink: 0 }}>
                        <SidebarNav active={activeNav} onChange={setActiveNav} />
                    </div>

                    <div style={{ display: "flex", flexGrow: 1, overflow: "hidden" }} className="">
                        {activeNav === "templates" && (
                            <div
                                style={{
                                    width: "100%",
                                    maxWidth: "500px",
                                    minWidth: "300px",
                                    position: "relative",
                                    overflowY: "auto",
                                    padding: "1rem",
                                    transform: activeNav === "templates" ? "translateX(0)" : "translateX(-100%)"
                                }}
                            >
                                <button
                                    onClick={() => setActiveNav(null)}
                                    className="close-button"
                                    style={{
                                        position: "absolute",
                                        top: "26px",
                                        right: "27px",
                                        zIndex: 100,
                                        background: "transparent",
                                        border: "none",
                                        fontSize: "20px",
                                        cursor: "pointer",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                        boxShadow: "0 0 6px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    ✖
                                </button>

                                <TemplateSidebar
                                    templates={templatesData}
                                    selectedTemplate={selectedTemplate}
                                    onTemplateSelect={handleTemplateSwitch}
                                    resumeData={resumeData}
                                />
                            </div>
                        )}

                        <div
                            style={{
                                flexGrow: 1,
                                padding: "2rem",
                                textAlign: "center",
                                minWidth: 0,
                                position: "relative",
                                margin: "1rem 0rem 1rem 0rem"
                            }}
                            className="hide-scroll"
                        >
                            <SaveControls />
                            <div
                                ref={resumeRef}
                                style={{
                                    margin: "-0.9rem auto",
                                    width: "fit-content",
                                }}
                            >
                                <ResumeRenderer template={selectedTemplate} setTemplate={setSelectedTemplate} />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </ResumeProvider>
        </>
    );
}
