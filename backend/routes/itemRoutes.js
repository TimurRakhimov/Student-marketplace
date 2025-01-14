const express = require('express');
const router = express.Router();

// Mock items data
const items = [
  {
    id: 1,
    title: 'Laptop',
    description: 'A powerful laptop',
    price: 1000,
    picture_url: 'https://b2c-contenthub.com/wp-content/uploads/2024/08/Framework-Laptop-13-Core-Ultra-1-open.jpg?quality=50&strip=all',
  },
  {
    id: 2,
    title: 'Desk',
    description: 'A wooden desk',
    price: 200,
    picture_url: 'https://i.etsystatic.com/25037601/r/il/d87771/2934446264/il_570xN.2934446264_9s79.jpg',
  },
  {
    id: 3,
    title: 'Chair',
    description: 'An ergonomic chair',
    price: 150,
    picture_url: 'https://obrary.com/cdn/shop/products/Fig3_400x.jpg?v=1615348801',
  },
];

// GET /api/items
router.get('/items', (req, res) => {
  res.json(items);
});

// GET /api/items/:id
router.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items.find((i) => i.id === itemId);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});

module.exports = router;
