import { useState } from "react";
import { useNavigate } from "react-router-dom";
function login(){
  const navigate = useNavigate();
    return (
  
      
      <div >
        <h1>Login Form</h1>
      <p><input type="text" class="c" id="email" placeholder="Email Address"/></p>
      <p><input type="password" id="password" placeholder="Password"/></p>
      <button onclick="showData()">Log In</button>


      <p style={{ marginTop: "10px" }}>
        New user?{" "}
        <span
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate('/user-signup')}
        >
          Register here
        </span>
      </p>

      </div>
   
    )
}
export default login