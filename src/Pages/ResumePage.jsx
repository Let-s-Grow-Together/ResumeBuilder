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
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; 
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
        <ToastContainer 
         position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
        />
            <ResumeProvider
                key={selectedTemplate.id}
                initialData={resumeData}
                style={dynamicStyle}
                editModeFromURL={editModeFromURL}
                templateId={selectedTemplate.id}
            >
                <Navbar onDownload={handleDownloadClick} onLoginClick={() => onLoginClick()} />
                <div className="resumePage">
                    <div className="sidebarWrapper">
                        <SidebarNav active={activeNav} onChange={setActiveNav} />
                    </div>

                    <div className="editorWrapper">
                        {activeNav === "templates" && (
                            <div className="templatesWrapper"
                                style={{
                                    transform: activeNav === "templates" ? "translateX(0)" : "translateX(-100%)"
                                }}
                            >
                                <button
                                    onClick={() => setActiveNav(null)}
                                    className="close-button"
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

                        <div className="hide-scroll">
                            <SaveControls />
                            <div
                                ref={resumeRef}
                                className="resumeWrapper"
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
