import "./productSearch.css";
import logoSearch from "../img/search.png";
import bottom from "../img/down.png";
import star from "../img/star.png";
import sort from "../img/sort.png"



function ProductSearch() {
    return (
        <div className="productSearchBlock">
            <div className="search">
                <form action="#">
                    <label for="search"></label>
                    <input type="search" id="search" placeholder="Filter products" className="inpSearch"></input>
                </form>
                <img src={logoSearch} alt="logo" className="logoSearch"></img>
            </div>
            <div className="productBlockRight">
                <div className="btnfor">
                    <button className="btnProductVendor">
                        Product vendor
                        <img src={bottom} alt="img" className="btnImg"></img>
                    </button>
                    <button className="btnTagetWith">
                        Taget with
                        <img src={bottom} alt="img" className="btnImg"></img>
                    </button>
                    <button className="btnStatus">
                        Status
                        <img src={bottom} alt="img" className="btnImg"></img>
                    </button>
                    <button className="btnFilters">
                        Filters
                    </button>
                </div>
                <div className="btnTwo">
                    <button disabled className="btnDisablet">
                        <img src={star} alt="img" className="btnImgStar"></img>
                        Saved
                    </button>
                    <button  className="btnSort">
                        <img src={sort} alt="img" className="btnImgSort"></img>
                        Sort
                    </button>
                </div>
            </div>
           
        </div>
        
    )
}

export default ProductSearch