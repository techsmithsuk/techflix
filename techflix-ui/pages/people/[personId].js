import React from 'react';
import {Page} from "../../components/page";
import {Hero} from "../../components/hero";
import {CardRow} from "../../components/cardGrid";
import {Card} from "../../components/card";
import fetch from 'isomorphic-fetch';

const apiUrl = process.env.API_URL

function Person(props) {

    return (
        <Page>
            <div>{props.name}</div>
            <Hero title={props.name} banner={props.bannerImage} profile={props.posterImage} imdbId={props.imdbId}/>
            <CardRow title={"Films"} cards={props.actorIn.map(film => <Card href={`/films/${film.id}`} image={film.posterImage}/>)}/>
        </Page>
    );
}

Person.getInitialProps = async ({ query} ) => {
    const result = await fetch(`${apiUrl}/people/${query.personId}`);
    return await result.json();
};

export default Person;