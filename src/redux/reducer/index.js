import { combineReducers } from 'redux';
import ProductReducers from "./productReducer";
import TransaksiReducer from "./transaksiReducer";


export default combineReducers({
    product: ProductReducers,
    transaksi : TransaksiReducer,
});
