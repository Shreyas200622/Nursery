import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartCount } from './CartSlice';
import '../App.css';

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();

  return (
    <nav className="navbar" id="about-navbar">
      <Link to="/" className="navbar-brand">
        <span className="leaf">🌿</span> Paradise Nursery
      </Link>
      <ul className="navbar-links">
        <li><Link to="/" id="about-nav-home">Home</Link></li>
        <li><Link to="/products" id="about-nav-plants">Plants</Link></li>
        <li>
          <button
            id="about-nav-cart"
            className="cart-icon-btn"
            onClick={() => navigate('/cart')}
          >
            🛒 Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

// ─── AboutUs Page ─────────────────────────────────────────────────────────────
function AboutUs() {
  return (
    <div className="about-page">
      <Navbar />

      {/* ── Hero ─────────────────────────────────── */}
      <div className="about-hero">
        <h1>About Paradise Nursery</h1>
        <p>
          We believe every home deserves a touch of nature. Founded with a passion
          for plants and people, we've been bringing greenery into lives since 2018.
        </p>
      </div>

      <div className="about-content">
        {/* ── Our Story ────────────────────────────── */}
        <div className="about-grid" id="our-story">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Paradise Nursery began in a small greenhouse in Austin, Texas, where
              founder Maya Chen discovered her love for tropical plants during a
              difficult time in her life. She realized that caring for plants brought
              a sense of calm, purpose, and joy — and she wanted to share that with
              everyone.
            </p>
            <p>
              What started as a weekend farmers market stall has grown into a
              thriving online nursery that ships to all 50 states. We carefully
              select, grow, and pack each plant by hand, ensuring it arrives at
              your door healthy, vibrant, and ready to thrive.
            </p>
            <p>
              Today, our team of 12 passionate horticulturists curates over 200
              plant varieties, from beginner-friendly succulents to rare tropicals,
              all backed by our dedicated care support team.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
            alt="Lush greenhouse filled with tropical plants"
            className="about-img"
          />
        </div>

        {/* ── Our Values ───────────────────────────── */}
        <section id="our-values">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#1a3a2a', marginBottom: '0.5rem' }}>
            Our Values
          </h2>
          <p style={{ color: '#777', marginBottom: '1.5rem' }}>
            Everything we do is guided by these core principles.
          </p>
          <div className="values-grid">
            <div className="value-card" id="value-sustainability">
              <span className="value-icon">🌍</span>
              <h3>Sustainability</h3>
              <p>
                We use eco-friendly packaging and source from growers who
                prioritize ethical, sustainable farming practices.
              </p>
            </div>
            <div className="value-card" id="value-quality">
              <span className="value-icon">⭐</span>
              <h3>Quality First</h3>
              <p>
                Every plant is personally inspected before shipping. We
                guarantee healthy arrivals or we'll replace it, free.
              </p>
            </div>
            <div className="value-card" id="value-community">
              <span className="value-icon">🤝</span>
              <h3>Community</h3>
              <p>
                We run free plant care workshops and donate 2% of profits
                to urban greening initiatives across the US.
              </p>
            </div>
            <div className="value-card" id="value-expertise">
              <span className="value-icon">🔬</span>
              <h3>Expert Knowledge</h3>
              <p>
                Our team includes trained horticulturists and botanists who
                provide personalised plant care advice, free of charge.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ color: '#777', marginBottom: '1rem', fontSize: '1.05rem' }}>
            Ready to start your plant journey?
          </p>
          <Link to="/products">
            <button id="about-shop-btn" className="btn-primary" style={{ padding: '1rem 3rem' }}>
              🌱 Shop Plants
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
