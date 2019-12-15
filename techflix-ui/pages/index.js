import React from "react";
import {Page} from "../components/page";
import {WelcomeBanner} from "../components/welcomeBanner";
import {CardGrid} from "../components/cardGrid";
import {Card} from "../components/card";

const cards = [
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
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