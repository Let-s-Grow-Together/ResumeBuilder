import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResumeProvider } from '../context/ResumeContext';
import ResumeRenderer from '../ResumeRenderer/ResumeRenderer';
import templateStyles from '../data/templateStyle';
import mockUserData from '../data/mockUserData';

export default function TemplateSection({ templates }) {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollSpeed = 1; // pixels per frame
        let isPaused = false;
        let animationId;

        // Duplicate content to create a seamless scroll illusion
        // const originalContent = container.innerHTML;
        // container.innerHTML += originalContent;

        const autoScroll = () => {
            if (!isPaused) {
                container.scrollLeft += scrollSpeed;

                // Reset to start when we've scrolled past the first full copy
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }

            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);

        // Pause on hover (desktop)
        const pauseScroll = () => { isPaused = true; };
        const resumeScroll = () => { isPaused = false; };

        container.addEventListener('mouseenter', pauseScroll);
        container.addEventListener('mouseleave', resumeScroll);

        // Pause on long-press (mobile)
        let touchTimer;
        const handleTouchStart = () => {
            touchTimer = setTimeout(pauseScroll, 300);
        };
        const handleTouchEnd = () => {
            clearTimeout(touchTimer);
            resumeScroll();
        };

        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            cancelAnimationFrame(animationId);
            container.removeEventListener('mouseenter', pauseScroll);
            container.removeEventListener('mouseleave', resumeScroll);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);


    const handleSelectTemplate = (templateId) => {
        navigate(`/resume/${templateId}`);
    };

    return (
        <section id="templates" className="templateSection">
            <h2 className="heading">Choose a Resume Template</h2>

            <div className="templateScroll" ref={scrollRef}>
                {[...templates, ...templates].map((template, index) => (
                    <div
                        key={index}
                        className="templateCard"
                        onClick={() => handleSelectTemplate(template.id)}
                        style={{
                            width: '250px',
                            minHeight: '400px',
                            background: '#fff',
                            borderRadius: '10px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            transition: 'transform 0.2s',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            flex: '0 0 auto',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <div
                            className="templatePreview"
                            style={{
                                width: '100%',
                                height: '320px',
                                overflow: 'hidden',
                                position: 'relative',
                                background: '#f7f7f7',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                style={{
                                    transform: 'scale(0.28)',
                                    transformOrigin: 'top left',
                                    width: '210mm',
                                    height: '350mm',
                                    background: '#fff',
                                    pointerEvents: 'none',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}
                            >
                                <ResumeProvider
                                    initialData={mockUserData}
                                    style={templateStyles[template.id] || {}}
                                    editModeFromURL={false}
                                    templateId={template.id}
                                >
                                    <ResumeRenderer template={template} />
                                </ResumeProvider>
                            </div>
                        </div>

                        <p style={{ textAlign: 'center', fontWeight: '500', padding: '0.5rem 0' }}>
                            {template.name}
                        </p>
                    </div>
                ))}
            </div>

            <div className="seeAllWrapper">
                <button className="btnPrimary" onClick={() => navigate('/all-templates')}>
                    View All Templates
                </button>
            </div>
        </section>
    );
}
