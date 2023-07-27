// BuyNowButton.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
const BuyNowButton = ({ onClick }) => {
  return (
    <div>
      <button  class="btn btn-danger" onClick={onClick}>Buy Now</button>
    </div>
  );
};

export default BuyNowButton;
