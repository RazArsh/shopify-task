import { API } from "./api"

const postProductApi=(payload)=>{
    const resolve = API.post("/2023-07/products.json", payload
   )
    .then((res)=>res)
    return resolve
}

const getProductApi=()=>{
    const resolve = API.get("/2021-07/products.json")
    .then((res)=>res)
    return resolve
}

const delProductApi=(payload)=>{
    const resolve = API.delete("/2023-07/products.json",payload)
    .then((res)=>res)
    return resolve
}

export {postProductApi,getProductApi,delProductApi}