import React from 'react';
import ProductItem from "../ProductItem/ProductItem";
import cl from "./ProductList.module.css"


const ProductList = ({products}) => {

    console.log(products)

    return (
        <div className={cl.list}>
            
            {
                products.map(product =>
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                )
            }
        </div>
    );
};

export default ProductList;