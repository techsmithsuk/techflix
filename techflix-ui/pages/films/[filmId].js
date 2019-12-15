import React from 'react';
import {Page} from "../../components/page";
import {Hero} from "../../components/hero";
import {FilmInfo} from "../../components/filmInfo";
import {CardRow} from "../../components/cardGrid";
import {Card} from "../../components/card";

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
            <Hero title={props.title} banner={"https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg"} profile={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>
            <FilmInfo/>
            <CardRow title={"Cast"} cards={actors}/>
        </Page>
    );
}

Film.getInitialProps = ({ query} ) => {
    return {
        title: 'Star Wars: The Rise of Skywalker',
    }
};

export default Film;