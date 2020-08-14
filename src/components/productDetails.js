import React, { useState, useEffect } from "react";
import getOneProduct from "../redux/actions/oneProduct";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductDetails(props) {
  const [qty, setQty] = useState(1);
  const [result, setResult] = useState("");

  const oneProductState = useSelector((state) => state.oneProductReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get(
        `http://localhost:5000/api/products/${props.match.params.id}`
      );
      console.log("from redux-one");
      console.log(data.data);

      dispatch(getOneProduct(data.data));
    };
    getData();
  }, []);

  const stockdata = (n) => {
    let foo = [];
    for (let i = 0; i < n; i++) {
      foo.push(i + 1);
    }
    return foo;
  };

  const handleCartAdd=(e)=>{
    e.preventDefault();
    const data={
      id: oneProductState._id,
      qty: qty
    }
    axios
    .post("http://localhost:5000/api/cart/add",data)
    .then(res=>{
      console.log(res.data);
      setResult(res.data);
    })
  }

  return (
    <div>
      <div className="one-product-container">
        <h3>{oneProductState.name}</h3>
        <h5>{oneProductState.brand}</h5>
        <ul>
          <li className="one-product-li">Cores: {oneProductState.cores}</li>
          <li className="one-product-li">Threads: {oneProductState.threads}</li>
          <li className="one-product-li">
            Base clock: {oneProductState.baseClock}
          </li>
          <li className="one-product-li">
            Boost clock: {oneProductState.turboClock}
          </li>
          <li className="one-product-li">Price: {oneProductState.price}</li>
          <li className="one-product-li">
            Generation: {oneProductState.generation}
          </li>
        </ul>
        select quentity:
        <select value={qty} onChange={(e) => setQty(e.target.value)}>
          {stockdata(oneProductState.stock).map((a) => (
            <option>{a}</option>
          ))}
        </select>
        {oneProductState.stock > 0 ? (
          <buton onClick={e={handleCartAdd(e)}}>add to cart</buton>
        ) : (
          <div>out of stock</div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
