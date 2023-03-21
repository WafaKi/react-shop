import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes} from "../config/routes";

const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map(route =>
                <Route element={route.element} path={route.path} exact={route.exact} key={route.path}/>
            )}
            <Route path="*" element={<Navigate to="/products" replace/>}/>
        </Routes>
    );
};

export default AppRouter;