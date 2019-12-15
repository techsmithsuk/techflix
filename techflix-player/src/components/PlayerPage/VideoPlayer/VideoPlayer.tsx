import React from 'react';
import './VideoPlayer.scss';

type VideoPlayerProps = {
    title: string,
    src: string,
}

export function VideoPlayer(props: VideoPlayerProps) {
    return (
        <section className="VideoPlayer">
            <h1 className="title">{props.title}</h1>
            <iframe className="player"
                    title={props.title}
                    src={props.src}
                    frameBorder="0"
                    allow="encrypted-media;"
                    allowFullScreen/>
        </section>
    );
}