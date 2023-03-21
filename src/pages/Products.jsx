import React, { useEffect, useMemo, useState} from 'react';
import ProductList from "../components/ProductList/ProductList";
import {useFetching} from "../hooks/useFetching";
import {ProductService} from "../API/ProductService";
import Loader from "../components/UI/Loader/Loader";
import ReactPaginate from "react-paginate";
import {usePagination} from "../hooks/usePagintaion";
import "../styles/Pagination.css"

const Products = () => {
    
    const [products, setProducts] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const productsPerPage = 10

    const pages = useMemo(() => {
        return Math.ceil(totalCount / productsPerPage)
    }, [totalCount])

    const paginatedProducts = usePagination(currentPage, productsPerPage, products)
    const [fetchProducts, isProductsLoading, errorProducts] = useFetching(async () => {
        
            const response = await ProductService.getAll()
            setTotalCount(response.total)
            setProducts(response.products)
        
    })

    useEffect(() => {
        fetchProducts()
    }, [])

   
    return (
        <div className="Products">
            {errorProducts &&
                <h1>error occurred: {errorProducts}</h1>
            }

            {isProductsLoading
            ?
                <Loader styles={{margin: "0 auto"}}/>
                :
                <>
                    <ProductList products={paginatedProducts}/>
                    <ReactPaginate
                        pageCount={pages}
                        nextLabel=">"
                        previousLabel="<"
                        onPageChange={e => setCurrentPage(e.selected)}
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageClassName="pagination__item"
                        activeClassName="pagination__active"
                        pageRangeDisplayed={10}
                        nextClassName="pagination__controls"
                        previousClassName="pagination__controls"
                        nextLinkClassName="pagination__controls__link"
                        previousLinkClassName="pagination__controls__link"
                    />
                </>
            }

            <button onClick={() => window.scrollTo(0, 0)} className="upButton">{"<"}</button>
        </div>
    );
};

export default Products;