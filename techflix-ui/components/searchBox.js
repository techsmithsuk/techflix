import React from 'react';
import {SearchIcon} from "./searchIcon";
import {COLORS, MARGIN} from "./styles/constants";
import styled from 'styled-components';

const StyledSearchForm = styled.form `
    margin: 0;
    padding: 0;
    display: flex;
`;

const StyledViduallyHidden = styled.label `
    position: absolute;
    visibility: hidden;
`;

const StyledSearchInput = styled.input `
    background: none;
    border: none;
    outline: none;
    border-bottom: ${COLORS.foreground} 1px solid;
    font-size: 20px;
    padding: 0;
    color: ${COLORS.foreground};
    transition: 0.2s ease all;
`;

const StyledButton = styled.button `
    background: none;
    border: none;
    outline: none;
    height: 100%;
    margin: 0 0 0 ${MARGIN.small}px;
    padding: 0;
    width: 40px;
`;

export function SearchBox() {
    return (
        <StyledSearchForm action="http://localhost:3000/search" method="get">
            <StyledViduallyHidden htmlFor="searchInput">Search</StyledViduallyHidden>
            <StyledSearchInput id="searchInput" name="q" placeholder="Search"/>
            <StyledButton type="submit"><SearchIcon/></StyledButton>
        </StyledSearchForm>
    );
}