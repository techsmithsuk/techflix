import React from 'react';
import {Field} from "./field";

export function FilmInfo(props) {
    return (
        <section>
            <h2>Info</h2>
            <Field label={"Synopsis"} value={props.synopsis}/>
            <Field label={"Release Date"} value={props.releaseDate}/>
            <Field label={"Director"} value={props.director.name} href={props.director.page}/>
        </section>
    );
}