import React from 'react';
import {NAV_BAR_HEIGHT, NavBar} from "./navBar";
import {contentWidth} from "./styles/mixins";
import {COLORS} from "./styles/constants";

const pageStyle = {
    'background': COLORS.background,
    'min-height': '100vh'
};

const contentStyle = {
    'max-width': '1000px',
    'margin': 'auto'
};

export function Page(props) {
    return (
        <main style={pageStyle}>
            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}
            </style>
            <div style={contentStyle}>
                <NavBar/>
                {props.children}
            </div>
        </main>
    );
}