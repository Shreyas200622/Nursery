import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addItem, selectCartCount, selectIsInCart } from './CartSlice';
import '../App.css';

// ─── Plant Data (3 categories × 6+ plants) ───────────────────────────────────
const plantData = [
  // ── Category 1: Tropical Beauties ──────────────────────────────────────────
  {
    category: 'Tropical Beauties',
    categoryIcon: '🌴',
    plants: [
      {
        id: 'tb-1',
        name: 'Monstera Deliciosa',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
        description: 'Iconic split-leaf plant that thrives in bright indirect light. A statement piece for any room.',
      },
      {
        id: 'tb-2',
        name: 'Bird of Paradise',
        price: 44.99,
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c76ea7?w=400&q=80',
        description: 'Bold tropical foliage that brings dramatic style. Loves bright, sunny spots.',
      },
      {
        id: 'tb-3',
        name: 'Philodendron Brasil',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1606722590583-6951b67f3a3c?w=400&q=80',
        description: 'Vibrant heart-shaped leaves with lime green variegation. A trailing beauty.',
      },
      {
        id: 'tb-4',
        name: 'Banana Plant',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80',
        description: 'Lush, oversized leaves for a true tropical feel. Fast-growing and impressive.',
      },
      {
        id: 'tb-5',
        name: 'Calathea Orbifolia',
        price: 27.99,
        image: 'https://images.unsplash.com/photo-1599598425947-5202edd56fdb?w=400&q=80',
        description: 'Elegant round leaves with silver striping. Loves humid environments.',
      },
      {
        id: 'tb-6',
        name: 'Areca Palm',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=400&q=80',
        description: 'A graceful feathery palm that purifies the air. Perfect for bright interiors.',
      },
      {
        id: 'tb-7',
        name: 'Traveller\'s Palm',
        price: 52.99,
        image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400&q=80',
        description: 'Striking fan-like arrangement of giant leaves. A bold tropical statement.',
      },
    ],
  },
  // ── Category 2: Succulents & Cacti ─────────────────────────────────────────
  {
    category: 'Succulents & Cacti',
    categoryIcon: '🌵',
    plants: [
      {
        id: 'sc-1',
        name: 'Aloe Vera',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=400&q=80',
        description: 'The ultimate low-maintenance plant with soothing gel. A medicine cabinet in a pot.',
      },
      {
        id: 'sc-2',
        name: 'Echeveria Elegans',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=80',
        description: 'Rosette-forming succulent with powdery blue-green leaves. Effortlessly pretty.',
      },
      {
        id: 'sc-3',
        name: 'Golden Barrel Cactus',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
        description: 'Classic round cactus with golden spines. Drought-tolerant and architectural.',
      },
      {
        id: 'sc-4',
        name: 'Haworthia Fasciata',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1509587584298-0f3620e1cd68?w=400&q=80',
        description: 'Compact zebra-patterned succulent perfect for small spaces and desks.',
      },
      {
        id: 'sc-5',
        name: 'String of Pearls',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?w=400&q=80',
        description: 'Cascading strands of bead-like leaves. Stunning in hanging planters.',
      },
      {
        id: 'sc-6',
        name: 'Prickly Pear Cactus',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&q=80',
        description: 'Paddle-shaped pads with colorful seasonal fruits. Bold and graphic.',
      },
      {
        id: 'sc-7',
        name: 'Jade Plant',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=400&q=80',
        description: 'Thick, oval leaves on woody stems. A symbol of good luck and prosperity.',
      },
    ],
  },
  // ── Category 3: Air-Purifying Wonders ──────────────────────────────────────
  {
    category: 'Air-Purifying Wonders',
    categoryIcon: '💚',
    plants: [
      {
        id: 'ap-1',
        name: 'Peace Lily',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80',
        description: 'Elegant white blooms and glossy leaves. One of the best air purifiers around.',
      },
      {
        id: 'ap-2',
        name: 'Snake Plant',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
        description: 'Virtually indestructible with striking upright leaves. Perfect for beginners.',
      },
      {
        id: 'ap-3',
        name: 'Pothos Golden',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?w=400&q=80',
        description: 'Cascading green-gold leaves that thrive in almost any condition. Very forgiving.',
      },
      {
        id: 'ap-4',
        name: 'Spider Plant',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
        description: 'Cheerful arching leaves with baby offshoots. Excellent for removing toxins.',
      },
      {
        id: 'ap-5',
        name: 'ZZ Plant',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&q=80',
        description: 'Glossy, waxy leaves on graceful arching stems. Tolerates low light effortlessly.',
      },
      {
        id: 'ap-6',
        name: 'Boston Fern',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=400&q=80',
        description: 'Lush, feathery fronds that add a soft, cottage-garden vibe. Loves humidity.',
      },
      {
        id: 'ap-7',
        name: 'Rubber Plant',
        price: 31.99,
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80',
        description: 'Large, glossy burgundy leaves that make a dramatic statement in any room.',
      },
    ],
  },
];

// ─── Navbar Component ─────────────────────────────────────────────────────────
function Navbar() {
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();

  return (
    <nav className="navbar" id="main-navbar">
      <Link to="/" className="navbar-brand">
        <span className="leaf">🌿</span> Paradise Nursery
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/" id="nav-home">Home</Link>
        </li>
        <li>
          <Link to="/products" id="nav-plants">Plants</Link>
        </li>
        <li>
          <button
            id="nav-cart"
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

// ─── Plant Card Component ─────────────────────────────────────────────────────
function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const isInCart = useSelector(selectIsInCart(plant.id));

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="plant-card" id={`plant-card-${plant.id}`}>
      <div className="plant-card-img-wrap">
        <img
          src={plant.image}
          alt={plant.name}
          loading="lazy"
        />
      </div>
      <div className="plant-card-body">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">${plant.price.toFixed(2)}</span>
          <button
            id={`add-to-cart-${plant.id}`}
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            {isInCart ? '✓ Added' : '+ Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── ProductList Page ─────────────────────────────────────────────────────────
function ProductList() {
  return (
    <div className="product-page">
      <Navbar />

      <div className="product-hero">
        <h1>Our Plant Collection</h1>
        <p>Hand-picked houseplants to transform your space into a green paradise</p>
      </div>

      <div className="product-content">
        {plantData.map((category) => (
          <section
            key={category.category}
            className="category-section"
            id={`category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className="category-header">
              <span className="category-icon">{category.categoryIcon}</span>
              <h2 className="category-title">{category.category}</h2>
              <div className="category-divider" />
            </div>

            <div className="products-grid">
              {category.plants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
