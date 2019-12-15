import React from 'react';
import {Link} from "react-router-dom";
import {Logo} from "./Logo/Logo";

export function NavBar() {
    return (
        <div>
            <Link to={"/"}><Logo/></Link>
        </div>
    );
}