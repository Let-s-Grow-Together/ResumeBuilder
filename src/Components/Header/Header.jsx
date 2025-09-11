import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../../supabaseClient";
import UserAvatar from '../UserAvatar';

export default function Header({ onLoginClick }) {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef();
    const toggleRef = useRef();
    const location = useLocation();

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
            <Link to="/" className="logo" onClick={handleNavClick} style={{ textDecoration: "none" }}>
             {/* <span className="logo-bg"></span> */}
                NextStepCV.
            </Link>

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
                    <Link
                        to="/"
                        onClick={handleNavClick}
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Home
                    </Link>
                    <Link
                        to="/templates"
                        onClick={handleNavClick}
                        className={location.pathname === "/templates" ? "active" : ""}
                    >
                        Templates
                    </Link>
                    <Link
                        to="/about"
                        onClick={handleNavClick}
                        className={location.pathname === "/about" ? "active" : ""}
                    >
                        About
                    </Link>
                    {user ? (
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <UserAvatar email={user.email} />
                            <button
                                onClick={async () => {
                                    await supabase.auth.signOut();
                                    setUser(null);
                                    setMenuOpen(false);
                                }}
                                className="logoutBtn"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="authButtons">
                            <button onClick={onLoginClick} className="loginBtn">Log In</button>
                            <button onClick={onLoginClick} className="signupBtn">Sign Up</button>
                        </div>
                    )}
                </nav>
                    {user ? (
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <UserAvatar email={user.email} />
                            <button
                                onClick={async () => {
                                    await supabase.auth.signOut();
                                    setUser(null);
                                    setMenuOpen(false);
                                }}
                                className="logoutBtn"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="authButtons">
                            {/* <button onClick={onLoginClick} className="loginBtn">Log In</button> */}
                            {/* <button onClick={onLoginClick} className="signupBtn">Sign Up</button> */}
                        </div>
                    )}
            </div>
        </header>
    );
}

