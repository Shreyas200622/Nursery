import { createSlice } from '@reduxjs/toolkit';

// ─── Initial State ────────────────────────────────────────────────────────────
const initialState = {
  items: [],        // Array of cart items { id, name, price, image, quantity, cost }
};

// ─── Cart Slice ───────────────────────────────────────────────────────────────
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * addItem: Add a plant to the cart.
     * If it already exists, increase quantity by 1.
     * If new, push with quantity 1.
     */
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.id === plant.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.cost = parseFloat((existingItem.quantity * existingItem.price).toFixed(2));
      } else {
        state.items.push({
          id: plant.id,
          name: plant.name,
          price: plant.price,
          image: plant.image,
          quantity: 1,
          cost: plant.price,
        });
      }
    },

    /**
     * removeItem: Remove a plant entirely from the cart by id.
     */
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    /**
     * updateQuantity: Set the quantity of a cart item.
     * If quantity drops to 0 or below, remove the item.
     */
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        } else {
          item.quantity = quantity;
          item.cost = parseFloat((quantity * item.price).toFixed(2));
        }
      }
    },
  },
});

// ─── Selectors ────────────────────────────────────────────────────────────────
/** Total number of items (sum of all quantities) */
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

/** Total cost across all items */
export const selectCartTotal = (state) =>
  parseFloat(
    state.cart.items.reduce((total, item) => total + item.cost, 0).toFixed(2)
  );

/** All cart items */
export const selectCartItems = (state) => state.cart.items;

/** Check if a specific plant id is already in the cart */
export const selectIsInCart = (id) => (state) =>
  state.cart.items.some((item) => item.id === id);

// ─── Exports ──────────────────────────────────────────────────────────────────
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
