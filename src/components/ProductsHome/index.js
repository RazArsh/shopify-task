import "./productsHome.css";
import ProductsHeader from "./ProductsHeader/ProductsHeader";
import Products from "./Products/Products";


function ProductsHome() {
    return (
        <div className="block">
            <ProductsHeader />,
            <Products />
        </div>
    )
}

export default ProductsHome;