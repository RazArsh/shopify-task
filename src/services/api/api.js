import axios from "axios";

const API = axios.create({
    baseURL: "https://80e729-2.myshopify.com/admin/api/",
    headers: {
        "Content-Type": "application/json",
    }
})

const setAuthToken = (token)=>{
    API.defaults.headers.common["X-Shopify-Access-Token"] = `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`
}

export{API,setAuthToken}