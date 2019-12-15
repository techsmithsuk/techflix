import React from 'react';
import {COLORS, CONTENT_WIDTH} from "./styles/constants";
import {NavBar} from "./navBar";

const pageStyle = {
    'background': COLORS.background,
    'min-height': '100vh'
};

const contentStyle = {
    'max-width': `${CONTENT_WIDTH}px`,
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