import React from 'react';
import {Logo} from "./icons/logo";
import {COLORS} from "./styles/constants";
import {contentWidth} from "./styles/mixins";

const navBarStyles = {
    'background': COLORS.background,
    'height': '40px',
    'padding': '8px'
};

const contentStyles = {
    ...contentWidth(),
    'height': '100%',
};

export function NavBar() {
    return (
        <div style={navBarStyles}>
            <div style={contentStyles}>
                <Logo/>
            </div>
        </div>
    );
}