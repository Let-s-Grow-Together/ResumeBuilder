import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import TemplateSection from "../Components/TemplateSection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

export default function HomePage({ onLoginClick }) {
    const navigate = useNavigate();
    const [authOpen, setAuthOpen] = useState(false);


    return (
        <>
            <Header onLoginClick={() => setAuthOpen(true)} />
            <Hero />
            <TemplateSection />
            <Footer />
            <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        </>
    );
}
