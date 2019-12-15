import React from 'react';
import {FONT, MARGIN} from "./styles/constants";
import Link from "next/link";

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
            {props.href
                ? <Link href={props.href}><a><div style={valueStyle}>{props.value}</div></a></Link>
                : <div style={valueStyle}>{props.value}</div>
            }

        </div>
    );
}