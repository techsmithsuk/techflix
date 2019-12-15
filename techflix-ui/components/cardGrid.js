import React from 'react';
import {COLORS, FONT} from "./styles/constants";

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
    'margin': '-5px',
    'display': 'flex',
    'flex-wrap': 'wrap',
};

const cardStyle = {
    'margin': '5px',
};

export function CardGrid(props) {
    return (
        <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>{props.title}</h2>
            <ol style={listStyle}>
                {props.cards.map(card => <li style={cardStyle}>{card}</li>)}
            </ol>
        </section>
    );
}
