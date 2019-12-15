import React from 'react';
import {FONT, MARGIN} from "./styles/constants";

const fieldStyles = {
    'margin-top': MARGIN.medium,
};

const labelStyle = {
    ...FONT.label,
};

const valueStyle = {
    ...FONT.body
};

export function Field(props) {
    return (
        <div style={fieldStyles}>
            <div style={labelStyle}>{props.label}</div>
            <div style={valueStyle}>{props.value}</div>
        </div>
    );
}