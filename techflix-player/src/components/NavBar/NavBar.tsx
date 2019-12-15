import React from 'react';
import {Link} from "react-router-dom";
import {Logo} from "./Logo/Logo";
import './NavBar.scss'

export function NavBar() {
    return (
        <div className={"NavBar"}>
            <Link to={"/"}><Logo/></Link>
        </div>
    );
}