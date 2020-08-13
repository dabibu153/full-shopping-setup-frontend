import React from "react";

export default function Register() {
  return (
    <div>
      <form>
        <label>user name</label>
        <input type="text"></input>
        <br />
        <label>email</label>
        <input type="email"></input>
        <br />
        <label>mobile</label>
        <input type="number"></input>
        <br />
        <label>password</label>
        <input type="password"></input>
        <br />
        <button type="submit">register</button>
      </form>
    </div>
  );
}
