import { useEffect, useRef, useState } from 'react';
import "./ReviewSection.css"

export default function ReviewSection() {
  const [allReviews, setAllReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const reviewIndex = useRef(0);
  const intervalRef = useRef(null); // to clear interval on re-render

  const generateId = () => Date.now().toString() + Math.floor(Math.random() * 1000);

  // Fetch all reviews
  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data.reviews && data.reviews.length > 0) {
          setAllReviews(data.reviews);
          setVisibleReviews([]); // start empty
          reviewIndex.current = 0;
        }
      });
  }, []);

  // Auto add one-by-one after reviews loaded
  useEffect(() => {
    if (allReviews.length === 0) return;

    intervalRef.current = setInterval(() => {
      const next = allReviews[reviewIndex.current];
      if (next && next.name && next.text) {
        setVisibleReviews((prev) => [next, ...prev]);
      }
      reviewIndex.current += 1;

      if (reviewIndex.current >= allReviews.length) {
        clearInterval(intervalRef.current); // stop after all added
      }
    }, 7000);

    return () => clearInterval(intervalRef.current);
  }, [allReviews]);

  // Add new review manually
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || !name.trim()) return;

    const newReview = {
      id: generateId(),
      name,
      text: input,
    };

    await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(newReview),
    });

    setVisibleReviews((prev) => [newReview, ...prev]);
    setAllReviews((prev) => [newReview, ...prev]);
    setInput('');
    setName('');
  };

  return (
    <div className='review-container'>
      <h2>People's Reviews</h2>

      <div
        className='reviews'
      >
        {visibleReviews.length === 0 && (
          <p style={{ textAlign: 'center' }}>Loading reviews...</p>
        )}
        <div className='review-list'>
          {visibleReviews.map((rev, index) => {
            if (!rev || !rev.name || !rev.text) return null;
            return (
              <div
                key={rev.id || index}
                className='review-listItem'
              >
                <strong>{rev.name}</strong>
                <p>{rev.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your review..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className='submitBtn'>Submit Review</button>
      </form>
    </div>
  );
}
