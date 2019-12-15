import React from 'react';
import {COLORS, CONTENT_WIDTH, FONT, MARGIN} from "./styles/constants";

const ITEMS_PER_ROW = 5;
const CARD_MARGIN = MARGIN.small;

const TOTAL_MARGIN = (ITEMS_PER_ROW - 1) * 2 * CARD_MARGIN;
const CARD_WIDTH = (CONTENT_WIDTH - TOTAL_MARGIN) / ITEMS_PER_ROW;
const CARD_HEIGHT = CARD_WIDTH * 1.48;

const sectionStyle = {
    'padding-top': '20px',
};

const sectionTitleStyle = {
    ...FONT.subtitle,
    'color': COLORS.foreground,
};

const listStyle = {
    'list-style': 'none',
    'padding': '0',
    'margin': `-${CARD_MARGIN}px`,
    'display': 'flex',
    'flex-wrap': 'wrap',
};

const cardStyle = {
    'margin': `${CARD_MARGIN}px`,
    'width': `${CARD_WIDTH}px`,
    'height': `${CARD_HEIGHT}px`,
};

export function CardGrid(props) {
    console.log('card margin');
    return (
        <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>{props.title}</h2>
            <ol style={listStyle}>
                {props.cards.map(card => <li style={cardStyle}>{card}</li>)}
            </ol>
        </section>
    );
}
