//home.js
import React from 'react';
import Card from './Card';
import { } from "react-router-dom";
import './home.css';

export default function Home({ cardsData, addToCart, addToWishlist,cartItems }) {
  
  return (
    <div className="container">
      <h1>You gotta try them out !</h1>
      
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-md-4" key={index}>
            <Card
              title={card.title}
              image={card.image}
              price={card.price}
              buttonText={card.buttonText}
              addToCart={() => addToCart({ title: card.title, image: card.image, price: card.price })}
              addToWishlist={() => addToWishlist({ title: card.title, image: card.image, price: card.price })}
              showAddToWishlistButton={true} // Show the button on the Home page
            />
          </div>
        ))}
      </div>

    </div>
  );
}
