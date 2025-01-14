import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MarketplacePage.css'; // We'll use this for styling

const MarketplacePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
        setItems(response.data); // Fetch and set items
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch items:', error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading message
  }

  if (items.length === 0) {
    return <p>No items available in the marketplace.</p>; // Show message if no items are found
  }

  return (
    <div className="marketplace">
      <h1>Welcome!</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for items..."
        // Optional: Implement search functionality later
      />
      <div className="items-grid">
        {items.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id} className="item-card">
            <img src={item.picture_url} alt={item.title} className="item-thumbnail" />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
