import './productsHeader.css';
import { Link } from 'react-router-dom';

function ProductsHeader() {
    return (
        <div className="productsHeaderBlock">
            <div className="headerBlockleft">
                <h2>Products</h2>
            </div>
            <div className="headerBlockright">
                <a className="blockRightexpo" href="#">Export</a>
                <a className="blockRightexpo" href="#">Import</a>
                <Link to="/AddProduct" className="btnAdd" >Add product</Link>
            </div>
        </div>
    )
}


export default ProductsHeader;