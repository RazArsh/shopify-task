const getProductsSelector = (state => state.getProduct.products);
const getProductsErrorSelector = (state => state.getProduct.error);

export {
    getProductsSelector,
    getProductsErrorSelector
}

