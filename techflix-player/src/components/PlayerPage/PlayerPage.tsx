import React, {ReactElement} from "react";
import {VideoPlayer} from "./VideoPlayer/VideoPlayer";
import {VideoList} from "../VideoList/VideoList";
import {Video} from "../VideoCard/VideoCard";

const relatedVideos: Video[] = [
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
];

const recommendedForYou: Video[] = [
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
];

const watchAgain: Video[] = [
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
];

export function PlayerPage(): ReactElement {
    return (
        <div>
            <VideoPlayer title={"Star Wars: The Rise of Skywalker"} src={"https://www.youtube.com/embed/ssGXzh4MAYM"}/>
            <VideoList sectionTitle={"Related Films"} videos={relatedVideos}/>
            <VideoList sectionTitle={"Related Films"} videos={relatedVideos}/>
            <VideoList sectionTitle={"Recommended For You"} videos={recommendedForYou}/>
            <VideoList sectionTitle={"Watch Again"} videos={watchAgain}/>
        </div>
    );
}