import React from 'react';
import './PopupOverlay.css';

const PopupOverlay = ({ children, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopupOverlay;
