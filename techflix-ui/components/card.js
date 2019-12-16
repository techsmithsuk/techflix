import React from 'react';
import {imageFillsParent} from "./styles/mixins";
import {FONT, MARGIN} from "./styles/constants";
import Link from "next/link";

const cardStyle = {
    'overflow': 'hidden',
    'position': 'relative',
    'height': '100%',
};

const imageStyle = {
    ...imageFillsParent()
};

const nameStyle = {
    ...FONT.body,
    'position': 'absolute',
    'bottom': '0',
    'left': '0',
    'right': '0',
    'text-align': 'center',
    'padding': MARGIN.small,
    'background': 'rgba(0,0,0,0.7)',
};

export function Card(props) {
    return (
        <Link href={props.href}>
            <a>
                <div style={cardStyle}>
                    <img style={imageStyle} src={props.image}/>
                    {props.name && <div style={nameStyle}>{props.name}</div>}
                </div>
            </a>
        </Link>
    );
}