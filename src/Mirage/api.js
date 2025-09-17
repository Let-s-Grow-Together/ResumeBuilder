// api.js
const API_BASE = "http://localhost:5000/api/reviews";

// 🔸 Get all reviews
export async function getReviews() {
    const res = await fetch(API_BASE);
    return res.json();
}

// 🔸 Create review
export async function addReview({ user_id, name, text }) {
    const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, name, text }),
    });
    return res.json();
}

// 🔸 Update review
export async function updateReview({ id, user_id, text }) {
    const res = await fetch(`${API_BASE}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, text }),
    });
    return res.json();
}

// 🔸 Delete review
export async function deleteReview({ id, user_id }) {
    const res = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id }),
    });
    return res.json();
}
