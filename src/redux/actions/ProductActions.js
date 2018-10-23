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
    const addproduct = await axios.post('http://lumenapi.codewell.co.id/API/inventory', productData)
            .then(res =>
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
                })
            )
            .catch(() =>
            dispatch({
                type: ADD_PRODUCT,
                payload: null
                })
            );
return addproduct;
};

export const getProducts = () => async dispatch => {
    dispatch(setProductLoading());
    const getpost = await axios.get('http://lumenapi.codewell.co.id/API/inventory')
                    .then((response) => {
                        dispatch({
                            type: GET_PRODUCTS,
                            payload: response.data
                        })
                    })
    return getpost;
}

export const getProduct = id => async dispatch => {
    dispatch(setProductLoading());
    const getproduct = await axios.get(`http://lumenapi.codewell.co.id/API/inventory/${id}`)
                        .then(res => dispatch({
                            type: GET_PRODUCT,
                            payload : res.data
                        }))
                        .catch(err => dispatch({
                            type: GET_PRODUCT,
                            payload: null
                        }))
    return getproduct;
}

export const deleteProduct = id => async dispatch => {
    dispatch(setProductLoading());
    const deleteproduct = await axios.delete(`http://lumenapi.codewell.co.id/API/inventory/${id}`)
        .then(res => dispatch({
            type: DELETE_PRODUCT,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: DELETE_PRODUCT,
            payload: null
        }))
    return deleteproduct;
}


// Set loading state
export const setProductLoading = () => {
    return {
        type: PRODUCT_LOADING
    };
};
