import * as actionTypes from '../actions/actionTypes';

const initialState = {
    product: {
        childName: '',
        sticker: null,
        price: null,
        productName: null,
        color: 'bela'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_PRODUCT:
            return {
                ...state,
                product: {
                    ...state.product,
                    price: action.price,
                    productName: action.productName
                }
            }
        case actionTypes.COLOR_ADDED:
            return {
                ...state,
                product: {
                    ...state.product,
                    color: action.color
                }
            };
        case actionTypes.NAME_ADDED:
            return {
                ...state,
                product: {
                    ...state.product,
                    childName: action.name
                }
            };
        case actionTypes.STICKER_ADDED:
            return {
                ...state,
                product: {
                    ...state.product,
                    sticker: action.sticker
                }
            }
        default:
            return state
    }
}

export default reducer;