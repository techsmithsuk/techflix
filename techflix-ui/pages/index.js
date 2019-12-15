import React from "react";
import {Page} from "../components/page";
import {WelcomeBanner} from "../components/welcomeBanner";
import {CardGrid} from "../components/cardGrid";

const dummyCard = {
    'width': '192px',
    'background': 'white',
    'height': '280px',
};

const cards = [
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
    <div style={dummyCard}/>,
];

export default function Index() {
    return (
        <Page>
            <WelcomeBanner/>
            <CardGrid title={"Films"}
                      cards={cards}
            />
        </Page>
    );
}