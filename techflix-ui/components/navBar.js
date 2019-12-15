import React from 'react';
import {Logo} from "./icons/logo";
import {MARGIN} from "./styles/constants";
import Link from "next/link";
import {SearchBox} from "./searchBox";

const NAV_BAR_CONTENT_HEIGHT = '40px';
const NAV_BAR_PADDING = `${MARGIN.medium}px`;

const navBarStyles = {
    'height': NAV_BAR_CONTENT_HEIGHT,
    'padding': `${NAV_BAR_PADDING} 0`,
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
};

export function NavBar() {
    return (
        <div style={navBarStyles}>
            <Link href={"/"}><a><Logo/></a></Link>
            <SearchBox/>
        </div>
    );
}