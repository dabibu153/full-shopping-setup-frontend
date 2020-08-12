const productsReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case "GET_PRODUCTS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
