import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [],
    isLoaded: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                items: action.data,
                isLoaded: true
            };
        case actionTypes.LOAD_PRODUCTS_FAILED: 
            return {
                ...state,
                error: action.error
            }
        default: 
            return state;
    }
}

export default reducer;