import React from 'react';
import {FONT} from "./styles/constants";
import {imageFillsParent} from "./styles/mixins";
import styled from 'styled-components';

const StyledSection = styled.section `
    height: 400px;
    position: relative;
`;

const StyledImage = styled.img `
    ${imageFillsParent()}
`;

const StyledMessage = styled.div `
    position: absolute;
    max-width: 60%;
    bottom: 20px;
    left: 20px;
    padding: 20px;
    background: rgba(0,0,0,0.7);
`;

const StyledTitle = styled.h1 `
    ${FONT.title}
`;

const StyledDescription = styled.p `
    ${FONT.body}
`;

export function WelcomeBanner() {
    return (
        <StyledSection>
            <StyledImage src="https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg"/>
            <StyledMessage>
                <StyledTitle>Star Wars: The Rise of Skywalker</StyledTitle>
                <StyledDescription>The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.</StyledDescription>
            </StyledMessage>
        </StyledSection>
    );
}