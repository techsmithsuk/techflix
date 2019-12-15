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
    color: COLORS.foreground
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

export function Hero(props) {
    return (
        <section style={heroSectionStyle}>
            <img style={imageStyle} src="https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg"/>
            <div style={profileImageContainer}>
                <img style={profileImageStyle} src={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>
            </div>
            <h1 style={titleStyle}>{props.title}</h1>
        </section>
    );
}