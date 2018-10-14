import { combineReducers } from 'redux';
import ProductReducers from "./productReducer";

export default combineReducers({
    products: ProductReducers
});
