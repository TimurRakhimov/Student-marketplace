import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ItemDetailsPage.css';

const ItemDetailsPage = () => {
  const { id } = useParams(); // Get item ID from the URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/items/${id}`);
        setItem(response.data); // Set the fetched item
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch item:', error);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>Item not found.</p>;
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <div className="image-section">
          <img src={item.picture_url} alt={item.title} className="item-image" />
        </div>
        <div className="info-section">
          <h1 className="item-title">{item.title}</h1>
          <p className="item-price">Price: ${item.price}</p>
          <p className="item-description">{item.description}</p>
          <div className="action-buttons">
            <button className="action-button">Buy Now</button>
            <button className="action-button secondary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
