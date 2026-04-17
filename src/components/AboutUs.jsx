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

      {/* Required wrapper div with className="about-us-container" */}
      <div className="about-us-container">

        {/* ── Intro: Company Overview & Mission ────── */}
        <div className="about-hero">
          <h1>About Paradise Nursery</h1>
          <p>
            Welcome to Paradise Nursery – your trusted online destination for
            beautiful, healthy houseplants. We are passionate about connecting
            people with nature and making it easy to bring greenery into every home.
          </p>
        </div>

        <div className="about-content">

          {/* ── Company Introduction ─────────────────── */}
          <div className="about-grid" id="our-story">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Paradise Nursery is a premium online plant shop founded in 2018,
                dedicated to providing high-quality houseplants directly to your
                doorstep. We believe that every home deserves a touch of nature,
                and our mission is to make plant ownership accessible, affordable,
                and enjoyable for everyone.
              </p>
              <p>
                Our company was born out of a love for plants and a desire to share
                that passion with the world. Starting as a small local greenhouse
                in Austin, Texas, we have grown into a nationwide online nursery
                serving thousands of happy customers across all 50 states.
              </p>
              <p>
                At Paradise Nursery, we carefully select, grow, and pack each plant
                by hand, ensuring it arrives at your door healthy, vibrant, and
                ready to thrive. Our team of expert horticulturists curates over
                200 plant varieties — from beginner-friendly succulents to rare
                tropicals — all backed by our dedicated plant care support team.
              </p>

              <h2 style={{ marginTop: '1.5rem' }}>Our Mission</h2>
              <p>
                Our mission is simple: to help people create greener, happier
                living spaces. We provide premium houseplants, expert care guides,
                and outstanding customer service to ensure every plant parent
                succeeds. We are committed to sustainability, sourcing our plants
                from ethical growers and using eco-friendly packaging for every order.
              </p>

              <h2 style={{ marginTop: '1.5rem' }}>Our Services</h2>
              <p>
                We offer a wide range of services to support your plant journey:
                a curated online shop with 200+ plant varieties, free care guides
                for every plant, a live chat support team of horticulture experts,
                same-week shipping with a healthy arrival guarantee, and free
                plant care workshops for our community members.
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
      </div>{/* end .about-us-container */}
    </div>
  );
}

export default AboutUs;
