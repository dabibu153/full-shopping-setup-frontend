const getOneProduct = (value) => {
  return {
    type: "GET_ONE_PRODUCT",
    payload: value,
  };
};

export default getOneProduct;
