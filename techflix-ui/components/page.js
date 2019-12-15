import React from 'react';
import {NAV_BAR_HEIGHT, NavBar} from "./navBar";
import {contentWidth} from "./styles/mixins";
import {COLORS} from "./styles/constants";

const pageStyle = {
    'background': COLORS.background,
    'min-height': '100vh'
};

const contentStyle = {
    ...contentWidth(),
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
            <NavBar/>
            <div style={contentStyle}>
                {props.children}
            </div>
        </main>
    );
}