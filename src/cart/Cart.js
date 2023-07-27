//cart.js
import BuyNowButton from './BuyNowButton';
import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import Signup from '../signup/Signup';
import "./cart.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = ({ cartItems, removeFromCart }) => {
  const [orderTotal, setOrderTotal] = useState(0);
  const [isGuest, setIsGuest] = useState(true);
  const [isRegistered, setIsRegistered] = useState(true);
  const [uniqueCartItems, setUniqueCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Calculate the unique cart items and set the initial order total
    const uniqueItems = cartItems.reduce((acc, item) => {
      const existingItem = acc.find((cartItem) => cartItem.title === item.title);

      if (!existingItem) {
        acc.push({ ...item, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }

      return acc;
    }, []);
    setUniqueCartItems(uniqueItems);

    const totalPrice = uniqueItems.reduce(
      (acc, item) => acc + parseFloat(item.price.replace(/[₹,$]/g, "")) * item.quantity,
      0
    );
    setOrderTotal(totalPrice);
  }, [cartItems]);

  const handleIncrement = (item) => {
    const updatedCartItems = uniqueCartItems.map((cartItem) =>
      cartItem.title === item.title
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setUniqueCartItems(updatedCartItems);
    const totalPrice = updatedCartItems.reduce(
      (acc, item) => acc + parseFloat(item.price.replace(/[₹,$]/g, "")) * item.quantity,
      0
    );
    setOrderTotal(totalPrice);
  };

  const handleDecrement = (item) => {
    const updatedCartItems = uniqueCartItems.map((cartItem) =>
      cartItem.title === item.title
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setUniqueCartItems(updatedCartItems.filter((item) => item.quantity > 0));
    const totalPrice = updatedCartItems.reduce(
      (acc, item) => acc + parseFloat(item.price.replace(/[₹,$]/g, "")) * item.quantity,
      0
    );
    setOrderTotal(totalPrice);
  };

  useEffect(() => {
    // Fetch the data from local storage on component mount
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setIsGuest(userData.isGuest);
      setIsRegistered(userData.isRegistered);
    }
  }, []);

  const handleBuyNow = () => {
    if (isRegistered === true) {
      // Redirect to checkout page for registered users
      console.log("Redirecting to checkout page for registered user...");
      navigate("/checkout"); // Redirect to the checkout page
    } else if (isRegistered === false) {
      // Show alert message for guest users
      alert("You are signed up as a guest. Please register as a registered user to proceed to checkout.");
    } else {
      alert("please register before proceeding to checkout");
    }
  };

  return (
    <div>
      <h1>Shopping Bag</h1>
      {uniqueCartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {uniqueCartItems.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.title} style={{ height: "200px" }} />
              <p>{item.title}</p>
              <p>Price: {item.price}</p>
             <p> Quantity: {item.quantity}<br>
                
                </br></p>
              <p className="qty">

                <button class= "btn btn-warning"onClick={() => handleIncrement(item)}>+</button>
                </p>
                <div className="minus">
                <button class="btn btn-warning"onClick={() => handleDecrement(item)}>-</button>
                </div>
               <div className="bt">
                <button class="btn btn-danger" onClick={() => removeFromCart(item.title)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <p>Total Price: ₹{orderTotal.toFixed(2)}</p>
          <div className="buy">
            <button class="btn btn-success" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
