import React from 'react';
import {Logo} from "./icons/logo";
import {MARGIN} from "./styles/constants";

const NAV_BAR_CONTENT_HEIGHT = '40px';
const NAV_BAR_PADDING = `${MARGIN.medium}px`;

const navBarStyles = {
    'height': NAV_BAR_CONTENT_HEIGHT,
    'padding': `${NAV_BAR_PADDING} 0`
};

export function NavBar() {
    return (
        <div style={navBarStyles}>
            <Logo/>
        </div>
    );
}