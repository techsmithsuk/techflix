import React from "react";
import {Page} from "../components/page";
import {WelcomeBanner} from "../components/welcomeBanner";
import {CardGrid} from "../components/cardGrid";
import {FilmCard} from "../components/card";
import fetch from 'isomorphic-fetch';
import {getUrl} from "../utils/urlUtils";

function Index(props) {
    const cards = props.films.map((film) => <FilmCard id={film.id} image={film.posterImage}/>);
    return (
        <Page>
            <WelcomeBanner/>
            <CardGrid title={"Films"} cards={cards}/>)} />
        </Page>
    );
}

Index.getInitialProps = async () => {
    const result = await fetch(getUrl(`/films`));
    return { films: await result.json() };
};

export default Index;