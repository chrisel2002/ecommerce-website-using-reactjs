import React, { useState } from "react";
import { } from 'react-router-dom';
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    deliveryLocation: "",
    pincode:"",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Place order logic here
    alert("Thank you for ordering!");
    alert("continue shopping:)");
    redirectToHomePage();
  };
  const redirectToHomePage = () => {
    // Replace '/home' with the actual URL of your home page
    window.location.href = '/home';
  }; 
return (
  <div className="checkout-container">
    <div className="checkout-form">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Delivery Location:</label>
          <input
            type="text"
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={handleChange}
            required
            className="big-textbox" // Add the big-textbox class for larger input
          />
        </div>
        <div>
          <label>Pin code:</label>
          <input
            type=""
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Place Order</button>
         
        </div>
      </form>
    </div>
  </div>
);
};

export default Checkout;
