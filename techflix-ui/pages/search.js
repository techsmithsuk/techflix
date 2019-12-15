import React from 'react';
import {Page} from "../components/page";
import {FONT} from "../components/styles/constants";
import {CardGrid} from "../components/cardGrid";
import {Card} from "../components/card";

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

            {hasFilms && <CardGrid title="Films" cards={props.films}/>}
            {hasPeople && <CardGrid title="People" cards={props.people}/>}
        </Page>
    );
}

Search.getInitialProps = ({ query }) => {
    return {
        searchTerm: query.q,
        films: [
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
            <Card href={"/films/1"} image={"https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"}/>,
        ],
        people: [
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
            <Card href={"/people/1"} name={"Daisy Ridley"} image={"https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"}/>,
        ],
    }
};

export default Search;