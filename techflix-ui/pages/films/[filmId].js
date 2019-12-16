import React from 'react';
import {Page} from "../../components/page";
import {Hero} from "../../components/hero";
import {FilmInfo} from "../../components/filmInfo";
import {CardRow} from "../../components/cardGrid";
import {Card} from "../../components/card";
import fetch from 'isomorphic-fetch';

const actors = [
    <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
    <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
    <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
    <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
    <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
];

function Film(props) {

    return (
        <Page>
            <Hero title={props.title} watchNowId={props.id} banner={props.bannerImage} profile={props.posterImage}/>
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