import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initProducts = () => {
    return dispatch => {
        axios.get('https://gift-shop-bd491.firebaseio.com/products.json')
            .then(response => {
                const updatedItems = response.data;
                dispatch(initProductsSuccess(updatedItems));
            }).catch(error => {
                dispatch(initProductFailed(error));
            })

    }
}

export const initProductsSuccess = (data) => {
    return {
        type: actionTypes.LOAD_PRODUCTS_SUCCESS, 
        data
    }
}

export const initProductFailed = (error) => {
    return {
        type: actionTypes.LOAD_PRODUCTS_FAILED,
        error
    }
}