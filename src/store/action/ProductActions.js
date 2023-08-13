import { ProductTypes } from "../types"
import { DELETE_PRODUCT } from "../types/ProductTypes"

const addProduct = (payload,cb)=>{
    return{
        type: ProductTypes.ADD_PRODUCT,
        payload,
        cb  
    }
}

const addProductFailed = (payload)=>{
    return{
        type: ProductTypes.ADD_PRODUCT_FAILED,
        payload, 
    }
}

const getProduct = ()=>{
    return{
        type: ProductTypes.Get_PRODUCT,
    }
}

const getProductSuccess = (payload)=>{
    return{
        type: ProductTypes.Get_PRODUCT_SUCCESS,
        payload, 
    }
}


const getProductFailed = (payload)=>{
    return{
        type: ProductTypes.Get_PRODUCT_FAILED,
        payload, 
    }
}

const deleteProduct = (payload)=>{
    return{
        type: DELETE_PRODUCT,
        payload
    }
}


export{
    addProduct,
    deleteProduct,
    addProductFailed,
    getProduct,
    getProductSuccess,
    getProductFailed
}



