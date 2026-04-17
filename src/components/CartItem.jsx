import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartTotal,
  selectCartCount,
} from './CartSlice';
import '../App.css';

// ─── Shared Navbar (same as ProductList) ─────────────────────────────────────
function Navbar() {
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();

  return (
    <nav className="navbar" id="cart-navbar">
      <Link to="/" className="navbar-brand">
        <span className="leaf">🌿</span> Paradise Nursery
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/" id="cart-nav-home">Home</Link>
        </li>
        <li>
          <Link to="/products" id="cart-nav-plants">Plants</Link>
        </li>
        <li>
          <button
            id="cart-nav-cart"
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

// ─── Coming Soon Modal ────────────────────────────────────────────────────────
function ComingSoonModal({ onClose }) {
  return (
    <div className="modal-overlay" id="checkout-modal" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <span className="modal-icon">🚀</span>
        <h2>Coming Soon!</h2>
        <p>
          Our secure checkout experience is currently under development.
          We'll notify you as soon as it's ready!
        </p>
        <button id="modal-close-btn" className="modal-close" onClick={onClose}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

// ─── CartItem Page ────────────────────────────────────────────────────────────
function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);
  const [showModal, setShowModal] = useState(false);

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-hero">
        <h1>🛒 Your Shopping Cart</h1>
      </div>

      <div className="cart-content">
        {/* ── Empty State ────────────────────────────── */}
        {cartItems.length === 0 ? (
          <div className="cart-empty" id="cart-empty-state">
            <span className="empty-icon">🌿</span>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any plants yet. Let's fix that!</p>
            <button
              id="cart-continue-shopping-empty"
              className="btn-primary"
              onClick={handleContinueShopping}
            >
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {/* ── Cart Items ─────────────────────────── */}
            <div className="cart-items-list" id="cart-items-list">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item-card"
                  id={`cart-item-${item.id}`}
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />

                  {/* Info */}
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">
                      Unit price: <strong>${item.price.toFixed(2)}</strong>
                    </p>
                    {/* Quantity Controls */}
                    <div className="cart-item-controls">
                      <button
                        id={`decrease-qty-${item.id}`}
                        className="qty-btn"
                        onClick={() => handleDecrease(item)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>
                      <span className="qty-count" id={`qty-display-${item.id}`}>
                        {item.quantity}
                      </span>
                      <button
                        id={`increase-qty-${item.id}`}
                        className="qty-btn"
                        onClick={() => handleIncrease(item)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Right: Total cost + Delete */}
                  <div className="cart-item-right">
                    <span
                      className="cart-item-total-price"
                      id={`item-total-${item.id}`}
                    >
                      ${item.cost.toFixed(2)}
                    </span>
                    <button
                      id={`delete-item-${item.id}`}
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Cart Summary ───────────────────────── */}
            <div className="cart-summary" id="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items ({cartCount})</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span>{cartTotal >= 50 ? '🚚 Free' : '$5.99'}</span>
              </div>
              {cartTotal < 50 && (
                <div className="summary-row" style={{ color: '#52b788', fontSize: '0.8rem' }}>
                  <span>Add ${(50 - cartTotal).toFixed(2)} more for free delivery!</span>
                </div>
              )}

              <div className="summary-row total">
                <span>Total</span>
                <span id="cart-grand-total">
                  ${(cartTotal + (cartTotal >= 50 ? 0 : 5.99)).toFixed(2)}
                </span>
              </div>

              <div className="cart-actions">
                <button
                  id="checkout-btn"
                  className="btn-checkout"
                  onClick={handleCheckout}
                >
                  💳 Checkout
                </button>
                <button
                  id="continue-shopping-btn"
                  className="btn-continue"
                  onClick={handleContinueShopping}
                >
                  ← Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── Coming Soon Modal ──────────────────────── */}
      {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default CartItem;
