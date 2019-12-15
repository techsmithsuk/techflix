import React from 'react';
import {Page} from "../../components/page";
import {Hero} from "../../components/hero";
import {FilmInfo} from "../../components/filmInfo";


function Film(props) {

    return (
        <Page>
            <Hero title={props.title}/>
            <FilmInfo/>
        </Page>
    );
}

Film.getInitialProps = ({ query} ) => {
    return {
        title: 'Star Wars: The Rise of Skywalker',
    }
};

export default Film;