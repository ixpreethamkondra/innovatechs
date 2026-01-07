import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserRegister(){
    const navigate = useNavigate();
    return (
    <div>
      <h1>Signup Form</h1>
      <p><input type="text" class="c" id="text" placeholder="Username"/></p>
      <p><input type="text" class="c" id="email" placeholder="Email Address"/></p>
      <p><input type="password" id="password" placeholder="Password"/></p>
      <button onclick="showData()">Sign up </button>
     
     <p style={{ marginTop: "10px" }}>
        Already have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate('/user-login')}
        >
          Login here
        </span>
      </p>
     </div>
   
    )
}
export default UserRegister