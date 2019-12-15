import React from 'react';
import {Video, VideoCard} from "../VideoCard/VideoCard";
import './VideoList.scss'

type VideoListProps = {
    videos: Video[],
    sectionTitle: string,
}

export function VideoList(props: VideoListProps) {
    return (
        <section className="VideoList">
            <h2 className="sectionTitle">{props.sectionTitle}</h2>
            <ul className="list">
                {props.videos.map(video => <li className="listItem" key={video.id}><VideoCard video={video}/></li>)}
            </ul>
        </section>
    );
}