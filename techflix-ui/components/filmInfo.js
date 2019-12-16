import React from 'react';
import {Field} from "./field";
import {FONT, MARGIN} from "./styles/constants";

const subtitleInfo = {
    ...FONT.subtitle,
    "margin-top": MARGIN.large
};

export function FilmInfo(props) {
    return (
        <section>
            <h2 style={subtitleInfo}>Info</h2>
            <Field label={"Synopsis"} value={props.synopsis}/>
            <Field label={"Release Date"} value={props.releaseDate}/>
            {props.director && <Field label={"Director"} value={props.director.name} href={props.director.page}/>}
        </section>
    );
}