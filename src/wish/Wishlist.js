//Wishlist.js
import React from 'react';
import Card from '../home/Card';

export default function Wishlist({ wishlistItems, addToCart, removeFromWishlist }) {
  return (
    <div className="container">
      <h1>My Favourites</h1>
      <div className="row">
        {wishlistItems.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Card
              title={item.title}
              image={item.image}
              price={item.price}
              buttonText="Add to Cart"
              addToCart={() => addToCart(item)}
              showAddToWishlistButton={false} // Hide the button on the Wishlist page
            />
            <button class="btn btn-danger"onClick={() => removeFromWishlist(item)}>Remove</button>
          </div>
        ))}
      </div>
 
    </div>
  );
}
