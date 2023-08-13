import { call, put, takeEvery } from 'redux-saga/effects'
import { ProductTypes } from '../types'
import { delProductApi, getProductApi, postProductApi } from '../../services/api/ProductApi'
import { ProductActions } from '../action';


function* product({payload,cb}){
    try {
      const resolve = yield postProductApi(payload);
    } catch (error) {
    }
}


function* ProductSagas(){
    yield takeEvery(ProductTypes.ADD_PRODUCT, product)
}


function* getProduct(){
    try {
      const resolve = yield getProductApi();
      if(resolve.status === 200) {
        yield put(ProductActions.getProductSuccess(resolve.data.products))
      }
    } catch (error) {
        yield put(ProductActions.getProductFailed(error.message))
    }
}


function* getProductSagas(){
    yield takeEvery(ProductTypes.Get_PRODUCT, getProduct)
}

function* delProduct({payload,cb}){
  try {
    const resolve = yield delProductApi(payload);
    if(resolve.status === 200) {
      cb()
    }
  } catch (error) {
  }
}

function* delProductSagas(){
  yield takeEvery(ProductTypes.DELETE_PRODUCT, delProduct)
}

export {ProductSagas,getProductSagas,delProductSagas}