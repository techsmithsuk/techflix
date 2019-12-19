import React from 'react';
import {FONT, MARGIN} from "./styles/constants";
import Link from "next/link";
import styled from 'styled-components';

const StyledField = styled.div `
    margin-top: ${MARGIN.medium};
`;

const StyledLabel = styled.div `
    ${FONT.label}
`;

const StyledValue = styled.div `
    ${FONT.body}
`;

export function Field(props) {
    return (
        <StyledField>
            <StyledLabel>{props.label}</StyledLabel>
            {props.href
                ? <Link href={props.href}><a><StyledValue>{props.value}</StyledValue></a></Link>
                : <StyledValue>{props.value}</StyledValue>
            }
        </StyledField>
    );
}