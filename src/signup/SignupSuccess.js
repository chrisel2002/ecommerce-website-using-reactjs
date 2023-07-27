// SignupSuccess.js

import React from "react";

const SignupSuccess = ({ name }) => {
  return (
    <div>
      <h2>Thank you, {name}, for registering!</h2>
      <p>Your account has been created successfully.</p>
    </div>
  );
};

export default SignupSuccess;

