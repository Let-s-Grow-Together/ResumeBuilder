
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import "./App.css"
import HomePage from "./Pages/HomePage"
import ResumePage from "./Pages/ResumePage"
import AuthPage from './Features/AuthPage/AuthPage'
import { useEffect, useState } from 'react'
import AllTemplatesPage from './Pages/TemplatePage'
import AuthModal from './Pages/AuthModal'
import AboutPage from './Pages/AboutPage'
import { supabase } from './supabaseClient'

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App() {
    const [authModalOpen, setAuthModalOpen] = useState(false);
     const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      }
    };
    getUser();

    // Listen for login/logout changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
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

                    <Route path='/auth' element={<AuthPage />} />
                    <Route path="/about" element={<AboutPage />} />
                     <Route path="/templates" element={<AllTemplatesPage />} /> 

                    

                </Routes>
            </Router>
        </>
    )
}