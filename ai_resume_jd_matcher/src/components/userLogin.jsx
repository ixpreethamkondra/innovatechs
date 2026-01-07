import { useState } from "react";
function login(){
    return (
    <body>
      <h1>Login Form</h1>
      <p><input type="text" class="c" id="email" placeholder="Email Address"/></p>
      <p><input type="password" id="password" placeholder="Password"/></p>
      <button onclick="showData()">Log In</button>
      <div id="data"></div>
    </body>
    )
}
export default login