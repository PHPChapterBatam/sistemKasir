import { combineReducers } from 'redux';
import AuthReducer from "./authReducer";
import ProductReducers from "./productReducer";
import TransaksiReducer from "./transaksiReducer";
import ErrorReducer from "./errorReducer";


export default combineReducers({
    auth: AuthReducer,
    product: ProductReducers,
    transaksi : TransaksiReducer,
    errors : ErrorReducer
});
