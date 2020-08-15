import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("saurav@gmail.com");
  const [pass, setPass] = useState("qwerty");
  const [result, setResult] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: pass,
    };
    axios
      .post("http://localhost:5000/api/users/login", data)
      .then((res) => {
        console.log(res.data);

        console.log(res.headers.auth_token);
        setResult(res.data);
        var inAMinute = new Date(new Date().getTime() + 1 * 60 * 1000);
        cookies.set("auth_token", res.headers.auth_token, {
          expires: inAMinute,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <label>email:</label>
        <input
          type="text"
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
