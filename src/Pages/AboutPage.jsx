
import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AuthModal from "./AuthModal";
import "./AboutPage.css";
import ReviewSection from "../Components/Review/ReviewSection";

export default function AboutPage() {
  const [reviews, setReviews] = useState([]);
  const [authOpen, setAuthOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", text: "" });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("heitech-reviews")) || [];
    setReviews(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...reviews, formData];
    setReviews(updated);
    localStorage.setItem("heitech-reviews", JSON.stringify(updated));
    setFormData({ name: "", text: "" });
  };

  return (
    <>
      <Header onLoginClick={() => setAuthOpen(true)} />

      <main className="about-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>About Heitech Resume Builder</h1>
            <p>We help you land your dream job with a resume that reflects <em>your uniqueness</em>.</p>
          </div>
        </section>

        <section className="glass-card why-section">
          <h2>Why We Built This</h2>
          <p>
            Resumes should be personal, powerful, and beautifully simple.
            You focus on your story — we make it look great.
          </p>
        </section>

        <section className="features-grid">
          {[
            { icon: "💡", title: "Live Editing", desc: "Instant preview as you type." },
            { icon: "🎨", title: "Modern Templates", desc: "Clean layouts to stand out." },
            { icon: "🛠️", title: "Formatting Tools", desc: "Style your resume easily." },
            { icon: "📤", title: "One-click PDF", desc: "Download high-quality PDF instantly." }
          ].map((f) => (
            <div key={f.title} className="feature-card glass-card">
              <h3>{f.icon} {f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </section>

        {/* <section className="glass-card creator-section">
          <h2>Built With Passion</h2>
          <div className="creator-row">
            <div className="creator-photo-placeholder" />
            <p>Hi, I'm Kritika 👋 I created Heitech to help you land your dream job with confidence and style.</p>
          </div>
        </section> */}

          <ReviewSection />
        <section className="glass-card reviews-section">
          <h2>User Love</h2>
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to share!</p>
          ) : (
            <ul>
              {reviews.map((r, i) => (
                <li key={i}><strong>{r.name}</strong>: "{r.text}"</li>
              ))}
            </ul>
          )}
        </section>

        <section className="glass-card review-form-section">
          <h2>Share Your Experience</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text" name="name" placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <textarea
              name="text" placeholder="What did you love about Heitech?"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              required
            ></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </section>

       
      </main>

      <Footer />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
