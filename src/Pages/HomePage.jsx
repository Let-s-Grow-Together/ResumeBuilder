import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import TemplateSection from "../Components/TemplateSection";
import { useState } from "react";
import { templates } from "../data/templates";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

export default function HomePage({onLoginClick}) {
  const navigate = useNavigate();
  const [authOpen, setAuthOpen] = useState(false);

  const handleSelectTemplate = (templateId) => {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      navigate(`/resume/${template.id}`);
    }
  };

  return (
    <>
      <Header onLoginClick={() => setAuthOpen(true)} />
      <Hero />
      <TemplateSection templates={templates} />
      <Footer />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
