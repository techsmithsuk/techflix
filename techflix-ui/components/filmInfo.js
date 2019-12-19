import React from 'react';
import {Field} from "./field";
import {FONT, MARGIN} from "./styles/constants";
import styled from 'styled-components';

const StyledSubtite = styled.h2 `
    ${FONT.subtitle}
    margin-top: ${MARGIN.large};
`;

export function FilmInfo(props) {
    return (
        <section>
            <StyledSubtite>Info</StyledSubtite>
            <Field label={"Synopsis"} value={props.overview}/>
            <Field label={"Release Date"} value={props.releaseDate}/>
            {props.director && <Field label={"Director"} value={props.director.name} href={props.director.page}/>}
        </section>
    );
}