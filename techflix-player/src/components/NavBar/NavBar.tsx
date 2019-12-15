import React from 'react';
import {Logo} from "./Logo/Logo";
import './NavBar.scss'
import {SearchBox} from "./SearchBox/SearchBox";

export function NavBar() {
    return (
        <div className={"NavBar"}>
            <a href="http://localhost:3000/"><Logo/></a>
            <SearchBox/>
        </div>
    );
}