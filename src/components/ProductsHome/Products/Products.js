import "./Products.css";
import { useState } from "react";
import ProductSearch from "./ProductsSearch/ProductSearch";
import ProductsList from "./ProductsList/ProductsList";

function Products() {
    const [active, setactive] = useState(false)
    const [actives, setactives] = useState(false)
    const [actived, setactived] = useState(false)
    const [activel, setactivel] = useState(false)
    return (
        <div className="products">
            <div className="all">
                <ul className="allBlock">
                    <li className="allList">
                        <a className="allLink" href="#" onClick={() => {
                            active ? setactive(false) : setactive(true)
                        }}>All</a>
                        {active && <div className="active"></div>}
                    </li>
                    <li className="allList">
                        <a className="allLink" href="#" onClick={() => {
                            actives ? setactives(false) : setactives(true)
                        }}>Active</a>
                        {actives && <div className="activeOne"></div>}
                    </li>
                    <li className="allList">
                        <a className="allLink" href="#" onClick={() => {
                            actived ? setactived(false) : setactived(true)
                        }}>Draft</a>
                        {actived && <div className="activeTwo"></div>}
                    </li>
                    <li className="allList">
                        <a className="allLink" href="#" onClick={() => {
                            activel ? setactivel(false) : setactivel(true)
                        }}>Archived</a>
                        {activel && <div className="activeThree"></div>}
                    </li>
                </ul>
                <hr/>
                <ProductSearch/>
                <ProductsList/>
            </div>
        </div>
    )
}

export default Products