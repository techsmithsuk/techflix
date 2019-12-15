import React from 'react';
import {Link} from "react-router-dom";

export type Video = {
    id: number,
    image: string,
    title: string,
    src: string,
}

type VideoCardProps = {
    video: Video,
}

export function VideoCard(props: VideoCardProps) {
    return (
        <Link to={`/${props.video.id}`}>
            <img alt={props.video.title} src={props.video.image}/>
        </Link>
    );
}