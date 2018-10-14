import axios from 'axios';

import {
    GET_PRODUCT,
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    GET_ERRORS,
    PRODUCT_LOADING

} from './types';


// Add Post
export const addProduct = productData => async dispatch => {
    const addProduct = await axios.post('http://lumenapi.codewell.co.id/inventory', productData)
            .then(res =>
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
                })
            )
            .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
                })
            );
return addProduct;
};

export const getProducts = () => async dispatch => {
    dispatch(setProductLoading());
    const getProducts = await axios.get('http://lumenapi.codewell.co.id/inventory')
                        .then(res => dispatch({
                            type: GET_PRODUCTS,
                            payload: res.data
                        }))
                        .catch(err =>
                            dispatch({
                                type: GET_PRODUCTS,
                                payload: null
                            })
                        );
    return getProducts;
}

export const getProduct = id => async dispatch => {
    dispatch(setProductLoading());
    const getProduct = await axios.get(`http://lumenapi.codewell.co.id/inventory/${id}`)
                        .then(res => dispatch({
                            type: GET_PRODUCT,
                            payload : res.data
                        }))
                        .catch(err => dispatch({
                            type: GET_PRODUCT,
                            payload: null
                        }))
    return getProduct;
}

export const deleteProduct = id => async dispatch => {
    dispatch(setProductLoading());
    const deleteProduct = await axios.delete(`http://lumenapi.codewell.co.id/inventory/${id}`)
        .then(res => dispatch({
            type: DELETE_PRODUCT,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: DELETE_PRODUCT,
            payload: null
        }))
    return deleteProduct;
}


// Set loading state
export const setProductLoading = () => {
    return {
        type: PRODUCT_LOADING
    };
};
