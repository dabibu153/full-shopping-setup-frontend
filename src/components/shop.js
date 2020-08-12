import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getAllProducts from "../redux/actions/products";
import axios from "axios";

function Shop() {
  const allProducts = useSelector((state) => state.productsReducer);
  console.log("innitial state shop");
  console.log(allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get("http://localhost:5000/api/products");
      console.log("from redux");
      console.log(data);

      dispatch(getAllProducts(data.data));
    };
    getData();
  }, []);

  if (!allProducts) {
    return "Loading....";
  }
  return (
    <div>
      <div className="products-container">
        {allProducts.map((cpu) => (
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
