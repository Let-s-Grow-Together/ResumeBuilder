import React, { useEffect, useState } from "react";

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newReview, setNewReview] = useState("");
  const [newName, setNewName] = useState("");

  // Fetch reviews from localStorage or MirageJS
  useEffect(() => {
    const stored = localStorage.getItem("reviews");
    if (stored) {
      setReviews(JSON.parse(stored));
    } else {
      fetch("/api/reviews")
        .then((res) => res.json())
        .then((data) => {
          const loadedReviews = Array.isArray(data) ? data : data.reviews;
          setReviews(loadedReviews);
          localStorage.setItem("reviews", JSON.stringify(loadedReviews));
        })
        .catch((err) => console.error("Error fetching reviews:", err));
    }
  }, []);

  // Auto change review every 7 seconds
  useEffect(() => {
    if (reviews.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [reviews]);

  // Save to localStorage whenever reviews change
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleAddReview = () => {
    if (!newName.trim()) {
      alert("Name cannot be empty.");
      return;
    }
    if (!newReview.trim()) {
      alert("Review cannot be empty.");
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      name: newName.trim(),
      text: newReview.trim(),
    };

    const updated = [...reviews, newEntry];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));

    // Save to Mirage backend
    fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry),
    }).catch((err) => console.error("Error saving review:", err));

    setNewName("");
    setNewReview("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center", padding: "20px" }}>
      <h2>What People Say</h2>

      {/* Current Review */}
      {reviews.length > 0 && (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            margin: "20px 0",
            background: "#f9f9f9",
          }}
        >
          <p style={{ fontSize: "1.1rem", margin: 0 }}>{reviews[currentIndex].text}</p>
          <small>- {reviews[currentIndex].name}</small>
        </div>
      )}

      {/* Add Review */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Your name"
          style={{ width: "100%", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}
        />
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
          rows="3"
          style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
        />
        <button
          onClick={handleAddReview}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Review
        </button>
      </div>
    </div>
  );
}
