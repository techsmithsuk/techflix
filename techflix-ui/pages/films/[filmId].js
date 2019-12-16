import React from 'react';
import {Page} from "../../components/page";
import {Hero} from "../../components/hero";
import {FilmInfo} from "../../components/filmInfo";
import {CardRow} from "../../components/cardGrid";
import {Card} from "../../components/card";
import fetch from 'isomorphic-fetch';

function Film(props) {

    return (
        <Page>
            <Hero title={props.title} watchNowId={props.id} banner={props.bannerImage} profile={props.posterImage} imdbLink={props.imdbLink}/>
            <FilmInfo synopsis={props.summary} releaseDate={props.releaseDate} director={props.director}/>
            <CardRow title={"Cast"} cards={props.cast.map(person => <Card href={`/people/${person.id}`} image={person.posterImage} name={person.name}/>)}/>
        </Page>
    );
}

Film.getInitialProps = async ({ query} ) => {
    const result = await fetch(`http://localhost:8080/films/${query.filmId}`);
    return await result.json();
};

export default Film;