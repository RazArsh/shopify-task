import "./addProduct.css";
import ProductTitle from "./ProductTitle/ProductTitle";
import { Link, useNavigate, useParams } from 'react-router-dom';
import left from "../Products/img/left.png"
import ProductImg from "./ProductImg/ProductImg";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { ProductActions } from "../../../store/action";
import { useRef } from "react";
import { setAuthToken } from "../../../services/api/api";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "../../../store/selectors/ProductsSelector";
import ProductOption from "./ProductOption/ProductOption";

function AddProduct() {
    const products = useSelector(getProductsSelector);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const titleRef = useRef()
    const body__htmlRef = useRef()
    const imagesRef = useRef()
    const {id} = useParams()
    useEffect(() => {
        setAuthToken()
        dispatch(ProductActions.getProduct())
    }, [dispatch])

    useEffect(()=>{
        if(id && products.length >= 1) {
            const product = products.filter((item) => item.id == id)
            console.log(products,"sadda");
                titleRef.current.value = product[0].title
                body__htmlRef.current.value = product[0].body_html
        }
    },[products,id,titleRef,body__htmlRef])

    const addHandler = useCallback((event) => {
        event.preventDefault();
        setAuthToken()
        navigate('/')
        const payload = {
            "product": {
                "title": titleRef.current.value,
                "body_html": body__htmlRef.current.value,
                "images": imagesRef.current.value
            }
        }
        dispatch(ProductActions.addProduct(payload))
    }, [titleRef, body__htmlRef, dispatch])


   
    return (
        <div className="productContainer">
            <div className="btnPrevent">
                <Link to="/" className="btnPrev" >
                    <img src={left} className="leftIcon"></img>
                </Link>
            </div>
            <ProductTitle titleRef={titleRef} body__htmlRef={body__htmlRef} addHandler={addHandler}/>
            <ProductImg  imagesRef={imagesRef}/>
            <ProductOption/>
        </div>
    )
}

export default AddProduct