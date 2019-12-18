import React from 'react';
import {Page} from "../components/page";
import {FONT} from "../components/styles/constants";
import {CardGrid} from "../components/cardGrid";
import {Card} from "../components/card";
import fetch from "isomorphic-fetch";

const titleStyle = {
    ...FONT.title
};

const noResultsStyle = {
    ...FONT.body
};

function Search(props) {
    const hasFilms = props.films.length > 0;
    const hasPeople = props.people.length > 0;
    const hasNoResults = !hasFilms && !hasPeople;

    return (
        <Page>
            <h1 style={titleStyle}>Search Results: {props.searchTerm}</h1>

            {hasNoResults && <p style={noResultsStyle}>Sorry - No results found</p> }

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