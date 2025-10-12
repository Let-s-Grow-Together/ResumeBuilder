

import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { supabase } from "../supabaseClient";
import { ResumeProvider } from "../context/ResumeContext";
import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
import SaveControls from "./SaveControl";
import templateStyles from "../data/templateStyle";
import { templates } from "../data/templates";
import Footer from "../Components/Footer/Footer";
import Navbar from "./Navbar";
import TemplateSidebar from "./TemplateSidebar";
import SidebarNav from "./SidebarNav";
import './Resumepage.css';
import mockUserData from '../data/mockUserData';
import resumeCss from '../ResumeRenderer/ResumeRenderer.css?inline'
import { toPng } from "html-to-image";

export default function ResumePage({ onLoginClick, setAuthModalOpen }) {
    const [user, setUser] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [userData, setUserData] = useState(null);
    const [activeNav, setActiveNav] = useState(null);
    const [searchParams] = useSearchParams();
    const { templateId } = useParams();
    const navigate = useNavigate();
    const resumeRef = useRef();
    const printResumeRef = useRef();

    const editModeFromURL = searchParams.get("edit") === "true";

    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
                event.preventDefault();
                handleDownload();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        });
    }, []);

    useEffect(() => {
        const found = templates.find((t) => t.id === Number(templateId));
        setSelectedTemplate(found);
        setUserData(mockUserData);
    }, [templateId]);

    const handleTemplateSwitch = (newId) => {
        const newTemplate = templates.find((t) => t.id === newId);
        if (newTemplate) setSelectedTemplate(newTemplate);
    };


    const handleDownload = async () => {
        // Clone the resume section
        try {
            const resumeElement = printResumeRef.current.cloneNode(true);

            // Inline computed styles (ensures styles apply in Puppeteer)
            const allElements = resumeElement.querySelectorAll("*");
            allElements.forEach((el) => {
                const computed = window.getComputedStyle(el);
                for (let prop of computed) {
                    el.style[prop] = computed.getPropertyValue(prop);
                }
            });

            // Build full HTML
            const html = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8" />
                    <style>
                    ${resumeCss}
                    </style>
                </head>
                <body>${resumeElement.outerHTML}</body>
                </html>
            `;

            const response = await fetch('http://localhost:3000/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/html',
                },
                body: html,
            });

            if (!response.ok) {
                alert('Failed to generate PDF');
                return;
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'generated.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } 
        catch (err) {
            console.error("Error downloading PDF:", err);
        }
    };

    if (!selectedTemplate || !userData)
        return <p style={{ textAlign: "center", paddingTop: "2rem" }}>Loading template...</p>;

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
                <Navbar onDownload={handleDownload} onLoginClick={() => onLoginClick()} />
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
                                    templates={templates}
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
                            {/* <Toolbar /> */}
                            <SaveControls />
                            <div
                                ref={resumeRef}
                                style={{

                                    margin: "-0.9rem auto",
                                    width: "fit-content",

                                }}
                            >
                                <ResumeRenderer template={selectedTemplate} printResumeRef={printResumeRef} />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </ResumeProvider>
        </>
    );
}
