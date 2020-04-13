import * as actionTypes from '../actions/actionTypes';

const initialState = {
    basket: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                basket: [
                    ...state.basket, 
                    {
                        price: action.product.price,
                        sticker: action.product.sticker,
                        childName: action.product.childName,
                        productName: action.product.productName,
                        color: action.product.color
                    }
                ],
                totalPrice: state.totalPrice + Number(action.product.price)
            };
        case actionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                basket: state.basket.filter((item, index) => {
                    return index !== Number(action.id)
                }),
                totalPrice: state.totalPrice - Number(state.basket[action.id].price)
                
            }
        default:
            return state;
    }
}

export default reducer;