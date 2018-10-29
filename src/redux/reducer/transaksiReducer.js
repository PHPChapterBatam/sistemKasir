import {
    TRANSAKSI_LOADING,
    GET_TRANSAKSIS,
    GET_TRANSAKSI,
    DELETE_TRANSAKSI,
    
} from '../actions/types';



const initialState = {
    transaksis: [],
    transaksi: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TRANSAKSI_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_TRANSAKSIS:
            return {
                ...state,
                transaksis: action.payload,
                loading: false
            };
        case GET_TRANSAKSI:
            return {
                ...state,
                transaksi: action.payload,
                loading: false
            };
        case DELETE_TRANSAKSI:
            return {
                ...state,
                transaksis: state.transaksis.filter(product => product._id !== action.payload)
            };
        default:
            return state;
    }
}

