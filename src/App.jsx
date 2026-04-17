import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

// ─── Landing Page Component ───────────────────────────────────────────────────
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <span className="landing-badge">🌿 Premium Online Plant Shop</span>

        <h1 className="landing-title">
          Paradise<br />
          <span>Nursery</span>
        </h1>

        <p className="landing-subtitle">
          Bring nature indoors. Discover our curated collection of beautiful
          houseplants, hand-picked by expert horticulturists for your home.
        </p>

        <div className="landing-actions">
          <button
            id="get-started-btn"
            className="btn-primary"
            onClick={() => navigate('/products')}
          >
            🌱 Get Started
          </button>
          <button
            id="about-us-btn"
            className="btn-secondary"
            onClick={() => navigate('/about')}
          >
            About Us
          </button>
        </div>

        <div className="landing-features">
          <div className="feature-pill">
            <span>🚚</span>
            <span>Free Delivery over $50</span>
          </div>
          <div className="feature-pill">
            <span>🌿</span>
            <span>18+ Plant Varieties</span>
          </div>
          <div className="feature-pill">
            <span>💚</span>
            <span>Expert Care Guides</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"          element={<LandingPage />} />
        <Route path="/products"  element={<ProductList />} />
        <Route path="/cart"      element={<CartItem />} />
        <Route path="/about"     element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
