import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './Signup.css';
        
        const Signup = () => {
          const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            isGuest: false,
            isRegistered:false,
          });
        const navigate=useNavigate();
          const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            if (type === 'checkbox') {
              // If the 'isGuest' checkbox is checked, uncheck the 'isRegistered' checkbox
              if (name === 'isGuest' && checked) {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  isGuest: true,
                  isRegistered: false,
                }));
                console.log(formData)
              }
              // If the 'isRegistered' checkbox is checked, uncheck the 'isGuest' checkbox
              else if (name === 'isRegistered' && checked) {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  isGuest: false,
                  isRegistered: true,
                }));
              }
              // If both checkboxes are unchecked, set both to false
              else {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  isGuest: false,
                  isRegistered: false,
                }));
              }
            } else {
              setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
              }));
            }
          };
          const saveUserDataToLocalstorage = (userData) => {
            localStorage.setItem("user", JSON.stringify(userData));
          };
         
          const handleSubmit = (e) => {
            e.preventDefault();
        
            // Check if the user signed up as a guest
            if (formData.isGuest) {
              alert('You are signed up as a guest.');
              saveUserDataToLocalstorage(formData);
            } else {
              // Handle signup logic here for registered users
              // For demo purposes, we'll just log the data to the console
              console.log('Submitted data:', formData);
              saveUserDataToLocalstorage(formData);
              alert("Registration successful!");
              
            }
            navigate('/home');
          };
        
          return (
            <div className="signup-container">
              <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!formData.isGuest} // Required for registered users only
                    //disabled={formData.isGuest} // Disable for guest users
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required={!formData.isGuest} // Required for registered users only
                    //disabled={formData.isGuest} // Disable for guest users
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required={!formData.isGuest} // Required for registered users only
                    //disabled={formData.isGuest} // Disable for guest users
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="isGuest">Sign up as a guest user</label>
                  
                  <input
                    type="checkbox"
                    id="isGuest"
                    name="isGuest"
                    checked={formData.isGuest}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  
                  <label htmlFor="isRegistered">Sign up as a registered user</label>
                  <input
                    type="checkbox"
                    id="isRegistered"
                    name="isRegistered"
                    checked={formData.isRegistered}
                    required={!formData.isGuest}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" >
                  Sign Up
                </button>
                
              </form>
            </div>
          );
        };
        
        export default Signup;
        