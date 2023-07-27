//Card.js

import React from 'react';

const Card = ({ title, image, price, buttonText, addToCart, showAddToWishlistButton,addToWishlist }) => {
  return (
    <div className="card">
      <div className="card" ></div>
      <img src={image} className="card-img-top" alt={title}  />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <button className="btn btn-success" onClick={() => addToCart({ title, image, price })}>
          {buttonText}
        </button>
        {showAddToWishlistButton && (
          <button className="btn btn-danger" onClick={() => addToWishlist({ title, image, price })}>
            <i className="bi bi-heart-fill"></i> Add to Wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
