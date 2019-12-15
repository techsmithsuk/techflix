import React from 'react';
import './SearchBox.scss'
import {SearchIcon} from "./SearchIcon/SearchIcon";

export function SearchBox() {
    return (
        <form className="SearchBox">
            <label htmlFor="searchInput" className="visuallyHidden">Search</label>
            <input id="searchInput" className="searchInput" placeholder="Search"/>

            <button className="submitButton" type="submit"><SearchIcon/></button>
        </form>
    );
}