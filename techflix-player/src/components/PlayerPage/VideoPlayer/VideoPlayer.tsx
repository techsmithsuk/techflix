import React from 'react';

type VideoPlayerProps = {
    title: string,
    src: string,
}

export function VideoPlayer(props: VideoPlayerProps) {
    return (
        <iframe title={props.title}
                src={props.src}
                frameBorder="0"
                allow="encrypted-media;"
                allowFullScreen/>
    );
}