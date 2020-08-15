import React, { useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";

export default function Cart() {
  useEffect(() => {
    console.log(Cookies.get("auth_token"));
    let data = {
      auth_token: Cookies.get("auth_token"),
      userId: "",
    };
    Axios.post("http://localhost:5000/api/cart", data).then((res) => {
      console.log(res);
    });
    console.log("test-text");
  });
  return (
    <div>
      <h1>CART</h1>
    </div>
  );
}
