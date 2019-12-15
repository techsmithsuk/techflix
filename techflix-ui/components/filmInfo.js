import React from 'react';
import {Field} from "./field";

export function FilmInfo() {
    return (
        <section>
            <h2>Info</h2>
            <Field label={"Synopsis"} value={"The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga."}/>
            <Field label={"Release Date"} value={"19th December 2019"}/>
        </section>
    );
}