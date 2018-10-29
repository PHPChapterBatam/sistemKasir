import axios from 'axios';

import {
    GET_PRODUCT,
    GET_PRODUCTS,
    DELETE_PRODUCT,
    PRODUCT_LOADING

} from './types';


// Add Post
export const addProduct = (productData,history) => async dispatch => {
    const addproduct = await axios.post('http://lumenapi.codewell.co.id/API/inventory', productData)
            .then(res => history.push('/product'));

    return addproduct;
};
export const editProduct = (id,productData, history) => async dispatch => {
    const addproduct = await axios.put(`http://lumenapi.codewell.co.id/API/inventory/${id}`, productData)
        .then(res => history.push('/product'));

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
            payload: id
        }))
        
    return deleteproduct;
}


// Set loading state
export const setProductLoading = () => {
    return {
        type: PRODUCT_LOADING
    };
};
