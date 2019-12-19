import React from 'react';
import {Page} from "../components/page";
import {FONT} from "../components/styles/constants";
import {CardGrid} from "../components/cardGrid";
import {Card} from "../components/card";
import fetch from "isomorphic-fetch";
import styled from 'styled-components';

const StyledTitle = styled.h1 `
    ${FONT.title}
`;

const StyledNoResults = styled.p `
    ${FONT.body}
`;

function Search(props) {
    const hasFilms = props.films.length > 0;
    const hasPeople = props.people.length > 0;
    const hasNoResults = !hasFilms && !hasPeople;

    return (
        <Page>
            <StyledTitle>Search Results: {props.searchTerm}</StyledTitle>

            {hasNoResults && <StyledNoResults>Sorry - No results found</StyledNoResults> }

            {hasFilms && <CardGrid title="Films" cards={props.films.map(film => <Card href={`/films/${film.id}`} image={film.posterImage}/>)}/>}
            {hasPeople && <CardGrid title="People" cards={props.people.map(person => <Card href={`/people/${person.id}`} image={person.posterImage} name={person.name}/>)}/>}
        </Page>
    );
}

const apiUrl = process.env.API_URL

Search.getInitialProps = async ({ query }) => {
    const filmResult = await fetch(`${apiUrl}/films`);
    const peopleResult = await fetch(`${apiUrl}/people`);

    return {
        searchTerm: query.q,
        films: await filmResult.json(),
        people: await peopleResult.json(),
    }
};

export default Search;