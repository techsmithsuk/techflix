import React from "react";
import {Page} from "../components/page";
import {WelcomeBanner} from "../components/welcomeBanner";
import {CardGrid} from "../components/cardGrid";
import {Card} from "../components/card";
import fetch from 'isomorphic-fetch';

const apiUrl = process.env.API_URL

function Index(props) {
    return (
        <Page>
            <WelcomeBanner/>
            <CardGrid title={"Films"} cards={props.films.map(film => <Card href={`/films/${film.id}`} image={film.posterImage}/>)} />
        </Page>
    );
}

Index.getInitialProps = async () => {
    const result = await fetch(`${apiUrl}/films`);
    return { films: await result.json() };
};

export default Index;