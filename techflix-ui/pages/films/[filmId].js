import React from 'react';
import {Page} from "../../components/page";
import {COLORS, FONT} from "../../components/styles/constants";
import {Hero} from "../../components/hero";


function Film(props) {

    return (
        <Page>
            <Hero title={props.title}/>
        </Page>
    );
}

Film.getInitialProps = ({ query} ) => {
    return {
        title: 'Star Wars: The Rise of Skywalker',
    }
};

export default Film;