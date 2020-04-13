import * as actionTypes from './actionTypes';

export const productAdded = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT, 
        product: product
    }
}

export const productRemoved = (id) => {
    return {
        type: actionTypes.REMOVE_PRODUCT, 
        id: id
    }
}