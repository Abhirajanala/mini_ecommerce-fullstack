const express = require('express');
const router = express.Router();

// In-memory cart (in real app, use database)
let cart = [];

// Get cart items
router.get('/', (req, res) => {
  res.json(cart);
});

// Add to cart
router.post('/', (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    
    // In real app, validate product exists in database
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += parseInt(quantity);
    } else {
      cart.push({
        productId,
        quantity: parseInt(quantity),
        addedAt: new Date().toISOString()
      });
    }
    
    res.status(201).json({ 
      message: 'Product added to cart', 
      cart 
    });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Update cart item
router.put('/:productId', (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;
    
    const item = cart.find(item => item.productId === productId);
    
    if (!item) {
      return res.status(404).json({ error: 'Item not found in cart' });
    }
    
    if (quantity <= 0) {
      cart = cart.filter(item => item.productId !== productId);
    } else {
      item.quantity = parseInt(quantity);
    }
    
    res.json({ message: 'Cart updated', cart });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Remove from cart
router.delete('/:productId', (req, res) => {
  const { productId } = req.params;
  
  cart = cart.filter(item => item.productId !== productId);
  
  res.json({ message: 'Item removed from cart', cart });
});

// Clear cart
router.delete('/', (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared' });
});

module.exports = router;