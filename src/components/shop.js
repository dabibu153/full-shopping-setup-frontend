import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get("http://localhost:5000/api/products");
      console.log(data.data);
      setProducts(data.data);
    };
    getData();
  }, []);
  return (
    <div>
      <div className="products-container">
        {products.map((cpu) => (
          <div className="product-container">
            <h3>{cpu.name}</h3>
            <h5>{cpu.brand}</h5>
            <ul>
              <li className="product-li">Price: {cpu.price}</li>
              <li className="product-li">generation: {cpu.generation}</li>
            </ul>
            <Link to={`/shop/${cpu._id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Shop;
