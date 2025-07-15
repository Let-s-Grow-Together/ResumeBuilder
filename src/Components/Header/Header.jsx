import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../../supabaseClient";
import UserAvatar from '../UserAvatar';

export default function Header({ onLoginClick }) {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef();
    const toggleRef = useRef();

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        fetchUser();

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuOpen &&
                navRef.current &&
                !navRef.current.contains(event.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="headerr">
            <div className="logo">Heitech.</div>

            <button
                ref={toggleRef}
                className={`menuToggle ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div ref={navRef} className={`navWrapper ${menuOpen ? "open" : ""}`}>
                <nav className="navBar">
                    <a href="/" className="active" onClick={handleNavClick}>Home</a>
                    <a href="#solutions" onClick={handleNavClick}>About ▾</a>
                    <a href="#features" onClick={handleNavClick}>Features ▾</a>
                    <a href="#templates" onClick={handleNavClick}>Templates</a>

                    {user ? (
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <UserAvatar email={user.email} />
                            <button
                                onClick={async () => {
                                    await supabase.auth.signOut();
                                    setUser(null);
                                    setMenuOpen(false); // Close menu after logout
                                }}
                                className="logoutBtn"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                                                 <div onClick={onLoginClick} style={{cursor: 'pointer' }}>Log In</div>

                            <Link to="/auth" className="signup" onClick={handleNavClick}>Sign Up</Link>
                            {/* Optional fallback for old login handler */}
                            {/* <div onClick={onLoginClick} style={{cursor: 'pointer' }}>Log In</div> */}
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}