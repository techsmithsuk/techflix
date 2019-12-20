import React from 'react';
import {imageFillsParent} from "./styles/mixins";
import {FONT, MARGIN} from "./styles/constants";
import Link from "next/link";
import styled from 'styled-components';

const StyledCard = styled.div`
    overflow: hidden;
    position: relative;
    height: 100%;
`;

const StyledImage = styled.img`
    ${imageFillsParent()}
`;

const StyledName = styled.div `
    ${FONT.body}
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: ${MARGIN.small};
    background: rgba(0,0,0,0.7);
`;

export function FilmCard(props) {
    return (
        <Link href="/films/[filmId]" as={`/films/${props.id}`}>
            <a>
                <StyledCard>
                    <StyledImage src={props.image}/>
                </StyledCard>
            </a>
        </Link>
    );
}

export function PersonCard(props) {
    return (
        <Link href="/people/[personId]" as={`/people/${props.id}`}>
            <a>
                <StyledCard>
                    <StyledImage src={props.image}/>
                    <StyledName>{props.name}</StyledName>
                </StyledCard>
            </a>
        </Link>
    );
}