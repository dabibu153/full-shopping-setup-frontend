import React, { useState, useEffect } from "react";

import axios from "axios";

export default function ProductDetails(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get(
        `http://localhost:5000/api/products/${props.match.params.id}`
      );
      console.log(data);
      //   setProduct(data.data);
    };
    getData();
  }, []);
  return (
    <div>
      {/* {product.map((cpu) => {
        if (cpu._id === parseInt(props.match.params.id)) {
          <div className="product-container">
            <h3>{cpu.name}</h3>
            <h5>{cpu.brand}</h5>
            <ul>
              <li className="product-li">Price: {cpu.price}</li>
              <li className="product-li">generation: {cpu.generation}</li>
            </ul>
          </div>;
        }
      })} */}
    </div>
  );
}
