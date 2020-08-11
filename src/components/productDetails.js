import React, { useState, useEffect } from "react";

import axios from "axios";

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get(
        `http://localhost:5000/api/products/${props.match.params.id}`
      );
      console.log(data.data);
      setProduct(data.data);
    };
    getData();
  }, []);
  return (
    <div>
      <div className="one-product-container">
        <h3>{product.name}</h3>
        <h5>{product.brand}</h5>
        <ul>
          <li className="one-product-li">Cores: {product.cores}</li>
          <li className="one-product-li">Threads: {product.threads}</li>
          <li className="one-product-li">Base clock: {product.baseClock}</li>
          <li className="one-product-li">Boost clock: {product.turboClock}</li>
          <li className="one-product-li">Price: {product.price}</li>
          <li className="one-product-li">Generation: {product.generation}</li>
        </ul>
      </div>
      ;
    </div>
  );
}
