import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [result, setResult] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: pass,
    };
    axios.post("http://localhost:5000/api/users/login", data).then((res) => {
      setResult(res.data);
    });
  };

  return (
    <div>
      <form>
        <label>email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <label>password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></input>
        <br />
        <button type="submit" onClick={(e) => handleLogin(e)}>
          login
        </button>
      </form>

      <Link to="/register">
        <h3>WOULD U LIKE TO REGISTER</h3>
      </Link>

      <h3>{result}</h3>
    </div>
  );
}
