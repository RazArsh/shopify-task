import { useDispatch, useSelector } from "react-redux";
import "./productsList.css";
import { useEffect } from "react";
import { ProductActions } from "../../../../store/action";
import { setAuthToken } from "../../../../services/api/api";
import { getProductsSelector } from "../../../../store/selectors/ProductsSelector";
import { useNavigate } from "react-router-dom";


function ProductsList() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const products = useSelector(getProductsSelector);
    useEffect(() => {
        setAuthToken()
        dispatch(ProductActions.getProduct())
    }, [dispatch])

    const navigateTo = (id) => {
        navigate(`/AddProduct/${id}`)
    }

    return (
        <div className="listConatiner">
            {products.map((item) => {
                return (
                    <div className="productsL" >
                        <input type="checkbox"></input>
                        <div className="productListNav" onClick={()=>{
                            navigateTo(item.id)
                        }}>
                            <img src={item.images} alt="img"></img>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsList