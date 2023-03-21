import React from 'react';
import cl from "./ProductItem.module.css"
import {useNavigate} from "react-router-dom";

const ProductItem = ({product}) => {

    const navigate = useNavigate()

    return (
        <div className={cl.product}>
            <img className={cl.thumbnail} src={product.thumbnail} alt={product.title} onClick={() => navigate(`/products/${product.id}`)}/>
            <p className={cl.title} onClick={() => navigate(`/products/${product.id}`)}>{product.title}</p>
            <div className={cl.rating}><img src="https://img.icons8.com/fluency/48/000000/star.png"/> {product.rating}</div>
            <div className={cl.price}>
                <p>{(product.price)}€</p>
            </div>
        </div>
    );
};

export default ProductItem;