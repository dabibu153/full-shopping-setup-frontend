import React from "react";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <div>
      <form>
        <label>email:</label>
        <input type="email"></input>
        <br />
        <label>password</label>
        <input type="password"></input>
        <br />
        <button type="submit">login</button>
      </form>

      <Link to="/register">
        <h3>WOULD U LIKE TO REGISTER</h3>
      </Link>
    </div>
  );
}
