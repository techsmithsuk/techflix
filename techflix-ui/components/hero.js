import React from 'react';
import {COLORS, FONT, MARGIN} from "./styles/constants";
import {imageFillsParent} from "./styles/mixins";

const heroSectionStyle = {
    'position': 'relative',
};

const imageStyle = {
    'height': '400px',
    'width': '100%',
    'object-fit': 'cover',
    'object-position': 'center',
};

const titleStyle = {
    ...FONT.title,
    "color": COLORS.foreground,
    "margin-bottom": 0,
};

const PROFILE_IMAGE_WIDTH = '200';
const PROFILE_IMAGE_HEIGHT = PROFILE_IMAGE_WIDTH * 1.48;

const profileImageContainer = {
    'position': 'absolute',
    'top': '200px',
    'right': '60px',
    'height': `${PROFILE_IMAGE_HEIGHT}px`,
    'width': `${PROFILE_IMAGE_WIDTH}px`,
    'padding': `${MARGIN.small}px`,
    'background': COLORS.foreground,
};

const profileImageStyle = {
    ...imageFillsParent(),
};

const buttonStyle = {
    ...FONT.button,
    'padding': `${MARGIN.small}px ${MARGIN.large}px`,
    'border': `${COLORS.primary} 1px solid`,
    'margin-top': `${MARGIN.small}px`,
    'display': 'inline-block',
};

const linkStyle = {
    ...FONT.body,
    "color": COLORS.primary,
    "margin-bottom": MARGIN.medium,
    "display": "block",
    "text-decoration": "none",
};

export function Hero(props) {
    return (
        <section style={heroSectionStyle}>
            <img style={imageStyle} src={props.banner}/>
            <div style={profileImageContainer}>
                <img style={profileImageStyle} src={props.profile}/>
            </div>
            <h1 style={titleStyle}>{props.title}</h1>
            <a style={linkStyle} href={props.imdbLink} target="_blank">View on IMDb</a>
            {props.watchNowId && <a style={buttonStyle} href={`http://localhost:3001/${props.watchNowId}`}>Watch Now</a>}
        </section>
    );
}