import * as actionTypes from './actionTypes';

export const loadProduct = (price, productName) => {
    return {
        type: actionTypes.INIT_PRODUCT, 
        price, 
        productName
    }
}

export const colorAdded = (color) => {
    return {
        type: actionTypes.COLOR_ADDED, 
        color
    }
}

export const nameAdded = (event) => {
    return {
        type: actionTypes.NAME_ADDED, 
        name: event.target.value
    }
}

export const stickerAdded = (name) => {
    return {
        type: actionTypes.STICKER_ADDED, 
        sticker: name
    }
}