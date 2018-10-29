
import {
    GET_PRODUCT,
    GET_PRODUCTS,
    DELETE_PRODUCT,
    PRODUCT_LOADING

} from '../actions/types';

const initialState = {
    products: [],
    product: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        default:
            return state;
    }
}
