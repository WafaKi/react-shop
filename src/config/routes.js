import Products from "../pages/Products";
import ProductPage from "../pages/ProductPage";

export const privateRoutes = [
    {path: "/products", element: <Products/>, exact: true},
    {path: "/products/:id", element: <ProductPage/>, exact: true}
]

export const publicRoutes = []