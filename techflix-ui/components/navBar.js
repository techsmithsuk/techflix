import React from 'react';
import {Logo} from "./icons/logo";
import {COLORS} from "./styles/constants";
import {contentWidth} from "./styles/mixins";

const NAV_BAR_CONTENT_HEIGHT = '40px';
const NAV_BAR_PADDING = '8px';

const navBarStyles = {
    'background': COLORS.background,
    'height': NAV_BAR_CONTENT_HEIGHT,
    'padding': `${NAV_BAR_PADDING} 0`
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