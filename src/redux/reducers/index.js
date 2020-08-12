import { combineReducers } from "redux";
import productsReducer from "./products";

const rootReducer = combineReducers({
  productsReducer: productsReducer,
});

export default rootReducer;
