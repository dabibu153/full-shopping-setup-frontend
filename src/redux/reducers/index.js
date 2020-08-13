import { combineReducers } from "redux";
import productsReducer from "./products";
import oneProductReducer from "./oneProduct";

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  oneProductReducer: oneProductReducer,
});

export default rootReducer;
