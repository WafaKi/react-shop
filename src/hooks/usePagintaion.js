import {useMemo} from "react";

export const usePagination = (page, productsPerPage, products) => {
    return useMemo(() => {
        return products.slice(page * productsPerPage, (page * productsPerPage) + productsPerPage)
    }, [page, products])
}