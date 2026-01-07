import { useState } from "react";
import { Routes, Route,Link } from "react-router-dom";

function login(){
    return (
    <body>
      <h1>Login Form</h1>
      <p><input type="text" class="c" id="email" placeholder="Email Address"/></p>
      <p><input type="password" id="password" placeholder="Password"/></p>
      <button onclick="showData()">Log In</button>
      {/* <a href="">new user?</a> */}
      <Link to={CompanyRegister}>New user?
      </Link>
      <div id="data"></div>
    </body>
    )
}
export default login