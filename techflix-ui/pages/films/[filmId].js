import React from 'react';
import {Page} from "../../components/page";
import {Hero} from "../../components/hero";
import {FilmInfo} from "../../components/filmInfo";
import {CardRow} from "../../components/cardGrid";
import {PersonCard} from "../../components/card";
import fetch from 'isomorphic-fetch';
import {getUrl} from "../../utils/urlUtils";

function Film(props) {

    return (
        <Page>
            <Hero title={props.title} watchNowId={props.id} banner={props.bannerImage} profile={props.posterImage} imdbLink={props.imdbLink}/>
            <FilmInfo overview={props.overview} releaseDate={props.releaseDate} director={props.director}/>
            <CardRow title={"Cast"} cards={props.cast.map(person => <PersonCard id={person.id} image={person.posterImage} name={person.name}/>)}/>
        </Page>
    );
}

Film.getInitialProps = async ({ query} ) => {
    const result = await fetch(getUrl(`/films/${query.filmId}`));
    return await result.json();
};

export default Film;