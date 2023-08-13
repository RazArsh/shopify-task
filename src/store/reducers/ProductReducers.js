import { ProductTypes } from "../types";

export default (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case ProductTypes.ADD_PRODUCT:
            const tmp1 = [...state, payload]
            return tmp1
        default:
            break;
    }


    return state;
}

const initState = {
    products: [],
    error: ""
}

const getProductReducer = (state = initState, action) => {
    switch (action.type) {
        case ProductTypes.Get_PRODUCT_SUCCESS:
            return {...state, products: action.payload}
        case ProductTypes.Get_PRODUCT_FAILED:
            return {...state,error: action.payload}
    }
    return state
};

export {
    getProductReducer
}