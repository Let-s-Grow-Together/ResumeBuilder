import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from "./Pages/HomePage"
import ResumePage from "./Pages/ResumePage"
import AllTemplatesPage from './Pages/TemplatePage'
import AuthModal from './Pages/AuthModal'
import AboutPage from './Pages/AboutPage'
import "./App.css"

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App() {
    const [authModalOpen, setAuthModalOpen] = useState(false);
    return (
        <>
            <Router>
                <ScrollToTop />
                <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
                <Routes>
                    <Route
                        path='/'
                        element={<HomePage onLoginClick={() => setAuthModalOpen(true)} />}
                    />
                    <Route
                        path='/resume/:templateId'
                        element={<ResumePage onLoginClick={() => setAuthModalOpen(true)} />}
                    />
                    <Route
                        path='/all-templates'
                        element={<AllTemplatesPage onLoginClick={() => setAuthModalOpen(true)} />}
                    />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/templates" element={<AllTemplatesPage />} />
                </Routes>
            </Router>
        </>
    )
}