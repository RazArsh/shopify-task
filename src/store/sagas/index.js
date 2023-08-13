import { all } from "redux-saga/effects"
import { ProductSagas, getProductSagas } from "./ProductSagas"


function* rootSaga(){
    yield all([ProductSagas(),getProductSagas()]) 
}

export {rootSaga}