

import { useState } from "react";
import { supabase } from "../../src/supabaseClient"

import "./AuthModal.css";

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        alert(error.message);
      } else {
        alert("Logged in successfully!");
        onClose();
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        alert(error.message);
      } else {
        alert("Sign-up successful! Check your email for confirmation.");
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="auth-modal-overlay" onClick={handleOverlayClick}>
      <div className={`auth-modal ${isLogin ? "" : "sign-up-mode"}`} onClick={handleModalClick}>
        <div className="auth-modal-left">
          <h2>{isLogin ? "Welcome Back!" : "Hello, Friend!"}</h2>
          <p>
            {isLogin
              ? "To keep connected with us please login with your personal info"
              : "Enter your personal details and start your journey with us"}
          </p>
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </div>

        <div className="auth-modal-right">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
          <form onSubmit={handleAuth}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit" className="submit-btn">
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}





