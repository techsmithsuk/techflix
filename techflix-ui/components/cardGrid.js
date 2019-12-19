import React from 'react';
import {CONTENT_WIDTH, FONT, MARGIN} from "./styles/constants";
import styled from 'styled-components';

const ITEMS_PER_ROW = 5;
const CARD_MARGIN = MARGIN.small;

const TOTAL_MARGIN = (ITEMS_PER_ROW - 1) * 2 * CARD_MARGIN;
const CARD_WIDTH = (CONTENT_WIDTH - TOTAL_MARGIN) / ITEMS_PER_ROW;
const CARD_HEIGHT = CARD_WIDTH * 1.48;

const StyledSection = styled.section `
    padding-top: 20px;
`;

const StyledSectionTitle = styled.h2 `
    ${FONT.subtitle}
`;

const StyledList = `
    list-style: none;
    padding: 0;
    display: flex;
    margin: -${CARD_MARGIN}px;
`;

const StyledGrid = styled.ol `
    ${StyledList};
    flex-wrap: wrap;
`;

const StyledRow = styled.ol `
    ${StyledList};
`;

const StyledCard = styled.li `
    margin: ${CARD_MARGIN}px;
    width: ${CARD_WIDTH}px;
    height: ${CARD_HEIGHT}px;
`;

export function CardGrid(props) {
    return (
        <StyledSection>
            <StyledSectionTitle>{props.title}</StyledSectionTitle>
            <StyledGrid>
                {props.cards.map((card, index) => <StyledCard key={index}>{card}</StyledCard>)}
            </StyledGrid>
        </StyledSection>
    );
}

export function CardRow(props) {
    return (
        <StyledSection>
            <StyledSectionTitle>{props.title}</StyledSectionTitle>
            <StyledRow>
                {props.cards.map((card, index) => <StyledCard key={index}>{card}</StyledCard>)}
            </StyledRow>
        </StyledSection>
    );
}
