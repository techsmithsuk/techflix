import React from 'react';
import {Page} from "../components/page";
import {FONT} from "../components/styles/constants";
import {CardGrid} from "../components/cardGrid";
import {FilmCard, PersonCard} from "../components/card";
import fetch from "isomorphic-fetch";
import styled from 'styled-components';
import {getUrl} from "../utils/urlUtils";

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

    const filmResults = props.films.map(film => <FilmCard id={film.id} image={film.posterImage}/>);
    const peopleResults = props.people.map(person => <PersonCard id={person.id} image={person.posterImage} name={person.name}/>);

    return (
        <Page>
            <StyledTitle>Search Results: {props.searchTerm}</StyledTitle>

            {hasNoResults && <StyledNoResults>Sorry - No results found</StyledNoResults> }

            {hasFilms && <CardGrid title="Films" cards={filmResults}/>}
            {hasPeople && <CardGrid title="People" cards={peopleResults}/>}
        </Page>
    );
}

Search.getInitialProps = async ({ query }) => {
    const filmResult = await fetch(getUrl(`/films`));
    const peopleResult = await fetch(getUrl(`/people`));

    return {
        searchTerm: query.q,
        films: await filmResult.json(),
        people: await peopleResult.json(),
    }
};

export default Search;