import React from 'react';
import {Video, VideoCard} from "../VideoCard/VideoCard";

type VideoListProps = {
    videos: Video[],
    sectionTitle: string,
}

export function VideoList(props: VideoListProps) {
    return (
        <section>
            <h2>{props.sectionTitle}</h2>
            {props.videos.map(video => <VideoCard video={video}/>)}
        </section>
    );
}