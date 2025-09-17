import { useState } from 'react';
import Header from '../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { templates } from '../data/templates';
import Footer from '../Components/Footer/Footer';
import { ResumeProvider } from '../context/ResumeContext';
import ResumeRenderer from '../ResumeRenderer/ResumeRenderer';
import templateStyles from '../data/templateStyle';
import mockUserData from '../data/mockUserData';
import AuthModal from './AuthModal'; 

export default function AllTemplatesPage() {
    const navigate = useNavigate();
    const [headshotFilter, setHeadshotFilter] = useState("");
    const [columnFilter, setColumnFilter] = useState("");
    const [authOpen, setAuthOpen] = useState(false);

    const filtered = templates.filter(template => {
        const mh = !headshotFilter ||
            (headshotFilter === "with" && template.isAvatar === "true") ||
            (headshotFilter === "without" && template.isAvatar === "false");
        const mc = !columnFilter ||
            (columnFilter === "one" && template.filteredColumn === "1") ||
            (columnFilter === "two" && template.filteredColumn === "2");
        return mh && mc;
    });

    const renderCard = (template) => (
        <div
            key={template.id}
            className="templateCard"
            onClick={() => navigate(`/resume/${template.id}`)}
        >
            <div className="templatePreview">
                <div
                    style={{
                        transform: 'scale(0.28)',
                        transformOrigin: 'top left',
                        width: '210mm',
                        height: '297mm',
                        background: '#fff',
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: '0.8rem',
                        left: '1.5rem',
                    }}
                >
                    <ResumeProvider
                        initialData={mockUserData}
                        style={templateStyles[template.id] || {}}
                        editModeFromURL={false}
                    >
                        <ResumeRenderer template={template} />
                    </ResumeProvider>
                </div>
            </div>
            <p>{template.name}</p>
            {/* <button
                className="customizeBtn"
                onClick={e => {
                    e.stopPropagation();
                    navigate(`/resume/${template.id}?edit=true`);
                }}
            >
                Customize
            </button> */}
        </div>
    );

    return (
        <>
            <section className="allTemplatesPage">
                <Header onLoginClick={() => setAuthOpen(true)} />
                <div className="templateIntro">
                    <div className="uprpara">
                        <h1>Pick the Template That Suits You Best</h1>
                        <p>Whether you're creative or corporate — we’ve got you covered!</p>
                    </div>
                </div>
                <div className="filterWrapper">
                    <div className="filterBar">
                        <div className="filterLeft">
                            <span className="filterLabel">Filters:</span>
                            <select className="barBtn" value={headshotFilter} onChange={e => setHeadshotFilter(e.target.value)}>
                                <option value="">Headshot</option>
                                <option value="with">With Photo</option>
                                <option value="without">Without Photo</option>
                            </select>
                            <select className="barBtn" value={columnFilter} onChange={e => setColumnFilter(e.target.value)}>
                                <option value="">Columns</option>
                                <option value="one">One Column</option>
                                <option value="two">Two Column</option>
                            </select>
                        </div>
                    </div>
                </div>

                {filtered.length === 0 ? (
                    <p style={{ textAlign: 'center', marginTop: '2rem' }}>No templates available.</p>
                ) : (
                    <div className="allTemplatesGrid">
                        {filtered.map(template => renderCard(template))}
                    </div>
                )}

                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#555', marginBottom: '2rem' }}>
                    More templates coming soon.
                </p>
            </section>
            <Footer />
            <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        </>
    );
}
