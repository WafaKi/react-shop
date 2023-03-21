import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "../styles/ProductPage.css"
import {useFetching} from "../hooks/useFetching";
import {ProductService} from "../API/ProductService";
import Loader from "../components/UI/Loader/Loader";
import Slider from "../components/UI/Slider";

const ProductPage = () => {
    const history = useNavigate()
    const productId = useParams()
    const [product, setProduct] = useState({})

    const [fetchProduct, isProductLoading] = useFetching(async () => {
        const response = await ProductService.getById(productId.id)
        setProduct(response.data)
    })

    console.log(product)

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        isProductLoading
            ?
            <Loader styles={{marginTop:"250px"}}/>
            :
            <div className="ProductPage">
                <Slider images={product.images}/>
                <p className="product__title">{product.title}</p>
                <p className="product__description">{product.description}</p>
                <div className="product__rating"><img src="https://img.icons8.com/fluency/48/000000/star.png"/> {product.rating}</div>
                <div className="product__price">
                    <p>{(product.price)}€</p>
                </div>
                <p className="product__stock">In stock - {product.stock}</p>
                <button onClick={() => history(-1)}>Go Back </button>
            </div>
    
    );
};

export default ProductPage;