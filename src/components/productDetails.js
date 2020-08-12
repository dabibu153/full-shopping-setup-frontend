import React, { useState, useEffect } from "react";

import axios from "axios";

function ProductDetails(props) {
  const [oneProduct, setOneProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get(
        `http://localhost:5000/api/products/${props.match.params.id}`
      );
      console.log("from redux-one");
      console.log(data.data);
      setOneProduct(data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="one-product-container">
        <h3>{oneProduct.name}</h3>
        <h5>{oneProduct.brand}</h5>
        <ul>
          <li className="one-product-li">Cores: {oneProduct.cores}</li>
          <li className="one-product-li">Threads: {oneProduct.threads}</li>
          <li className="one-product-li">Base clock: {oneProduct.baseClock}</li>
          <li className="one-product-li">
            Boost clock: {oneProduct.turboClock}
          </li>
          <li className="one-product-li">Price: {oneProduct.price}</li>
          <li className="one-product-li">
            Generation: {oneProduct.generation}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
