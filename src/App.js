//App.js
import Navbar from "./home/Navbar";
import Cart from "./cart/Cart";
import Home from "./home/home";
import React,{useState} from "react";
import {Route, Routes} from "react-router-dom";
import Wishlist from "./wish/Wishlist";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import Signup from "./signup/Signup";
import SignupSuccess from "./signup/SignupSuccess";
import Checkout from "./checkout/Checkout"

function App() {
 
  const cardsData = [
//1
    {
      title: "TODDLERS' BAYABAND CLOG",
      image: '/pics/onee.jpg',
      price: '₹1,747',
      buttonText: 'Add to Cart',
    },
  //2
    {
      title: 'BAYABAND CLOG',
      image: '/pics/two.jpg',
      price: '₹3,057',
      buttonText: 'Add to Cart',
    },
  //3
    {
      title: 'LITERIDE™ 360 CLOG',
      image: '/pics/three.jpg',
      price:'₹5,995',
      buttonText: 'Add to Cart',
    },
  //4
    {
      title: "WOMEN'S CLASSIC CLOG",
      image: '/pics/four.jpg',
      price: '₹4,495',
      buttonText: 'Add to Cart',
    },
  //5
    {
      title: "Crocs Clogs Classic Marbled Clog",
      image: '/pics/fivee.jpg',
      price:'₹2,000',
      buttonText: 'Add to Cart',
    },
  //6
    {
      title: 'Crocs LiteRide 360 Jade Stone',
      image: '/pics/six.jpg',
      price: '₹3,896.00',
      buttonText: 'Add to Cart',
    },
  //7
    {
      title: "TODDLERS' CROCBAND™ CLOG",
      image: '/pics/rred.jpg',
      price: '₹2,097',
      buttonText: 'Add to Cart',
    },
   
  //8  
    {
      title: 'CLASSIC CLOG',
      image: '/pics/PK.jpg',
      price:'₹5,995',
      buttonText: 'Add to Cart',
    },
  //9
    {
      title: 'MUSHTY CLOG',
      image: '/pics/bg.jpg',
      price: '₹3,000',
      buttonText: 'Add to Cart',
    },
    
    // Add more card data objects as needed
  ];
 
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [name, setName] = useState("");



  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const addToWishlist = (item) => {
    setWishlistItems((prevWishlistItems) => [...prevWishlistItems, item]);
  };

  const removeFromCart = (title) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.title !== title));
  };
  const removeFromWishlist = (item) => {
    setWishlistItems((prevWishlistItems) => prevWishlistItems.filter((wishlistItem) => wishlistItem.title !== item.title));
  };

  const handleRegister = (formData) => {
    setIsRegistered(true);
    setName(formData.name);
  };
 

  return (
    <>
      <Navbar />
      <div className="container">
          
        <Routes>
       
        <Route path="/" element={isRegistered ? <SignupSuccess name={name} /> : <Signup onRegister={handleRegister} /> } />
        
      
          <Route path="/home" element={<Home cardsData={cardsData} addToCart={addToCart} addToWishlist={addToWishlist} />} />
          
          <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} addToCart={addToCart} removeFromWishlist={removeFromWishlist} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
 
      
      </div>
     
      
      
     
    </>
    
   
  );
}

export default App;
