const getAllProducts = (value) => {
  return {
    type: "GET_PRODUCTS",
    payload: value,
  };
};

export default getAllProducts;
