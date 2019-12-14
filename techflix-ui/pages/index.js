import React from "react";
import {NavBar} from "../components/navBar";

export default function Index() {
    return (
        <div>
            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}
            </style>
            <NavBar/>
            Hello World
        </div>
    );
}