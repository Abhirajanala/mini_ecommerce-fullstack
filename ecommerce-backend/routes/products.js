const express = require('express');
const db = require('../config/database');
const router = express.Router();

// Get all products with filtering (using query instead of execute)
router.get('/', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 12 } = req.query;
    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    if (search) {
      query += ' AND name LIKE ?';
      params.push(`%${search}%`);
    }

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const offset = (pageNum - 1) * limitNum;

    query += ' LIMIT ? OFFSET ?';
    params.push(limitNum, offset);

    console.log('Executing query:', query);
    console.log('With parameters:', params);

    // Use query() instead of execute() for better parameter handling
    const [products] = await db.query(query, params);
    
    res.json({
      products,
      page: pageNum,
      limit: limitNum,
      hasMore: products.length === limitNum
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get single product by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const productId = parseInt(id);
    
    const [products] = await db.query(
      'SELECT * FROM products WHERE id = ?', 
      [productId]
    );

    if (products.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(products[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Get categories
router.get('/categories/all', async (req, res) => {
  try {
    const [categories] = await db.query(
      'SELECT DISTINCT category FROM products ORDER BY category'
    );
    
    res.json(categories.map(cat => cat.category));
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

module.exports = router;