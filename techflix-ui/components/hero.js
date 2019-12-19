import React from 'react';
import {COLORS, FONT, MARGIN} from "./styles/constants";
import {imageFillsParent} from "./styles/mixins";
import styled from 'styled-components';

const StyledSection = styled.section `
    position: relative;
`;

const StyledBannerImage = styled.img `
    height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: center;
`;

const StyledTitle = styled.h1 `
    ${FONT.title}
    color: ${COLORS.foreground};
    margin-bottom: 0;
`;

const PROFILE_IMAGE_WIDTH = '200';
const PROFILE_IMAGE_HEIGHT = PROFILE_IMAGE_WIDTH * 1.48;

const StyledPosterImageContainer = styled.div `
    position: absolute;
    top: 200px;
    right: 60px;
    height: ${PROFILE_IMAGE_HEIGHT}px;
    width: ${PROFILE_IMAGE_WIDTH}px;
    padding: ${MARGIN.small}px;
    background: ${COLORS.foreground};
`;

const StyledPosterImage = styled.div `
    ${imageFillsParent()}
`;

const StyledButton = styled.a `
    ${FONT.button}
    padding: ${MARGIN.small}px ${MARGIN.large}px;
    border: ${COLORS.primary} 1px solid;
    margin-top: ${MARGIN.small}px;
    display: inline-block;
`;

const StyledLink = styled.a `
    ${FONT.body}
    color: ${COLORS.primary};
    margin-bottom: ${MARGIN.medium};
    display: block;
    text-decoration: none;
`;

export function Hero(props) {
    return (
        <StyledSection>
            <StyledBannerImage src={props.banner}/>
            <StyledPosterImageContainer>
                <StyledPosterImage src={props.profile}/>
            </StyledPosterImageContainer>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledLink href={props.imdbId} target="_blank">View on IMDb</StyledLink>
            {props.watchNowId && <StyledButton href={`http://localhost:3001/${props.watchNowId}`}>Watch Now</StyledButton>}
        </StyledSection>
    );
}