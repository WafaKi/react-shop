import React from 'react';
import cl from "./Navbar.module.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <Link to="/products">Home</Link>
        </div>
    );
};

export default Navbar;