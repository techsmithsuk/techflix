import React from 'react';
import {FONT, MARGIN} from "./styles/constants";
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
            <StyledValue>{props.value}</StyledValue>
        </StyledField>
    );
}