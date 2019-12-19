import React from 'react';
import {Logo} from "./icons/logo";
import {MARGIN} from "./styles/constants";
import Link from "next/link";
import {SearchBox} from "./searchBox";
import styled from 'styled-components';

const NAV_BAR_CONTENT_HEIGHT = '40px';
const NAV_BAR_PADDING = `${MARGIN.medium}px`;

const StyledNavBar = styled.section `
    height: ${NAV_BAR_CONTENT_HEIGHT};
    padding: ${NAV_BAR_PADDING} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export function NavBar() {
    return (
        <StyledNavBar>
            <Link href={"/"}><a><Logo/></a></Link>
            <SearchBox/>
        </StyledNavBar>
    );
}