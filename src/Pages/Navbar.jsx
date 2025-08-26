
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "../App.css"

export default function Navbar({ onDownload, onLoginClick }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const getInitials = (email) => {
    if (!email) return "U";
    const name = email.split("@")[0];
    return name
      .split(/[._\s]/)
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        background: "linear-gradient(to right, #d3bae7, #fdda7c)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: "0",
        zIndex: "999",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          NextStepCV.
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button
          className="btnPrimary"
          onClick={() => {
            if (user) {
              onDownload();
            } else {
              onLoginClick();
            }
          }}
          style={{
            background: "linear-gradient(to right, #c6a9e3, #1a1a1a)",
            color: "white",
            padding: "0.5rem 1.2rem",
            fontWeight: "600",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Download
        </button>

        {user ? (
          <div
            title={user.email}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#444",
              color: "#fff",
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
            }}
          >
            {getInitials(user.email)}
          </div>
        ) : (
          <button
            className="nav-loginBtn"
            onClick={() => {
              console.log("Login Clicked");
              onLoginClick();
            }}
            style={{

            }}
          >
            Log In

          </button>
        )}
      </div>
    </header>
  );
}
