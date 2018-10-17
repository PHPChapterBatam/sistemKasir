import axios from 'axios';

import {
    TRANSAKSI_LOADING,
    GET_TRANSAKSIS,
    ADD_TRANSAKSI,
    DELETE_TRANSAKSI,
    GET_ERRORS

} from './types';



export const getTransaksis = () => async dispatch => {
    dispatch(setTransaksiLoading());
    const getTransaksis = await axios.get('http://lumenapi.codewell.co.id/transaksi')
        .then(res => dispatch({
            type: GET_TRANSAKSIS,
            payload: res.data
        }))
        .catch(err =>
            dispatch({
                type: GET_TRANSAKSIS,
                payload: null
            })
        );
    return getTransaksis;
}

export const addTransaksi = transaksiData => async dispatch => {
    const addTransaksi = await axios.post('http://lumenapi.codewell.co.id/transaksi', transaksiData)
        .then(res =>
            dispatch({
                type: ADD_TRANSAKSI,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
    return addTransaksi;
};



export const deleteTransaksi = id => async dispatch => {
    dispatch(setTransaksiLoading());
    const deleteTransaksi = await axios.delete(`http://lumenapi.codewell.co.id/transaksi/${id}`)
        .then(res => dispatch({
            type: DELETE_TRANSAKSI,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: DELETE_TRANSAKSI,
            payload: null
        }))
    return deleteTransaksi;
}

// Set loading state
export const setTransaksiLoading = () => {
    return {
        type: TRANSAKSI_LOADING
    };
};
