import React from 'react';
import {COLORS, CONTENT_WIDTH} from "./styles/constants";
import {NavBar} from "./navBar";
import styled from 'styled-components';

const StyledPage = styled.main `
    background: ${COLORS.background};
    min-height: 100vh;
`;

const StyledContent = styled.div `
    max-width: ${CONTENT_WIDTH}px;
    margin: auto;
`;

export function Page(props) {
    return (
        <StyledPage>
            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}
            </style>
            <StyledContent>
                <NavBar/>
                {props.children}
            </StyledContent>
        </StyledPage>
    );
}