import React from 'react';
import {Page} from "../../components/page";
import {Hero} from "../../components/hero";
import {CardRow} from "../../components/cardGrid";
import {Card} from "../../components/card";

const films = [
    <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
    <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
    <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
    <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
    <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
];

function Person(props) {

    return (
        <Page>
            <Hero title={props.name} banner={"https://m.media-amazon.com/images/M/MV5BZjA0Y2RkYTEtNjc3Mi00ZWY2LTg0N2ItMmVjNGMzNTVlYzI4XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,744_AL_.jpg"} profile={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>
            <CardRow title={"Films"} cards={films}/>
        </Page>
    );
}

Person.getInitialProps = ({ query} ) => {
    return {
        name: 'Daisy Ridley',
    }
};

export default Person;