import React from 'react';
import './SearchBox.scss'
import {SearchIcon} from "./SearchIcon/SearchIcon";

export function SearchBox() {
    return (
        <form className="SearchBox" action="http://localhost:3000/search" method="get">
            <label htmlFor="searchInput" className="visuallyHidden">Search</label>
            <input id="searchInput" name="q" className="searchInput" placeholder="Search"/>

            <button className="submitButton" type="submit"><SearchIcon/></button>
        </form>
    );
}