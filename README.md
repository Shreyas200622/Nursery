# Paradise Nursery Shopping Application

## Project Name
Paradise Nursery – Online Plant Shop

## Description
Paradise Nursery is a full-featured React-based e-commerce shopping cart application for an online plant shop. Users can browse a curated collection of houseplants organized by category, add items to their cart, manage quantities, and proceed to checkout.

## Features
- 🌿 Browse 18+ unique houseplants across 3 categories
- 🛒 Add to Cart with real-time cart count updates
- 🔢 Increase / Decrease item quantities in the cart
- 🗑️ Remove individual items from the cart
- 💰 Dynamic total cost calculation per item and overall
- 🔗 Shared Navbar across all pages (Home, Plants, Cart)
- ⚛️ State management via Redux Toolkit (CartSlice)

## Tech Stack
- React 18
- Redux Toolkit
- React Redux
- React Router DOM
- CSS3

## Project Structure
```
src/
  ├── App.jsx              # Landing page with Get Started button
  ├── App.css              # Global styles including background image
  ├── store.js             # Redux store configuration
  ├── components/
  │   ├── AboutUs.jsx      # About the company page
  │   ├── ProductList.jsx  # Plant catalog with categories
  │   ├── CartItem.jsx     # Shopping cart page
  │   └── CartSlice.jsx    # Redux slice for cart state
  └── index.js             # React entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm start
```

## Author
Built as the Coursera React Final Project – Paradise Nursery Shopping Application.
