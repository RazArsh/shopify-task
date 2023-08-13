import { combineReducers } from "redux";
import ProductReducers, { getProductReducer } from "./ProductReducers";

const root = combineReducers({
    product: ProductReducers,
    getProduct: getProductReducer
})

export default root;

