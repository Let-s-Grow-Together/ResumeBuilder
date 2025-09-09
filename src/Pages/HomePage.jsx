import { useState } from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import TemplateSection from "../Components/TemplateSection";
import AuthModal from "./AuthModal";

export default function HomePage({ onLoginClick }) {
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
