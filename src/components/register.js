import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [result, setResult] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      userName: userName,
      email: email,
      password: pass,
    };
    const res = await axios.post(
      "http://localhost:5000/api/users/register",
      data
    );
    console.log(res.data);
    setResult(res.data);
  };
  return (
    <div>
      <form>
        <label>user name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <br />
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <label>password</label>
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></input>
        <br />
        <button onClick={(e) => handleRegister(e)}>register</button>
      </form>

      <h3>{result}</h3>
    </div>
  );
}
