

import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { supabase } from "../supabaseClient";
import { ResumeProvider } from "../context/ResumeContext";
import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
// import Toolbar from "./Toolbar";
import SaveControls from "./SaveControl";
import templateStyles from "../data/templateStyle";
import { templates } from "../data/templates";
import Footer from "../Components/Footer/Footer";
import Navbar from "./Navbar";
import TemplateSidebar from "./TemplateSidebar";
import SidebarNav from "./SidebarNav";
import './Resumepage.css';
import { toPng } from "html-to-image";
import AutoPaginator from "../ResumeRenderer/components/AutoPaginator";

export default function ResumePage({ onLoginClick }) {
    const [user, setUser] = useState(null);
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
    }, []);






    useEffect(() => {
        fetch("/api/templates")
            .then((res) => res.json())
            .then((data) => {
                const found = data.templates.find((t) => t.id === Number(templateId));
                setSelectedTemplate(found);
            });

        fetch("/api/user-data")
            .then((res) => res.json())
            .then((data) => {
                setUserData(data.data);
            });
    }, [templateId]);

    const handleTemplateSwitch = (newId) => {
        const newTemplate = templates.find((t) => t.id === newId);
        if (newTemplate) setSelectedTemplate(newTemplate);
    };


    const handleDownload = async () => {
        if (editModeFromURL) {
            alert("Please save your resume before downloading.");
            return;
        }

        const {
            data: { user: currentUser },
        } = await supabase.auth.getUser();

        if (!currentUser) {
            navigate("/auth");
            return;
        }

        const input = resumeRef.current;

        const images = input.querySelectorAll("img");
        await Promise.all(
            Array.from(images).map(
                (img) =>
                    new Promise((resolve) => {
                        if (img.complete) resolve();
                        else img.onload = img.onerror = resolve;
                    })
            )
        );

        await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 100)));

        try {
            const dataUrl = await toPng(input, {
                cacheBust: true,
                backgroundColor: "#ffffff",
                pixelRatio: 2,
                style: {
                    margin: 0,
                    padding: 0,
                    transform: 'none'
                }
            });

            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (input.offsetHeight * pdfWidth) / input.offsetWidth;
            pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("my-resume.pdf");
        } catch (err) {
            console.error("Error generating PDF", err);
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
                               <AutoPaginator>
                                 <ResumeRenderer template={selectedTemplate} />
                               </AutoPaginator>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </ResumeProvider>
        </>
    );
}
