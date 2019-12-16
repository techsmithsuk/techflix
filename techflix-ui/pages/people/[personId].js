import React from 'react';
import {Page} from "../../components/page";
import {Hero} from "../../components/hero";
import {CardRow} from "../../components/cardGrid";
import {Card} from "../../components/card";

function Person(props) {

    return (
        <Page>
            <div>{props.name}</div>
            <Hero title={props.name} banner={props.bannerImage} profile={props.posterImage} imdbLink={props.imdbLink}/>
            <CardRow title={"Films"} cards={props.films.map(film => <Card href={`/films/${film.id}`} image={film.posterImage}/>)}/>
        </Page>
    );
}

Person.getInitialProps = async ({ query} ) => {
    const result = await fetch(`http://localhost:8080/people/${query.personId}`);
    return await result.json();
};

export default Person;