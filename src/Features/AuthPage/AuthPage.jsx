import { useState } from "react";
import { supabase } from "../../supabaseClient";
import ProfilePage from "../../Pages/Profilepage";

export default function AuthPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = async (e) => {
        e.preventDefault();
        if (isLogin) {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) alert(error.message);
            else alert("Logged in!");
        } else {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) alert(error.message);
            else alert("Check your email for confirmation.");
        }
    };

    return (
        <div style={{ padding: "2rem", maxWidth: 400, margin: "auto" }}>
            <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
            <form onSubmit={handleAuth}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /><br />
                <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
            </form>
            <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer", marginTop: "1rem", color: "blue" }}>
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
            </p>
        </div>
    );
}