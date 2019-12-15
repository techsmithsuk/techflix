import React, {ReactElement} from "react";
import {VideoPlayer} from "../VideoPlayer/VideoPlayer";

export function PlayerPage(): ReactElement {
    return (
        <div>
            <VideoPlayer title={"Star Wars: The Rise of Skywalker"} src={"https://www.youtube.com/embed/ssGXzh4MAYM"}/>
        </div>
    );
}